document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
    
    // Global animation state tracking
    let initialStarAnimationCompleted = false;
    let starInOutObserver = null;
    let isCardOpen = false; // ADD: Track card state
    
    function initPageAnimations() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            console.log('Loading overlay found, starting animation...');
            setTimeout(() => {
                gsap.to('#loadingOverlay', {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingOverlay.style.display = 'none';
                        console.log('Loading overlay hidden successfully');
                        initializeMainAnimations();
                    }
                });
            }, 3000);
        } else {
            console.warn('Loading overlay not found');
            initializeMainAnimations();
        }
    }
    
    function initializeMainAnimations() {
        console.log('Initializing main animations...');
        initializeShootingStars();
        initializeStarAnimations();
        initializeBannerAnimations();
    }
    
    initPageAnimations();
    
    function initializeShootingStars() {
        const banner = document.querySelector('.anniversary-banner');
        if (!banner) {
            console.warn('Banner element not found');
            return;
        }
        
        // Configuration untuk shooting stars
        const shootingStarConfig = {
            frequency: {
                min: 3000,
                max: 8000
            },
            speed: {
                min: 1.5,
                max: 3.0
            },
            trail: {
                length: 12,
                spacing: 0.08
            },
            colors: [
                'rgba(255, 255, 255, 1)',
                'rgba(255, 247, 153, 1)',
                'rgba(173, 216, 230, 1)',
                'rgb(4, 109, 179)',
                'rgba(221, 160, 221, 1)'
            ]
        };

        function createShootingStar() {
            const starColor = shootingStarConfig.colors[
                Math.floor(Math.random() * shootingStarConfig.colors.length)
            ];
            const startSide = Math.random() > 0.5 ? 'top' : 'right';
            let startX, startY, endX, endY;
            
            if (startSide === 'top') {
                startX = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.2;
                startY = -50;
                endX = startX - (window.innerWidth * 0.6 + Math.random() * window.innerWidth * 0.4);
                endY = window.innerHeight * 0.7 + Math.random() * window.innerHeight * 0.3;
            } else {
                startX = window.innerWidth + 50;
                startY = Math.random() * window.innerHeight * 0.3;
                endX = startX - (window.innerWidth * 0.8 + Math.random() * window.innerWidth * 0.4);
                endY = startY + (window.innerHeight * 0.5 + Math.random() * window.innerHeight * 0.3);
            }
            
            const shootingStar = document.createElement('div');
            shootingStar.className = 'enhanced-shooting-star';
            shootingStar.style.cssText = `
                position: absolute;
                width: 6px;
                height: 6px;
                background: ${starColor};
                border-radius: 50%;
                left: ${startX}px;
                top: ${startY}px;
                box-shadow: 
                    0 0 10px 2px ${starColor},
                    0 0 20px 4px ${starColor.replace('1)', '0.6)')},
                    0 0 30px 6px ${starColor.replace('1)', '0.3)')};
                z-index: 15;
                pointer-events: none;
                opacity: 0;
            `;
            banner.appendChild(shootingStar);
            
            const trailElements = [];
            for (let i = 0; i < shootingStarConfig.trail.length; i++) {
                const trail = document.createElement('div');
                const trailSize = Math.max(1, 6 - i * 0.4);
                const trailOpacity = Math.max(0.1, 1 - (i * 0.08));

                trail.className = `shooting-star-trail trail-${i}`;
                trail.style.cssText = `
                    position: absolute;
                    width: ${trailSize}px;
                    height: ${trailSize}px;
                    background: ${starColor.replace('1)', `${trailOpacity})`)};
                    border-radius: 50%;
                    left: ${startX}px;
                    top: ${startY}px;
                    box-shadow: 0 0 ${trailSize * 2}px ${starColor.replace('1)', `${trailOpacity * 0.5})`)};
                    z-index: ${15 - i};
                    pointer-events: none;
                    opacity: 0;
                `;
                banner.appendChild(trail);
                trailElements.push(trail);
            }
            
            const duration = Math.random() *
                (shootingStarConfig.speed.max - shootingStarConfig.speed.min) +
                shootingStarConfig.speed.min;
            
            const tl = gsap.timeline();
            tl.to(shootingStar, {
                opacity: 1,
                duration: 0.1,
                ease: "power2.out"
            })
            .to(shootingStar, {
                x: endX - startX,
                y: endY - startY,
                duration: duration,
                ease: "power1.in",
                onUpdate: function () {
                    const progress = this.progress();
                    trailElements.forEach((trail, index) => {
                        const trailDelay = index * shootingStarConfig.trail.spacing;
                        const trailProgress = Math.max(0, progress - trailDelay);

                        gsap.set(trail, {
                            opacity: trailProgress > 0 ? 1 : 0,
                            x: trailProgress * (endX - startX),
                            y: trailProgress * (endY - startY),
                        });
                    });
                }
            }, 0.05)
            .to([shootingStar, ...trailElements], {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                stagger: {
                    amount: 0.2,
                    from: "end"
                }
            }, "-=0.5")
            .call(() => {
                shootingStar.remove();
                trailElements.forEach(trail => trail.remove());
            });
            
            if (Math.random() > 0.7) {
                tl.call(() => {
                    createSparkleEffect(endX, endY, starColor);
                }, null, duration * 0.8);
            }
        }

        function createSparkleEffect(x, y, color) {
            const sparkleCount = Math.floor(Math.random() * 5) + 3;

            for (let i = 0; i < sparkleCount; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.cssText = `
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    background: ${color};
                    border-radius: 50%;
                    left: ${x}px;
                    top: ${y}px;
                    box-shadow: 0 0 8px ${color};
                    z-index: 20;
                    pointer-events: none;
                `;
                banner.appendChild(sparkle);
                
                gsap.to(sparkle, {
                    x: (Math.random() - 0.5) * 60,
                    y: (Math.random() - 0.5) * 60,
                    opacity: 0,
                    scale: Math.random() * 2 + 0.5,
                    duration: Math.random() * 1 + 0.5,
                    ease: "power2.out",
                    onComplete: () => sparkle.remove()
                });
            }
        }

        function scheduleNextShootingStar() {
            const delay = Math.random() *
                (shootingStarConfig.frequency.max - shootingStarConfig.frequency.min) +
                shootingStarConfig.frequency.min;

            gsap.delayedCall(delay / 1000, () => {
                createShootingStar();
                scheduleNextShootingStar();
            });
        }
        
        gsap.delayedCall(2, () => {
            createShootingStar();
            scheduleNextShootingStar();
        });
        
        let isPageVisible = !document.hidden;
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && isPageVisible) {
                gsap.globalTimeline.pause();
                isPageVisible = false;
            } else if (!document.hidden && !isPageVisible) {
                gsap.globalTimeline.resume();
                isPageVisible = true;
            }
        });
        
        ScrollTrigger.create({
            trigger: '.anniversary-banner',
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => {
                if (isPageVisible) gsap.globalTimeline.resume();
            },
            onLeave: () => gsap.globalTimeline.pause(),
            onEnterBack: () => {
                if (isPageVisible) gsap.globalTimeline.resume();
            },
            onLeaveBack: () => gsap.globalTimeline.pause()
        });

        console.log('✨ Enhanced Shooting Stars initialized');
    }
    
    initializeShootingStars();
    
    const shootingStarStyles = `
        .enhanced-shooting-star,
        .shooting-star-trail {
            will-change: transform, opacity;
            backface-visibility: hidden;
            transform: translateZ(0);
        }
        
        .enhanced-shooting-star {
            filter: brightness(1.2);
        }
        
        /* Optional: Subtle glow animation untuk main stars */
        @keyframes shootingGlow {
            0%, 100% { filter: brightness(1.2) blur(0px); }
            50% { filter: brightness(1.5) blur(0.5px); }
        }
        
        /* Animation states for stars */
        .main-star.fade-in {
            opacity: 1 !important;
            visibility: visible !important;
            transform: scale(1) translateY(0) rotate(0deg) !important;
            filter: none !important;
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out !important;
        }
        
        .main-star.fade-out {
            opacity: 0 !important;
            transform: scale(0.8) translateY(-50px) !important;
            filter: blur(5px) !important;
            transition: opacity 0.6s ease-in, transform 0.6s ease-in, filter 0.6s ease-in !important;
        }
        
        .star-text.fade-in {
            opacity: 1 !important;
            transform: translateX(-50%) translateY(0) !important;
            filter: none !important;
            transition: opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out !important;
        }
        
        .star-text.fade-out {
            opacity: 0 !important;
            transform: translateX(-50%) translateY(-30px) !important;
            filter: blur(3px) !important;
            transition: opacity 0.6s ease-in, transform 0.6s ease-in, filter 0.6s ease-in !important;
        }
        
        /* FIXED: Ensure stars are always clickable */
        .main-star {
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            z-index: 50 !important; /* Always above other elements */
            pointer-events: auto !important; /* Always clickable */
        }
        
        .main-star:hover {
            transform: scale(1.1) !important;
            z-index: 100 !important;
        }
        
        .main-star.star-1:hover {
            filter: brightness(1.2) drop-shadow(0 0 15px rgba(255, 215, 0, 0.8)) !important;
        }
        
        .main-star.star-7:hover {
            filter: brightness(1.2) drop-shadow(0 0 15px rgba(0, 191, 255, 0.8)) !important;
        }
        
        .main-star:not(.star-1):not(.star-7):hover {
            filter: brightness(1.2) drop-shadow(0 0 15px #ffd700) !important;
        }
        
        .star-text {
            transition: all 0.3s ease;
        }
        
        .main-star:hover .star-text {
            letter-spacing: 1px !important;
        }
        
        .main-star.star-1:hover .star-text {
            color: #ffd700 !important;
            text-shadow: 0 0 12px rgba(255, 215, 0, 0.8) !important;
        }
        
        .main-star.star-7:hover .star-text {
            color: #00bfff !important;
            text-shadow: 0 0 12px rgba(0, 191, 255, 0.8) !important;
        }
        
        .main-star:not(.star-1):not(.star-7):hover .star-text {
            color: #ffeb3b !important;
            text-shadow: 0 0 12px rgba(255, 215, 0, 0.8) !important;
        }
        
        /* FIXED: Ensure stars remain visible when card is open */
        .main-star.card-interaction-mode {
            opacity: 1 !important;
            transform: scale(1) !important;
            filter: none !important;
            visibility: visible !important;
            pointer-events: auto !important;
            z-index: 100 !important;
        }
    `;
    
    if (!document.querySelector('#shooting-star-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'shooting-star-styles';
        styleSheet.textContent = shootingStarStyles;
        document.head.appendChild(styleSheet);
    }
    
    // ADD: Function to track card state
    window.setCardState = function(isOpen) {
        isCardOpen = isOpen;
        console.log('Card state changed:', isOpen);
        
        // ADD: Apply special class when card is open
        const mainStars = document.querySelectorAll('.main-star');
        mainStars.forEach(star => {
            if (isOpen) {
                star.classList.add('card-interaction-mode');
            } else {
                star.classList.remove('card-interaction-mode');
            }
        });
    };
    
    // === STAR INITIALIZATION WITH GSAP ===
    const mainStars = document.querySelectorAll('.main-star');
    mainStars.forEach(star => {
        gsap.set(star, {
            opacity: 0,
            y: -100,
            scale: 0.8,
            visibility: 'hidden',
            rotationZ: 0
        });
        star.style.transition = 'none';
        star.offsetHeight;
    });

    // === ENHANCED STAR FALLING ANIMATION SYSTEM ===
    function createStarFallingAnimation() {
        const starAnimations = [];
        mainStars.forEach((star, index) => {
            const starTimeline = gsap.timeline({ paused: true });
            const isDebut = star.classList.contains('star-1');
            const isAnniversary = star.classList.contains('star-7');
            
            starTimeline.set(star, {
                opacity: 0,
                y: -100,
                scale: 0.8,
                visibility: 'visible',
                transformOrigin: 'center center'
            });
            
            starTimeline.to(star, {
                duration: 0.8,
                opacity: 1,
                y: 10,
                scale: 1,
                rotationZ: isDebut ? -5 : isAnniversary ? 5 : 0,
                ease: "power2.out"
            })
            .to(star, {
                duration: 0.3,
                y: -5,
                rotationZ: isDebut ? 5 : isAnniversary ? -5 : 0,
                ease: "power2.inOut"
            })
            .to(star, {
                duration: 0.4,
                y: 0,
                rotationZ: 0,
                ease: "bounce.out"
            });
            
            const starText = star.querySelector('.star-text');
            if (starText) {
                gsap.set(starText, { opacity: 0 });
                starTimeline.to(starText, {
                    duration: 0.5,
                    opacity: 1,
                    ease: "power2.out"
                }, "-=0.3");
            }
            
            starAnimations.push({
                timeline: starTimeline,
                star: star,
                index: index
            });
        });

        return starAnimations;
    }

    // === SCROLL TRIGGER SETUP ===
    const starAnimations = createStarFallingAnimation();
    let animationTriggered = false;
    let titleAnimationTriggered = false;

    // === MAIN TITLE SLIDE ANIMATION ===
    const mainTitle = document.querySelector('.main-title');
    let titleSlideTimeline;

    if (mainTitle) {
        gsap.set(mainTitle, {
            x: -300,
            opacity: 0,
            visibility: 'visible'
        });
        
        titleSlideTimeline = gsap.timeline({ paused: true });
        titleSlideTimeline.to(mainTitle, {
            duration: 1.2,
            x: 0,
            opacity: 1,
            ease: "power3.out"
        })
        .to(mainTitle, {
            duration: 0.3,
            x: 20,
            ease: "power2.inOut"
        })
        .to(mainTitle, {
            duration: 0.4,
            x: 0,
            ease: "back.out(1.7)"
        });
    }
    
    const masterTimeline = gsap.timeline({ 
        paused: true,
        onComplete: () => {
            console.log('🌟 Initial star animation completed');
            initialStarAnimationCompleted = true;
            setupStarInOutAnimation();
            // Enable permanent hover after initial animation
            setupPermanentHoverEffects();
        }
    });
    
    starAnimations.forEach((starAnim, index) => {
        masterTimeline.add(starAnim.timeline.play(), index * 0.2);
    });
    
    const starObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationTriggered) {
                animationTriggered = true;
                console.log('🌟 Star animation triggered at 50% section visibility');
                gsap.delayedCall(0.1, () => {
                    masterTimeline.restart();
                });
                starObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });
    
    const section1 = document.querySelector('.parallax-container');
    if (section1) {
        starObserver.observe(section1);
    }
    
    // === PERMANENT HOVER EFFECTS SETUP ===
    function setupPermanentHoverEffects() {
        console.log('🌟 Setting up permanent hover effects');
        
        mainStars.forEach((star, index) => {
            // Remove any existing hover tweens
            gsap.killTweensOf(star);
            
            // Store hover state
            let isHovering = false;
            
            // Enhanced hover enter
            star.addEventListener('mouseenter', function() {
                if (isHovering) return;
                isHovering = true;
                
                console.log(`🌟 Hover enter: ${star.className}`);
                
                // Kill any existing tweens
                gsap.killTweensOf([star, star.querySelector('.star-text')]);
                
                const starText = star.querySelector('.star-text');
                const isDebut = star.classList.contains('star-1');
                const isAnniversary = star.classList.contains('star-7');
                
                // Determine colors
                let glowColor = 'rgba(255, 215, 0, 0.8)';
                let textColor = '#ffeb3b';
                
                if (isDebut) {
                    glowColor = 'rgba(255, 215, 0, 0.8)';
                    textColor = '#ffd700';
                } else if (isAnniversary) {
                    glowColor = 'rgba(0, 191, 255, 0.8)';
                    textColor = '#00bfff';
                }
                
                // Star hover animation
                gsap.to(star, {
                    duration: 0.15,
                    scale: 1.1,
                    filter: `brightness(1.2) drop-shadow(0 0 15px ${glowColor})`,
                    ease: "power2.out",
                    overwrite: true,
                    zIndex: 100
                });
                
                // Text hover animation
                if (starText) {
                    gsap.to(starText, {
                        duration: 0.15,
                        color: textColor,
                        textShadow: `0 0 12px ${glowColor}`,
                        letterSpacing: '1px',
                        ease: "power2.out",
                        overwrite: true
                    });
                }
                
                // Mark as hover active
                star.classList.add('star-hover-active');
            });
            
            // Enhanced hover leave
            star.addEventListener('mouseleave', function() {
                if (!isHovering) return;
                isHovering = false;
                
                console.log(`🌟 Hover leave: ${star.className}`);
                
                // Kill any existing tweens
                gsap.killTweensOf([star, star.querySelector('.star-text')]);
                
                const starText = star.querySelector('.star-text');
                
                // Reset star
                gsap.to(star, {
                    duration: 0.2,
                    scale: 1,
                    filter: 'none',
                    ease: "power2.out",
                    overwrite: true,
                    zIndex: 'auto'
                });
                
                // Reset text
                if (starText) {
                    gsap.to(starText, {
                        duration: 0.2,
                        color: 'white',
                        textShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                        letterSpacing: '0px',
                        ease: "power2.out",
                        overwrite: true
                    });
                }
                
                // Remove hover active class
                star.classList.remove('star-hover-active');
            });
            
            // Add cursor pointer
            star.style.cursor = 'pointer';
        });
    }
    
    // === NEW: STAR IN/OUT ANIMATION SYSTEM ===
    function setupStarInOutAnimation() {
        console.log('🌟 Setting up star in/out animation system');
        
        // Reset any existing observer
        if (starInOutObserver) {
            starInOutObserver.disconnect();
        }
        
        // Create new observer for in/out animations
        starInOutObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const star = entry.target;
                const starText = star.querySelector('.star-text');
                
                // FIXED: Don't apply fade effects when card is open
                if (isCardOpen) return;
                
                if (entry.isIntersecting) {
                    // Star enters viewport - fade in
                    star.classList.remove('fade-out');
                    star.classList.add('fade-in');
                    
                    if (starText) {
                        starText.classList.remove('fade-out');
                        starText.classList.add('fade-in');
                    }
                    
                    console.log(`⭐ Star ${star.className} faded in`);
                } else {
                    // Star leaves viewport - fade out
                    star.classList.remove('fade-in');
                    star.classList.add('fade-out');
                    
                    if (starText) {
                        starText.classList.remove('fade-in');
                        starText.classList.add('fade-out');
                    }
                    
                    console.log(`⭐ Star ${star.className} faded out`);
                }
            });
        }, {
            root: null,
            rootMargin: '20px',
            threshold: 0.3
        });
        
        // Observe all main stars
        mainStars.forEach(star => {
            starInOutObserver.observe(star);
        });
    }
    
    // === OPTIMIZED SCROLL PARALLAX WITH GSAP ===
    let scrollTween;
    ScrollTrigger.create({
        trigger: '.parallax-container',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: (self) => {
            // FIXED: Only apply scroll effects if initial animation is completed AND card is not open
            if (!initialStarAnimationCompleted || isCardOpen) return;
            
            const progress = self.progress;
            const easeProgress = progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            mainStars.forEach((star, index) => {
                // Don't apply scroll effects to hovered stars or when card is open
                if (!star.classList.contains('star-hover-active') && !star.classList.contains('fade-out') && !isCardOpen) {
                    const staggerOffset = index * 0.1;
                    const adjustedProgress = Math.max(0, Math.min(1, easeProgress - staggerOffset));
                    
                    gsap.set(star, {
                        opacity: 1 - adjustedProgress,
                        scale: 1 - (adjustedProgress * 0.5),
                        y: -150 * adjustedProgress,
                        rotationZ: 180 * adjustedProgress,
                        filter: `blur(${adjustedProgress * 8}px) brightness(${0.6 + ((1 - adjustedProgress) * 0.4)})`
                    });
                    
                    const starText = star.querySelector('.star-text');
                    if (starText && !star.classList.contains('star-hover-active')) {
                        gsap.set(starText, {
                            opacity: 1 - adjustedProgress,
                            y: -100 * adjustedProgress,
                            filter: `blur(${adjustedProgress * 4}px)`
                        });
                    }
                }
            });
        }
    });
});

let lastScrollTop = 0;
let ticking = false;

function updateScrollEffects() {
    const scrollY = window.scrollY;
    const scrollTop = scrollY;
    const windowHeight = window.innerHeight;

    const section1 = document.querySelector('.parallax-container');
    const section2 = document.querySelector('.content-section');
    const section3 = document.querySelector('.section-3');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (!section1 || !section2) return;
    const section1Top = section1.offsetTop;
    const section1Bottom = section1Top + section1.offsetHeight;
    const section2Top = section2.offsetTop;
    const section2Bottom = section2Top + section2.offsetHeight;

    // === SCROLL INDICATOR FADE ===
    if (scrollIndicator) {
        scrollIndicator.style.opacity = scrollY > 50 ? '0' : '0.7';
    }

    // === ANNIVERSARY TITLE PARALLAX ===
    const anniversaryTitle = document.querySelector('.anniversary-title');
    if (anniversaryTitle) {
        const scrollProgress = Math.min(1, scrollY / windowHeight);
        const moveDownValue = scrollY * 0.5;
        const blurValue = scrollProgress * 10;
        const opacityValue = 1 - (scrollProgress * 1.5);

        anniversaryTitle.style.transform = `translateY(${moveDownValue}px)`;
        anniversaryTitle.style.filter = `blur(${blurValue}px)`;
        anniversaryTitle.style.opacity = opacityValue;
    }

    // === ENHANCED STAR TRANSPARENCY CALCULATION ===
    let starOpacity = 1;
    let starScale = 1;
    let starBlur = 0;
    let starMoveUp = 0;
    let starRotation = 0;
    if (scrollY >= section1Top && scrollY <= section2Top) {
        const transitionProgress = (scrollY - section1Top) / (section2Top - section1Top);
        const smoothProgress = Math.max(0, Math.min(1, transitionProgress));
        const easeProgress = smoothProgress < 0.5
            ? 2 * smoothProgress * smoothProgress
            : 1 - Math.pow(-2 * smoothProgress + 2, 3) / 2;
        starOpacity = 1 - easeProgress;
        starScale = 1 - (easeProgress * 0.5);
        starBlur = easeProgress * 8;
        starMoveUp = easeProgress * 150;
        starRotation = easeProgress * 180;
    } else if (scrollY > section2Top) {
        starOpacity = 0;
        starScale = 0.5;
        starBlur = 8;
        starMoveUp = 150;
        starRotation = 180;
    }

    // === APPLY ENHANCED STAR EFFECTS ===
    document.querySelectorAll('.main-star').forEach((star, index) => {
        const isHovered = star.classList.contains('star-hover-active');

        if (!isHovered) {
            star.style.opacity = starOpacity;
            star.style.filter = `blur(${starBlur}px) brightness(${0.6 + (starOpacity * 0.4)})`;
            const staggerDelay = index * 0.1;
            star.style.transitionDelay = `${staggerDelay}s`;
        }
    });

    // === ENHANCED STAR TEXT EFFECTS ===
    document.querySelectorAll('.star-text').forEach((text, index) => {
        const parentStar = text.closest('.main-star');
        const isParentHovered = parentStar && parentStar.classList.contains('star-hover-active');

        if (!isParentHovered) {
            text.style.opacity = starOpacity;
            text.style.transform = `translateX(-50%) translateY(-${starMoveUp * 0.7}px)`;
            text.style.filter = `blur(${starBlur * 0.5}px)`;
            const staggerDelay = index * 0.05;
            text.style.transitionDelay = `${staggerDelay}s`;
        }
    });
    // === BACKGROUND STARS PARALLAX ===
    const starsBackground = document.querySelector('.stars');
    if (starsBackground) {
        starsBackground.style.transform = `translateY(${scrollY * 0.1}px)`;
        starsBackground.style.opacity = Math.max(0.3, starOpacity);
    }
    // === MOON PARALLAX ===
    const moonBottom = document.querySelector('.moon-bottom');
    if (moonBottom) {
        const moonBottomPosition = -350 + (scrollY * 0.1);
        const maxMoonBottomPosition = -150;
        const moonBottomFinalPosition = Math.min(moonBottomPosition, maxMoonBottomPosition);
        moonBottom.style.top = `${moonBottomFinalPosition}px`;
    }
    // === ENHANCED CLOUD PARALLAX ===
    const cloudThreshold = section1Bottom - windowHeight * 0.3;
    const cloudAnimationDistance = windowHeight * 0.5;
    const scrollPastThreshold = Math.max(0, scrollY - cloudThreshold);
    const animationProgress = Math.min(1, scrollPastThreshold / cloudAnimationDistance);

    document.querySelectorAll('.cloud').forEach((cloud) => {
        const isLeftCloud = cloud.classList.contains('cloud-left');
        const isRightCloud = cloud.classList.contains('cloud-right');

        const moveDistance = (isLeftCloud ? -100 : 100) * animationProgress + (isLeftCloud ? -5 : 5);
        cloud.style.transform = `translateX(${moveDistance}%) translateY(${scrollTop * 0.05}px)`;
        cloud.style.opacity = 1 - animationProgress * 0.7;
    });

    // === SECTION 3 PARALLAX ===
    if (section3) {
        const letterImage = document.getElementById('letterImage');
        const letterTitle = document.querySelector('.letter-title');
        const letterContent = document.getElementById('letterContent');
        const envelopeTitle = document.getElementById('envelopeTitle');

        if (letterImage && letterTitle && letterContent && envelopeTitle) {
            const section3Top = section3.offsetTop;
            const section3Bottom = section3Top + section3.offsetHeight;

            const viewportTop = scrollY;
            const viewportBottom = scrollY + windowHeight;

            const isSection3Visible = viewportBottom > section3Top && viewportTop < section3Bottom;

            if (isSection3Visible) {
                const sectionCenter = section3Top + (section3.offsetHeight / 2);
                const viewportCenter = scrollY + (windowHeight / 2);
                const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
                const maxDistance = section3.offsetHeight / 2 + windowHeight / 2;
                const visibility = Math.max(0, 1 - (distanceFromCenter / maxDistance));

                if (visibility > 0.4) {
                    if (!letterTitle.classList.contains('fade-in')) {
                        letterTitle.classList.add('fade-in');
                    }
                    if (!letterContent.classList.contains('fade-in')) {
                        setTimeout(() => {
                            letterContent.classList.add('fade-in');
                        }, 200);
                    }
                    if (!letterImage.classList.contains('fade-in')) {
                        setTimeout(() => {
                            letterImage.classList.add('fade-in');
                        }, 400);
                    }
                    if (!envelopeTitle.classList.contains('fade-in')) {
                        setTimeout(() => {
                            envelopeTitle.classList.add('fade-in');
                        }, 600);
                    }
                }

                const parallaxOffset = (scrollY - section3Top) * 0.1;
                letterImage.style.transform = `translateY(${parallaxOffset}px) scale(${letterImage.classList.contains('fade-in') ? 1 : 0.8})`;

            } else {
                if (scrollY > section3Bottom + 200 || scrollY + windowHeight < section3Top - 200) {
                    letterImage.classList.remove('fade-in');
                    letterTitle.classList.remove('fade-in');
                    letterContent.classList.remove('fade-in');
                    envelopeTitle.classList.remove('fade-in');
                }
            }
        }
    }

    ticking = false;
}
window.addEventListener('scroll', function () {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}, false);
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);
    function createDynamicStars() {
        const bannerStars = document.querySelector('.banner-stars');
        if (!bannerStars) return;
        bannerStars.style.backgroundImage = 'none';
        const starCount = 50;
        const stars = [];
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'dynamic-star';
            star.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: white;
                border-radius: 50%;
                box-shadow: 0 0 ${Math.random() * 10 + 5}px rgba(255,255,255,0.8);
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.8 + 0.2};
            `;
            bannerStars.appendChild(star);
            stars.push(star);
        }
        stars.forEach((star, index) => {
            gsap.to(star, {
                opacity: Math.random() * 0.3 + 0.1,
                duration: Math.random() * 3 + 2,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: Math.random() * 2
            });
            gsap.to(star, {
                x: `+=${Math.random() * 20 - 10}`,
                y: `+=${Math.random() * 20 - 10}`,
                duration: Math.random() * 8 + 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 3
            });
        });
        gsap.to('.dynamic-star', {
            y: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: '.anniversary-banner',
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5,
                onUpdate: (self) => {
                    stars.forEach((star, index) => {
                        const speed = (index % 3 + 1) * 0.5;
                        gsap.set(star, {
                            y: self.progress * -100 * speed
                        });
                    });
                }
            }
        });
    }

    function enhanceAnniversaryTitle() {
        const title = document.querySelector('.anniversary-title');
        const h1 = title?.querySelector('h1');
        const h2 = title?.querySelector('h2');
        if (!title || !h1 || !h2) return;
        gsap.set([h1, h2], {
            opacity: 0,
            y: 50,
            scale: 0.8
        });
        const titleTimeline = gsap.timeline({ delay: 0.5 });
        titleTimeline
            .to(h1, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.7)"
            })
            .to(h2, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "back.out(1.7)"
            }, "-=0.3")
            .to([h1, h2], {
                textShadow: "0 0 30px rgba(255, 255, 255, 0.6)",
                duration: 0.8,
                ease: "power2.inOut"
            }, "-=0.5");
        ScrollTrigger.create({
            trigger: '.anniversary-banner',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                gsap.set(title, {
                    y: progress * 200,
                    opacity: 1 - progress * 1.5,
                    filter: `blur(${progress * 15}px)`,
                    scale: 1 - progress * 0.3
                });
            }
        });
    }
    function createConstellationEffect() {
        const banner = document.querySelector('.anniversary-banner');
        if (!banner) return;
        const constellationContainer = document.createElement('div');
        constellationContainer.className = 'constellation-container';
        constellationContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        banner.appendChild(constellationContainer);
        const points = [];
        const pointCount = 12;
        for (let i = 0; i < pointCount; i++) {
            const point = document.createElement('div');
            point.className = 'constellation-point';
            point.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(255,255,255,0.8);
                left: ${Math.random() * 80 + 10}%;
                top: ${Math.random() * 80 + 10}%;
            `;
            constellationContainer.appendChild(point);
            points.push(point);
            gsap.to(point, {
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.8,
                duration: Math.random() * 4 + 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2
            });
        }
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        `;
        constellationContainer.appendChild(svg);
        points.forEach((point1, i) => {
            points.slice(i + 1).forEach(point2 => {
                const rect1 = point1.getBoundingClientRect();
                const rect2 = point2.getBoundingClientRect();
                const distance = Math.hypot(rect2.left - rect1.left, rect2.top - rect1.top);
                if (distance < 200) {
                    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                    line.setAttribute('x1', point1.offsetLeft);
                    line.setAttribute('y1', point1.offsetTop);
                    line.setAttribute('x2', point2.offsetLeft);
                    line.setAttribute('y2', point2.offsetTop);
                    line.setAttribute('stroke', 'rgba(255,255,255,0.3)');
                    line.setAttribute('stroke-width', '1');
                    svg.appendChild(line);
                    gsap.to(line, {
                        opacity: Math.random() * 0.4 + 0.1,
                        duration: Math.random() * 5 + 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }
            });
        });
    }
    createDynamicStars();
    enhanceAnniversaryTitle();
    createConstellationEffect();
    ScrollTrigger.addEventListener("refresh", () => {
        ScrollTrigger.refresh();
    });

    const banner = document.querySelector('.anniversary-banner');
    if (banner) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.globalTimeline.play();
                } else {
                    gsap.globalTimeline.pause();
                }
            });
        });
        observer.observe(banner);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(ScrollTrigger);

    const photoRow = document.querySelector('.photo-row');
    const artistsRow = document.querySelector('.artists-row');

    if (photoRow && artistsRow) {
        // Set initial state
        gsap.set([photoRow, artistsRow], { opacity: 0, y: 50 });

        // OPTION 1: Use a single ScrollTrigger with scrub for smoother transitions
        ScrollTrigger.create({
            trigger: '#section2',
            start: 'top 90%',
            end: 'bottom 10%',
            onEnter: () => {
                gsap.to([photoRow, artistsRow], {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    immediateRender: false
                });
            },
            onLeave: () => {
                gsap.to([photoRow, artistsRow], {
                    opacity: 0,
                    y: -30, // ← Fade up instead of down when leaving
                    duration: 0.5,
                    ease: 'power2.in',
                    immediateRender: false
                });
            },
            onEnterBack: () => {
                gsap.to([photoRow, artistsRow], {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    immediateRender: false
                });
            },
            onLeaveBack: () => {
                gsap.to([photoRow, artistsRow], {
                    opacity: 0,
                    y: 50,
                    duration: 0.5,
                    ease: 'power2.in',
                    immediateRender: false
                });
            }
        });
    }
});