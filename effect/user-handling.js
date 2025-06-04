document.addEventListener('DOMContentLoaded', function () {
    // === ENHANCED IMAGE VIEWER FUNCTIONALITY WITH GSAP ===
    function createImageViewer() {
        const imageViewer = document.createElement('div');
        imageViewer.id = 'imageViewer';
        imageViewer.innerHTML = `
        <div class="image-viewer-overlay">
            <div class="image-viewer-container">
                <button class="image-viewer-close">&times;</button>
                <img class="image-viewer-image" src="" alt="">
                <div class="image-viewer-title"></div>
                <div class="image-viewer-navigation">
                    <button class="nav-btn prev-btn">
                        <div class="btn-bg"></div>
                        <div class="btn-content">
                            <span class="nav-text">Previous</span>
                        </div>
                        <div class="ripple-effect"></div>
                    </button>
                    <button class="nav-btn next-btn">
                        <div class="btn-bg"></div>
                        <div class="btn-content">
                            <span class="nav-text">Next</span>
                        </div>
                        <div class="ripple-effect"></div>
                    </button>
                </div>
            </div>
        </div>
    `;
        document.body.appendChild(imageViewer);
        const style = document.createElement('style');
        style.textContent = `
        #imageViewer {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
            background: radial-gradient(ellipse at center, rgba(0, 10, 30, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%);
            backdrop-filter: blur(20px);
        }
        
        #imageViewer.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .image-viewer-container {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .image-viewer-image {
            max-width: 100%;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 15px;
            box-shadow: 
                0 20px 60px rgba(0, 0, 0, 0.6),
                0 0 40px rgba(100, 150, 255, 0.2);
        }
        
        .image-viewer-close {
            position: absolute;
            top: -55px;
            right: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 28px;
            font-weight: 300;
            width: 45px;
            height: 45px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 10000;
        }
        
        .image-viewer-close:hover {
            background: rgb(0, 64, 128);
            border-color:rgb(155, 165, 255);
            box-shadow: 0 0 30px rgb(0, 102, 204);
            transform: scale(1.1);
        }
        
        .image-viewer-title {
            color: white;
            font-size: 28px;
            font-weight: 300;
            margin-top: 25px;
            text-align: center;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
            letter-spacing: 1px;
        }
        
        .image-viewer-navigation {
            display: flex;
            gap: 40px;
            margin-top: 40px;
            align-items: center;
        }
        
        /* === FLAT NAVIGATION BUTTONS (NO GLOSSY EFFECTS) === */
        .nav-btn {
            position: relative;
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            border-radius: 16px;
            overflow: hidden;
            min-width: 140px;
            height: 55px;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: translateZ(0);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Flat background with solid gradient */
        .btn-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgb(0, 102, 204) 0%,
                rgb(0, 64, 128) 50%,
                rgb(0, 40, 80) 100%
            );
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Button content */
        .btn-content {
            position: relative;
            display: flex;
            align-items: center;
            gap: 12px;
            z-index: 2;
            color: white;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
        
        .nav-icon {
            font-size: 24px;
            font-weight: bold;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .nav-text {  
            font-family: "Rubik", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-size: 1rem;
            font-style: normal;
            letter-spacing: 1px;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Ripple effect */
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            opacity: 0;
            pointer-events: none;
        }
        
        /* Hover States - Flat design with different gradient */
        .nav-btn:hover .btn-bg {
            background: linear-gradient(135deg, 
                rgb(30, 120, 220) 0%,
                rgb(20, 80, 150) 50%,
                rgb(10, 50, 100) 100%
            );
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .nav-btn:hover .nav-icon {
            text-shadow: 
                0 0 10px rgba(255, 255, 255, 0.6),
                0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .nav-btn:hover .nav-text {
            text-shadow: 
                0 0 8px rgba(255, 255, 255, 0.4),
                0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        /* Active/Click States */
        .nav-btn:active .btn-bg {
            background: linear-gradient(135deg, 
                rgb(50, 140, 240) 0%,
                rgb(40, 100, 180) 50%,
                rgb(20, 60, 120) 100%
            );
            transform: scale(0.96);
        }
        
        /* Previous button specific animations */
        .prev-btn .nav-icon {
            transform: translateX(0);
        }
        
        .prev-btn:hover .nav-icon {
            transform: translateX(-3px) scale(1.1);
        }
        
        /* Next button specific animations */
        .next-btn .nav-icon {
            transform: translateX(0);
        }
        
        .next-btn:hover .nav-icon {
            transform: translateX(3px) scale(1.1);
        }
        
        /* Disabled States */
        .nav-btn:disabled {
            opacity: 0.3;
            cursor: not-allowed;
            transform: none;
        }
        
        .nav-btn:disabled .btn-bg {
            background: linear-gradient(135deg, 
                rgb(100, 100, 100) 0%,
                rgb(60, 60, 60) 50%,
                rgb(40, 40, 40) 100%
            );
            border-color: rgba(255, 255, 255, 0.05);
        }
        
        .nav-btn:disabled:hover .btn-bg,
        .nav-btn:disabled:hover .nav-icon,
        .nav-btn:disabled:hover .nav-text {
            transform: none;
            opacity: inherit;
            text-shadow: none;
            box-shadow: none;
        }
        
        /* Focus States for Accessibility */
        .nav-btn:focus {
            outline: none;
        }
        
        .nav-btn:focus .btn-bg {
            box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.5);
        }
        
        /* Mobile Responsiveness */
        @media (max-width: 768px) {
            .nav-btn {
                min-width: 120px;
                height: 50px;
                border-radius: 14px;
            }
            
            .btn-bg {
                border-radius: 14px;
            }
            
            .nav-text {
                font-size: 12px;
            }
            
            .nav-icon {
                font-size: 20px;
            }
            
            .btn-content {
                gap: 8px;
            }
            
            .image-viewer-navigation {
                gap: 30px;
                margin-top: 30px;
            }
        }
        
        @media (max-width: 480px) {
            .nav-btn {
                min-width: 100px;
                height: 45px;
                border-radius: 12px;
            }
            
            .btn-bg {
                border-radius: 12px;
            }
            
            .nav-text {
                font-size: 11px;
            }
            
            .nav-icon {
                font-size: 18px;
            }
            
            .image-viewer-navigation {
                gap: 25px;
                margin-top: 25px;
            }
        }
        
        /* Animation keyframes */
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 0.6;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
        document.head.appendChild(style);

        return imageViewer;
    }

    // === ENHANCED GSAP BUTTON ANIMATIONS ===
    function initializeButtonAnimations() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (!prevBtn || !nextBtn) return;
        [prevBtn, nextBtn].forEach(btn => {
            const btnBg = btn.querySelector('.btn-bg');
            const navIcon = btn.querySelector('.nav-icon');
            const navText = btn.querySelector('.nav-text');
            const ripple = btn.querySelector('.ripple-effect');
            btn.addEventListener('mouseenter', function () {
                if (this.disabled) return;
                const isNext = this.classList.contains('next-btn');
                const tl = gsap.timeline();
                tl.to(this, {
                    y: -4,
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2.out"
                })
                    .to(btnBg, {
                        background: "linear-gradient(135deg, rgb(30, 120, 220) 0%, rgb(20, 80, 150) 50%, rgb(10, 50, 100) 100%)",
                        borderColor: "rgba(255, 255, 255, 0.4)",
                        duration: 0.3,
                        ease: "power2.out"
                    }, "-=0.3")
                    .to(navIcon, {
                        x: isNext ? 3 : -3,
                        scale: 1.15,
                        duration: 0.3,
                        ease: "back.out(1.7)"
                    }, "-=0.3")
                    .to(navText, {
                        scale: 1.05,
                        letterSpacing: "1.2px",
                        duration: 0.3,
                        ease: "power2.out"
                    }, "-=0.3");
            });
            btn.addEventListener('mouseleave', function () {
                if (this.disabled) return;

                const tl = gsap.timeline();

                tl.to(this, {
                    y: 0,
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out"
                })
                    .to(navIcon, {
                        x: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    }, "-=0.3")
                    .to(navText, {
                        scale: 1,
                        letterSpacing: "1px",
                        duration: 0.3,
                        ease: "power2.out"
                    }, "-=0.3");
            });
            btn.addEventListener('click', function (e) {
                if (this.disabled) return;
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                gsap.set(ripple, {
                    left: x + 'px',
                    top: y + 'px',
                    width: '4px',
                    height: '4px',
                    scale: 0,
                    opacity: 0.6
                });
                const rippleTl = gsap.timeline();

                rippleTl.to(ripple, {
                    scale: 25,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out"
                })
                    .set(ripple, {
                        scale: 0,
                        opacity: 0.4
                    }, 0.1)
                    .to(ripple, {
                        scale: 15,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power1.out"
                    }, 0.1);
                const buttonTl = gsap.timeline();
                buttonTl.to(this, {
                    scale: 0.92,
                    rotationZ: this.classList.contains('next-btn') ? 2 : -2,
                    duration: 0.08,
                    ease: "power2.out"
                })
                    .to(btnBg, {
                        background: "linear-gradient(135deg, rgb(80, 180, 255) 0%, rgb(60, 140, 220) 50%, rgb(40, 100, 180) 100%)",
                        boxShadow: "0 0 30px rgba(80, 180, 255, 0.6), inset 0 2px 10px rgba(255, 255, 255, 0.2)",
                        duration: 0.08,
                        ease: "power2.out"
                    }, "-=0.08")
                    .to(navIcon, {
                        scale: 1.3,
                        rotationZ: this.classList.contains('next-btn') ? 5 : -5,
                        color: "#ffffff",
                        textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
                        duration: 0.08,
                        ease: "power2.out"
                    }, "-=0.08")
                    .to(navText, {
                        scale: 1.1,
                        y: -2,
                        color: "#ffffff",
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.6)",
                        duration: 0.08,
                        ease: "power2.out"
                    }, "-=0.08")
                    .to(this, {
                        scale: 1.08,
                        rotationZ: 0,
                        duration: 0.4,
                        ease: "elastic.out(1, 0.5)"
                    })
                    .to(btnBg, {
                        background: "linear-gradient(135deg, rgb(30, 120, 220) 0%, rgb(20, 80, 150) 50%, rgb(10, 50, 100) 100%)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                        duration: 0.3,
                        ease: "power2.out"
                    }, "-=0.4")
                    .to(navIcon, {
                        scale: 1.15,
                        rotationZ: 0,
                        duration: 0.3,
                        ease: "elastic.out(1, 0.3)"
                    }, "-=0.4")
                    .to(navText, {
                        scale: 1.05,
                        y: 0,
                        duration: 0.3,
                        ease: "elastic.out(1, 0.3)"
                    }, "-=0.4")
                    .to(this, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out"
                    }, "+=0.1")
                    .to([navIcon, navText], {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out"
                    }, "-=0.2");
                gsap.to('body', {
                    x: this.classList.contains('next-btn') ? 2 : -2,
                    duration: 0.05,
                    yoyo: true,
                    repeat: 3,
                    ease: "power2.inOut"
                });
                createClickParticles(x + rect.left, y + rect.top, this.classList.contains('next-btn'));
            });
        });
    }

    // === ENHANCED IMAGE TRANSITION ANIMATIONS ===
    function animateImageTransition(direction, callback) {
        const viewerImage = document.querySelector('.image-viewer-image');
        const viewerTitle = document.querySelector('.image-viewer-title');

        if (!viewerImage || !viewerTitle) return;

        const moveDistance = direction === 'next' ? -80 : 80;
        const enterDistance = direction === 'next' ? 80 : -80;

        const tl = gsap.timeline()
        tl.to(viewerImage, {
            x: moveDistance,
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: "power2.in"
        })
            .to(viewerTitle, {
                y: -20,
                opacity: 0,
                duration: 0.2,
                ease: "power2.in"
            }, "-=0.2")
            .call(callback)
            .set(viewerImage, {
                x: enterDistance,
                opacity: 0,
                scale: 0.9
            })
            .set(viewerTitle, {
                y: 20,
                opacity: 0
            })
            .to(viewerImage, {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.4,
                ease: "power2.out"
            })
            .to(viewerTitle, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.2");
    }

    // === ENHANCED NAVIGATION FUNCTIONS ===
    function showNextImage() {
        if (currentIndex < currentImages.length - 1) {
            animateImageTransition('next', () => {
                currentIndex++;
                const viewerImage = document.querySelector('.image-viewer-image');
                const viewerTitle = document.querySelector('.image-viewer-title');

                viewerImage.src = currentImages[currentIndex];
                updateImageTitle();
                updateNavigationButtons();
            });
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            animateImageTransition('prev', () => {
                currentIndex--;
                const viewerImage = document.querySelector('.image-viewer-image');
                const viewerTitle = document.querySelector('.image-viewer-title');

                viewerImage.src = currentImages[currentIndex];
                updateImageTitle();
                updateNavigationButtons();
            });
        }
    }

    // === ENHANCED BUTTON STATE MANAGEMENT ===
    function updateNavigationButtons() {
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (!prevBtn || !nextBtn) return;
        const tl = gsap.timeline();
        if (currentIndex === 0) {
            tl.to(prevBtn, {
                opacity: 0.3,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.out"
            });
            prevBtn.disabled = true;
        } else {
            tl.to(prevBtn, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
            prevBtn.disabled = false;
        }
        if (currentIndex === currentImages.length - 1) {
            tl.to(nextBtn, {
                opacity: 0.3,
                scale: 0.9,
                duration: 0.3,
                ease: "power2.out"
            }, "-=0.3");
            nextBtn.disabled = true;
        } else {
            tl.to(nextBtn, {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            }, "-=0.3");
            nextBtn.disabled = false;
        }
    }

    // === INITIALIZATION ===
    document.addEventListener('DOMContentLoaded', function () {
        createImageViewer();
        setTimeout(() => {
            initializeButtonAnimations();
        }, 100);
    });
    const imageViewer = createImageViewer();
    const viewerImage = imageViewer.querySelector('.image-viewer-image');
    const viewerTitle = imageViewer.querySelector('.image-viewer-title');
    const closeBtn = imageViewer.querySelector('.image-viewer-close');
    const prevBtn = imageViewer.querySelector('.prev-btn');
    const nextBtn = imageViewer.querySelector('.next-btn');

    let currentImages = [];
    let currentIndex = 0;
    let currentArtists = null;
    let currentTitle = '';

    function isGSAPAvailable() {
        return typeof gsap !== 'undefined';
    }
    function animateButtonClick(button, callback) {
        if (isGSAPAvailable()) {
            gsap.to(button, {
                scale: 0.95,
                duration: 0.1,
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.2,
                        ease: "back.out(1.7)",
                        onComplete: callback
                    });
                }
            });
            const glow = button.querySelector('.nav-glow');
            if (glow) {
                gsap.fromTo(glow, {
                    scale: 0,
                    opacity: 0.8
                }, {
                    scale: 2,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                });
            }
            const icon = button.querySelector('.nav-icon');
            if (icon) {
                gsap.to(icon, {
                    scale: 1.3,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                });
            }
        } else {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
                callback();
            }, 100);
        }
    }
    function showNextImage() {
        if (currentIndex < currentImages.length - 1) {
            animateButtonClick(nextBtn, () => {
                if (isGSAPAvailable()) {
                    gsap.to(viewerImage, {
                        x: -50,
                        opacity: 0,
                        duration: 0.2,
                        ease: "power2.out",
                        onComplete: () => {
                            currentIndex++;
                            viewerImage.src = currentImages[currentIndex];
                            updateImageTitle();
                            updateNavigationButtons();

                            gsap.fromTo(viewerImage, {
                                x: 50,
                                opacity: 0
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }
                    });
                } else {
                    viewerImage.style.opacity = '0.5';
                    setTimeout(() => {
                        currentIndex++;
                        viewerImage.src = currentImages[currentIndex];
                        updateImageTitle();
                        updateNavigationButtons();
                        viewerImage.style.opacity = '1';
                    }, 150);
                }
            });
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            animateButtonClick(prevBtn, () => {
                if (isGSAPAvailable()) {
                    gsap.to(viewerImage, {
                        x: 50,
                        opacity: 0,
                        duration: 0.2,
                        ease: "power2.out",
                        onComplete: () => {
                            currentIndex--;
                            viewerImage.src = currentImages[currentIndex];
                            updateImageTitle();
                            updateNavigationButtons();

                            gsap.fromTo(viewerImage, {
                                x: -50,
                                opacity: 0
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 0.3,
                                ease: "power2.out"
                            });
                        }
                    });
                } else {
                    viewerImage.style.opacity = '0.5';
                    setTimeout(() => {
                        currentIndex--;
                        viewerImage.src = currentImages[currentIndex];
                        updateImageTitle();
                        updateNavigationButtons();
                        viewerImage.style.opacity = '1';
                    }, 150);
                }
            });
        }
    }
    function updateImageTitle() {
        let displayTitle = currentTitle;
        if (currentArtists && currentArtists[currentIndex]) {
            displayTitle = `${currentTitle} - ${currentArtists[currentIndex]}`;
        } else {
            displayTitle = `${currentTitle} - Image ${currentIndex + 1}`;
        }
        if (isGSAPAvailable()) {
            gsap.to(viewerTitle, {
                y: -10,
                opacity: 0,
                duration: 0.15,
                ease: "power2.out",
                onComplete: () => {
                    viewerTitle.textContent = displayTitle;
                    gsap.fromTo(viewerTitle, {
                        y: 10,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                }
            });
        } else {
            viewerTitle.textContent = displayTitle;
        }
    }

    function updateNavigationButtons() {
        if (isGSAPAvailable()) {
            if (currentIndex === 0) {
                gsap.to(prevBtn, {
                    opacity: 0.3,
                    scale: 0.9,
                    duration: 0.2,
                    ease: "power2.out"
                });
                prevBtn.disabled = true;
            } else {
                gsap.to(prevBtn, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
                prevBtn.disabled = false;
            }
            if (currentIndex === currentImages.length - 1) {
                gsap.to(nextBtn, {
                    opacity: 0.3,
                    scale: 0.9,
                    duration: 0.2,
                    ease: "power2.out"
                });
                nextBtn.disabled = true;
            } else {
                gsap.to(nextBtn, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
                nextBtn.disabled = false;
            }
        } else {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === currentImages.length - 1;
        }
    }
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);
    [prevBtn, nextBtn].forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            if (!this.disabled && isGSAPAvailable()) {
                gsap.to(this, {
                    y: -3,
                    duration: 0.3,
                    ease: "power2.out"
                });

                const icon = this.querySelector('.nav-icon');
                const isNext = this.classList.contains('next-btn');

                gsap.to(icon, {
                    x: isNext ? 3 : -3,
                    scale: 1.2,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        btn.addEventListener('mouseleave', function () {
            if (!this.disabled && isGSAPAvailable()) {
                gsap.to(this, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });

                const icon = this.querySelector('.nav-icon');

                gsap.to(icon, {
                    x: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
    });
    function showImageViewer(images, index, title, artists) {
        currentImages = images;
        currentIndex = index;
        currentArtists = artists || null;
        currentTitle = title;
        viewerImage.src = images[index];
        updateImageTitle();
        imageViewer.classList.add('active');
        updateNavigationButtons();
        const navigation = imageViewer.querySelector('.image-viewer-navigation');
        if (images.length <= 1) {
            navigation.style.display = 'none';
        } else {
            navigation.style.display = 'flex';
            if (isGSAPAvailable()) {
                gsap.fromTo([prevBtn, nextBtn], {
                    y: 30,
                    opacity: 0,
                    scale: 0.8
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    delay: 0.2,
                    stagger: 0.1,
                    ease: "back.out(1.7)"
                });
            }
        }

        document.body.style.overflow = 'hidden';
    }
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        hideImageViewer();
    });

    function hideImageViewer() {
        imageViewer.classList.remove('active');
        document.body.style.overflow = '';
    }
    imageViewer.addEventListener('click', function (e) {
        if (e.target === imageViewer) {
            hideImageViewer();
        }
    });
    document.addEventListener('keydown', function (e) {
        if (imageViewer.classList.contains('active')) {
            switch (e.key) {
                case 'Escape':
                    hideImageViewer();
                    break;
                case 'ArrowLeft':
                    if (!prevBtn.disabled) showPrevImage();
                    break;
                case 'ArrowRight':
                    if (!nextBtn.disabled) showNextImage();
                    break;
            }
        }
    });
    window.showImageViewer = showImageViewer;
    function showImageViewer(images, index, title, artists) {
        currentImages = images;
        currentIndex = index;
        currentArtists = artists || null;
        currentTitle = title;

        viewerImage.src = images[index];
        let displayTitle = title;
        if (artists && artists[index]) {
            displayTitle = `${title} - ${artists[index]}`;
        }
        viewerTitle.textContent = displayTitle;

        imageViewer.classList.add('active');
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === images.length - 1;
        if (images.length <= 1) {
            imageViewer.querySelector('.image-viewer-navigation').style.display = 'none';
        } else {
            imageViewer.querySelector('.image-viewer-navigation').style.display = 'flex';
        }
        document.body.style.overflow = 'hidden';
    }

    function hideImageViewer() {
        imageViewer.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNextImage() {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            viewerImage.src = currentImages[currentIndex];
            let displayTitle = currentTitle;
            if (currentArtists && currentArtists[currentIndex]) {
                displayTitle = `${currentTitle} - ${currentArtists[currentIndex]}`;
            } else {
                displayTitle = `${currentTitle} - Image ${currentIndex + 1}`;
            }
            viewerTitle.textContent = displayTitle;

            prevBtn.disabled = false;
            nextBtn.disabled = currentIndex === currentImages.length - 1;
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            currentIndex--;
            viewerImage.src = currentImages[currentIndex];
            let displayTitle = currentTitle;
            if (currentArtists && currentArtists[currentIndex]) {
                displayTitle = `${currentTitle} - ${currentArtists[currentIndex]}`;
            } else {
                displayTitle = `${currentTitle} - Image ${currentIndex + 1}`;
            }
            viewerTitle.textContent = displayTitle;

            nextBtn.disabled = false;
            prevBtn.disabled = currentIndex === 0;
        }
    }
    // === PHOTO DATA ===
    const photoData = {
        'photo-group-1': {
            title: 'Fan Art Gallery',
            description: 'Koleksi karya seni terbaik dari para penggemar setia.',
            images: [
                'fanart/fanart-coko.webp',
                'fanart/fanart-ruru2.webp',
                'fanart/fanart-kai-lime.webp'
            ],
            artists: [
                'Coko',
                'Ruru',
                'Kai Lime'
            ]
        },
        'photo-group-2': {
            title: 'Team Art Showcase',
            description: 'Karya-karya eksklusif dari tim internal PingArt.',
            images: [
                'fanart/fanart-kentang.webp',
                'fanart/fanart-kentang2.webp',
                'fanart/fanart-izall.png',
            ],
            artists: [
                'Kentang',
                'Kentang',
                'Izall'
            ]
        }
    };

    // === PHOTO CARDS FUNCTIONALITY ===
    document.querySelectorAll('.polaroid-stack').forEach((stack, groupIndex) => {
        const photoGroup = stack.closest('.photo-group');
        photoGroup.id = `photo-group-${groupIndex + 1}`;
        stack.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
            this.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.7))';
            this.style.zIndex = '10';
        });

        stack.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.filter = '';
            this.style.zIndex = '1';
        });
        stack.addEventListener('click', function () {
            const groupId = this.closest('.photo-group').id;
            if (photoData[groupId]) {
                const data = photoData[groupId];
                showImageViewer(data.images, 0, data.title, data.artists);
                this.classList.add('polaroid-stack-clicked');
                setTimeout(() => {
                    this.classList.remove('polaroid-stack-clicked');
                }, 600);
                event.stopPropagation();
            }
        });
        stack.querySelectorAll('.polaroid').forEach((polaroid, index) => {
            polaroid.addEventListener('click', function (e) {
                e.stopPropagation();

                const groupId = this.closest('.photo-group').id;
                if (photoData[groupId]) {
                    const data = photoData[groupId];
                    showImageViewer(data.images, index, data.title, data.artists);
                }
            });

            polaroid.addEventListener('mouseover', function () {
                this.style.transform = `rotate(${(index - 1) * 5}deg) scale(1.1)`;
                this.style.zIndex = '10';
            });

            polaroid.addEventListener('mouseout', function () {
                const rotations = [-5, 2, 7];
                this.style.transform = `rotate(${rotations[index]}deg)`;
                this.style.zIndex = (index + 1).toString();
                this.style.filter = '';
            });
        });
    });

    // === ARTIST CARDS FUNCTIONALITY ===
    document.querySelectorAll('.artist-card').forEach((card, index) => {
        card.addEventListener('click', function () {
            const artistName = this.querySelector('.artist-name').textContent.replace('Artist : ', '');
            const artistImage = this.querySelector('.artist-photo img').src;
            showImageViewer([artistImage], 0, `Artwork by ${artistName}`);
            this.style.transform = 'translateY(-10px) scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 200);
        });
        card.style.cursor = 'pointer';
    });

    // === STAR DATA ===
    const starData = {
        'star-1': {
            title: 'Debut Stream',
            image: 'assets/debut-photo.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit per fermentum porta, blandit congue quam habitant penatibus egestas lobortis etiam accumsan, lacinia mattis faucibus euismod dui interdum nam cras bibendum.'
        },
        'star-2': {
            title: 'First Stream',
            image: 'assets/first-stream-photo.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit per fermentum porta, blandit congue quam habitant penatibus egestas lobortis etiam accumsan, lacinia mattis faucibus euismod dui interdum nam cras bibendum.'
        },
        'star-3': {
            title: 'First Game',
            image: 'assets/first-game.png',
            description: 'Pertunjukan pertama di depan penggemar setia. Momen penuh emosi dan kebahagiaan yang tak terlupakan. Konser ini diadakan di venue kecil namun penuh dengan energi yang luar biasa.'
        },
        'star-4': {
            title: 'Membership Opening',
            image: 'assets/membership-opening.png',
            description: 'Peluncuran merchandise pertama kami. Cara baru untuk terhubung dengan penggemar dan berbagi kenangan. Merch ini dirancang dengan penuh cinta untuk para penggemar setia.'
        },
        'star-5': {
            title: 'First Merch',
            image: 'assets/first-merch.png',
            description: 'Penghargaan pertama yang kami terima. Bukti kerja keras dan dedikasi selama perjalanan ini. Momen penuh haru saat nama kami diumumkan sebagai pemenang.'
        },
        'star-7': {
            title: 'Anniversary',
            image: 'fanart/fanart-ajijiw.jpeg',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit per fermentum porta, blandit congue quam habitant penatibus egestas lobortis etiam accumsan, lacinia mattis faucibus euismod dui interdum nam cras bibendum.'
        }
    };

    // === STAR CARD FUNCTIONALITY ===
    const cardContainer = document.getElementById('starCardContainer');
    const cardTitle = document.getElementById('cardTitle');
    const cardImage = document.getElementById('cardImage');
    const cardDescription = document.getElementById('cardDescription');
    const closeCardBtn = document.getElementById('closeCard');
    const starCard = document.querySelector('.star-card');
    function isGSAPAvailable() {
        return typeof gsap !== 'undefined';
    }
    function showStarCard(starId) {
        if (starId && starData[starId]) {
            cardTitle.textContent = starData[starId].title;
            cardImage.src = starData[starId].image;
            cardImage.alt = starData[starId].title;
            cardDescription.textContent = starData[starId].description;
            starCard.classList.remove('debut-card', 'anniversary-card');
            if (starId === 'star-1') {
                starCard.classList.add('debut-card');
            } else if (starId === 'star-7') {
                starCard.classList.add('anniversary-card');
            }
            cardContainer.classList.add('active');
            if (isGSAPAvailable()) {
                gsap.fromTo('.star-card', {
                    scale: 0.7,
                    y: -50,
                    opacity: 0
                }, {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: "back.out(1.7)"
                });
                gsap.fromTo('.star-card h2', {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.2
                });

                gsap.fromTo('.star-card img, .star-card p', {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.3,
                    stagger: 0.1
                });
            } else {
                starCard.style.transform = 'scale(0.7) translateY(-50px)';
                starCard.style.opacity = '0';
                starCard.offsetHeight;
                starCard.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                starCard.style.transform = 'scale(1) translateY(0)';
                starCard.style.opacity = '1';
                setTimeout(() => {
                    const title = starCard.querySelector('h2');
                    const image = starCard.querySelector('img');
                    const description = starCard.querySelector('p');

                    if (title) {
                        title.style.transform = 'translateX(-30px)';
                        title.style.opacity = '0';
                        title.style.transition = 'all 0.3s ease-out';
                        setTimeout(() => {
                            title.style.transform = 'translateX(0)';
                            title.style.opacity = '1';
                        }, 200);
                    }

                    [image, description].forEach((el, index) => {
                        if (el) {
                            el.style.transform = 'translateY(20px)';
                            el.style.opacity = '0';
                            el.style.transition = 'all 0.3s ease-out';
                            setTimeout(() => {
                                el.style.transform = 'translateY(0)';
                                el.style.opacity = '1';
                            }, 300 + (index * 100));
                        }
                    });
                }, 100);
            }
        }
    }
    function hideStarCard() {
        if (isGSAPAvailable()) {
            gsap.to('.star-card', {
                scale: 0.7,
                y: -50,
                opacity: 0,
                duration: 0.3,
                ease: "back.in(1.7)",
                onComplete: () => {
                    cardContainer.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        } else {
            starCard.style.transition = 'all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335)';
            starCard.style.transform = 'scale(0.7) translateY(-50px)';
            starCard.style.opacity = '0';
            setTimeout(() => {
                cardContainer.classList.remove('active');
                document.body.style.overflow = 'auto';
                starCard.style.transform = '';
                starCard.style.opacity = '';
                starCard.style.transition = '';
            }, 300);
        }
    }
    document.querySelectorAll('.main-star').forEach(star => {
        star.addEventListener('click', function (e) {
            let starId = '';
            for (let i = 1; i <= 7; i++) {
                if (this.classList.contains('star-' + i)) {
                    starId = 'star-' + i;
                    break;
                }
            }
            if (isGSAPAvailable()) {
                gsap.to(this, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        showStarCard(starId);
                    }
                });
            } else {
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';

                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    setTimeout(() => {
                        this.style.transform = '';
                        this.style.transition = '';
                        showStarCard(starId);
                    }, 100);
                }, 100);
            }

            e.stopPropagation();
        });
        star.addEventListener('mouseenter', function () {
            if (isGSAPAvailable()) {
                gsap.to(this, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            }
        });

        star.addEventListener('mouseleave', function () {
            if (isGSAPAvailable()) {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            } else {
                this.style.transform = 'scale(1)';
                this.style.transition = 'transform 0.3s ease';
            }
        });
    });
    closeCardBtn.addEventListener('click', function () {
        hideStarCard();
    });
    cardContainer.addEventListener('click', function (event) {
        if (event.target === cardContainer) {
            hideStarCard();
        }
    });

    document.querySelector('.star-card').addEventListener('click', function (event) {
        event.stopPropagation();
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && cardContainer.classList.contains('active')) {
            hideStarCard();
        }
    });
    // === SECTION 3 FUNCTIONALITY ===
    const preloadImages = () => {
        const images = ['fanart/amplop.png', 'fanart/amplop1.png'];
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };

    preloadImages();
    const section3Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const letterImage = entry.target.querySelector('#letterImage');
                const letterTitle = entry.target.querySelector('.letter-title');
                if (letterImage && letterTitle) {
                    setTimeout(() => {
                        letterImage.classList.add('fade-in');
                    }, 200);

                    setTimeout(() => {
                        letterTitle.classList.add('fade-in');
                    }, 600);
                }
                section3Observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    const section3 = document.querySelector('.section-3');
    if (section3) {
        section3Observer.observe(section3);
    }

    // === OPTIMIZED IMAGE HOVER HANDLING ===
    const letterImage = document.getElementById('letterImage');
    if (letterImage) {
        const container = document.createElement('div');
        container.className = 'letter-image-container';
        letterImage.parentNode.insertBefore(container, letterImage);
        container.appendChild(letterImage);
        let hoverTimeout;

        container.addEventListener('mouseenter', function () {
            clearTimeout(hoverTimeout);
            this.classList.add('hovering');
        });
        container.addEventListener('mouseleave', function () {
            const self = this;
            hoverTimeout = setTimeout(() => {
                self.classList.remove('hovering');
            }, 100);
        });
        letterImage.addEventListener('dragstart', function (e) {
            e.preventDefault();
        });
        letterImage.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        letterImage.addEventListener('click', function () {
            window.location.href = 'letter.html';
        });
    }
});

// === ENHANCED SCROLL PARALLAX FOR SECTION 3 ===
window.addEventListener('scroll', function () {
    const section3 = document.querySelector('.section-3');
    const letterImage = document.getElementById('letterImage');
    const letterTitle = document.querySelector('.letter-title');
    if (!section3 || !letterImage || !letterTitle) return;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
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
            if (!letterImage.classList.contains('fade-in')) {
                letterImage.classList.add('fade-in');
            }
            if (!letterTitle.classList.contains('fade-in')) {
                setTimeout(() => {
                    letterTitle.classList.add('fade-in');
                }, 400);
            }
        }
        const parallaxOffset = (scrollY - section3Top) * 0.1;
        letterImage.style.transform = `translateY(${parallaxOffset}px) scale(${letterImage.classList.contains('fade-in') ? 1 : 0.8})`;
    } else {
        if (scrollY > section3Bottom + 200 || scrollY + windowHeight < section3Top - 200) {
            letterImage.classList.remove('fade-in');
            letterTitle.classList.remove('fade-in');
        }
    }
});

// === PERFORMANCE OPTIMIZATION ===
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}