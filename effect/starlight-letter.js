// Structured data for each category
const categoryData = {
    guestStar: {
        messages: [
            "Kamu bintang? Jatuh ke bumi terus jadi cat cafe? Mendiiing,\n.\n.\n.\nJadi penguin aja gak sih? \n👉👈Canda beeebs, UwU"
        ],
        usernames: [
            "Arphina Stellariar"
        ],
        images: [
            null
        ],
        voices: [
            null
        ]
    },

    pingstar: {
        messages: [
            // Rakenn
            "Hai, sang bintang jatuh, aku tau kamu mengalami banyak kesulitan akhir akhir ini, sudah banyak ombak yang kamu lalui, akan tetapi.. " +
            "kamu masih bisa bersinar layaknya bintang-bintang yang menyinari gelapnya malam,\n\nSelamat ulang tahun pingu, sang bintang jatuh yang selalu bersinar, " +
            "aku harap kamu bisa melangkah maju, selangkah demi selangkah, dan menjadi vtuber besar seperti teman-teman kamu,\n" +
            "\nTerimakasih sudah menjadi temanku selama beberapa bulan ini, dan mungkin ini akan jadi project terakhir aku untuk kamu, bintang RGB ?, " +
            "ntahlah mungkin itu cuman angan-angan ku saja, terimakasih untuk stream-stream serunya~" +
            "\n\nMay you, the beauty of this world always shine 😉",

            // Izall
            "HBD pinguuu, dari animator yang udah effort dan berjuang tapi masih sering di tai taiin hadehhh, Ohh ini juga jadi project terakhir yang ku kerjain" +
            "atau yang bareng member member pingstar dan juga aku pamit undur diri dari pingstar juga, oiya member membermu pada asik asik dan keren..." +
            "aku ucapin terima kasih juga buat mereka, yap sekali lagi Happy Birthday P1ngu dan terima kasih, semoga tahun ini apa yang kamu harapkan tercapai semua.... " +
            "sehat sehat yaa. Apah badge kucing RGB? Mungkin itu cuma mimpi ku aja sihh ",

            // Rama
            "lorem ipsum dolor sit amet",

            // Surya
            "maaf ya gk kasih apa apa paling donate aja, hbd ya pingu",

            // PPAJA
            "Wish you all the best! Semoga segala urusan, masalah dapat diselesaikan dengan lancar.\nSehat selalu juga! Love you pung~",

            // Arrkunnn
            "Semoga semakin panjang semakin baik,dari segi amalan maupun hal hal yang berkaitan dengan pribadinya. Semoga dengan bertambah umurnya semakin baik dan keren. Anjay",

            // Galang 
            "hbd pung, gw ada pantun\njalan jalan beli kemangi\nkemangi nya bau wardah\ngajadi dah pokok nya hbd pung",

            // Ricky
            "🌟 Selamat Ulang Tahun, Pingu — Bintang Jatuh yang Kini Menyeduh Rasa ☕\n Di antara milyaran bintang yang menghias langit, " +
            "hanya satu yang memilih jatuh... bukan karena tersesat, tapi karena punya misi:\n membawa kehangatan ke dunia yang sering terasa dingin.\n" +
            "Itulah kamu, Pingu. Dulu bagian dari galaksi, kini bagian dari hati kami semua. \n\n" +
            "Kau turun bukan dengan dentuman, tapi dengan bisikan lembut—dan pelan-pelan, membuka sebuah kafe kecil di sudut dunia," +
            "tempat orang-orang bisa berhenti sejenak, menyesap damai, dan merasa tidak sendirian.\n" +
            "Dan dari balik layar, lewat cahaya digital dan suara yang menghangatkan, kau menyapa kami sebagai VTuber: penuh pesona, penuh cerita, dan penuh cinta.\n\n" +
            "Hari ini, saat bumi merayakan hari kelahiranmu, langit mungkin diam...\n" +
            "api aku tahu, di sana, bintang-bintang sedang berkedip pelan, bangga pada satu dari mereka yang memilih jalan berbeda.\n\n" +
            "Semoga ulang tahun ini jadi awal dari banyak hal indah:\n" +
            "Karya yang menyentuh lebih banyak jiwa, langkah yang makin mantap, dan mimpi yang pelan-pelan menjadi nyata.\n\n" +
            "aku tidak tau apakah masih ada di sini saat kamu ulang tahun, tapi teruslah bersinar Pingu. Dalam layar, dalam kata, dan dalam rasa.\n" +
            "Karena kami selalu menanti secangkir keajaiban di kafe kecilmu.",

            // Celine Tzu.
            "Selamat ulang tahun, Pingu… Hari ini seharusnya penuh tawa dan kegembiraan, tapi izinkan aku menyisipkan air mata dalam kata perpisahan ini. " +
            "Maaf, karena hari bahagiamu juga menjadi hari terakhirku di sini, karena waktu tidak memberiku kesempatan untuk bisa melihatmu kembali. " +
            "Hidupku harus terus berjalan walau mungkin terasa sepi kedepannya. Terima kasih untuk semua kenangan yang tak akan kulupakan, untuk tawa, " +
            "keseruan, dan untuk segalanya yang dulu begitu terasa hangat. Aku sungguh bersyukur pernah menjadi bagian kecil dari kisahmu juga bersama orang-orang hebat di Pingstar. " +
            "Mungkin aku hanya akan menjadi siluet samar di belakang cabang kenanganmu, tapi semoga, meski perlahan memudar, bayanganku tetap tinggal di satu sudut kecil hatimu." +
            "Maaf ya jika hari yang harusnya seru ini jadi sedih karenaku. Sekali lagi selamat ulang tahun dan selamat memulai kisah baru~ ハッピーバースデー　片想いの俺~",

            // Inisial A(tsukozen)
            "Otanjoubi Omedetou Pingu~! Sang bintang tersesat yang akhirnya memilih menetap bukan di langit, tapi di antara para kucing liar yang penuh kehangatan ini~.\n" +
            "Semoga dengan bertambahnya usia ini.. Pengalaman, kharisma, kesehatan dan rezeki nya semakin dilimpahkan.\n" +
            "\nSuaramu mungkin selembut bisikan malam, tapi kata-katamu kadang seperti meteor yang jatuh tepat ke kepala.. dan anehnya, kami suka itu. " +
            "Terima kasih sudah menerangi langit kami yang muram dengan kehadiranmu yang kalem tapi bisa nyolot tiba-tiba. Semoga di umur barumu, lebih banyak cahaya, " +
            "lebih banyak kucing, dan lebih banyak kesempatan untuk menyebarkan racun manismu ke dunia. \n" +
            "\nLakukanlah apa yang ingin kamu lakukan.. Jangan paksakan hal yang diluar kendali kamu.. Tetap semangat dan selalu berikan vibes positif untuk orang-orang di sekitar mu..\n" +
            "Kehadiranmu itu sederhana, tapi membekas. Tenang, tapi kuat. Seperti pelukan hangat di hari yang berat. Just keep being chaotic in the most graceful way.\n" +
            "\nBest regards,\n-Inisial A, sosok kucing liar kelaparan yang tak sengaja lewat di depan cat cafe~",

            // Sakamura
            "OTANJOBIOMEDETO, PINGU!\n" +
            "Makasih udah jadi penghibur, teman, dan semangat untuk banyak orang lewat setiap stream dan tawa yang kamu bagi." +
            "Makasih udah bersedia jadi tempat peristirahatan bagi mereka yang mungkin cape belajar maupun cape setelah kerja. " +
            "Semoga semua impianmu perlahan terwujud, dan perjalananmu selalu dipenuhi cinta, support, dan kebahagiaan.\n" +
            "Tetap jadi Pingu yang ceria, hangat, unik dan suka tai-tai in penonton — karena dunia kita lebih berwarna dengan kehadiranmu.\n" +
            "Happy birthday, dan terima kasih udah jadi kamu!",

            // Flavourouz
            "love u pingu, wish you all the best",

            // Ren Hiroshi
            "Tetap semangat dan selalu sehat wal Afiat ya mah",

            // Prabowo Subianto
            "Selamat hari ulang tahun, semoga panjang umur, selalu sehat, dilindungi Tuhan YME. Diberi kebaikan, berkah dan cita-citanya dikabulkan",

            // Redaksi Majalah Harian Pingstar
            "Kami segenap redaksi Majalah Harian Pingstar mengucapkan selamat ulang tahun yang pertama untuk Pingu, semoga dapat terus berkembang dan menginspirasi banyak orang",

            // ArZe
            "OHH ungip\nBintang gemerlap di langit malam,\nBersinar indah menari riang.\nSelamat ulang tahun Pingu ku sayang,\n\nKau bintang hatiku yang paling terang." +
            "Bintang bertabur di angkasa luas,\nCahayanya temani malam yang sepi.\n Di hari lahirmu kuucap tulus,\nSemoga cinta kita abadi dan rapi",

            // Khabs
            "Halo Pingu Sayang,\nSelamat ulang tahun untuk wanita paling luar biasa dalam hidupku istriku, sahabatku, tempatku bersandar, " +
            "dan sumber kekuatanku setiap hari. Hari ini adalah hari istimewa, bukan hanya karena ini hari ulang tahunmu, tapi juga karena " +
            "ini hari dunia diberi seseorang yang sangat berarti.\n\n Setiap hari aku bersyukur karena Tuhan mempertemukan aku denganmu. " +
            "Di tengah semua kesibukan, tantangan, dan naik turunnya hidup, kamu selalu menjadi cahaya yang menerangi jalanku. Senyummu, kesabaranmu, " +
            "perhatian kecil yang sering kamu lakukan tanpa sadar semua itu membuatku merasa menjadi pria paling beruntung di dunia.\n\n" +
            "Terima kasih karena sudah selalu hadir, mencintai aku dalam segala kekuranganku, dan memilih untuk terus berjalan bersamaku," +
            " bahkan di saat aku tak selalu mudah untuk dicintai. Kamu bukan hanya pasangan hidup, kamu adalah rumah. Tempat aku bisa menjadi diri sendiri tanpa takut dihakimi.\n\n" +
            "Di hari ulang tahunmu ini, aku tidak hanya mendoakan kebahagiaan dan kesehatanmu, tapi juga agar semua mimpi-mimpimu perlahan jadi nyata." +
            " Aku ingin jadi orang pertama yang mendukungmu, yang mendorongmu bangkit saat kamu lelah, dan yang memelukmu saat dunia terasa berat.\n\n" +
            "Usia boleh bertambah, tapi cintaku padamu tidak pernah berkurang—justru semakin dalam dan kuat. Mari kita terus tumbuh bersama, menua bersama, " +
            "dan menciptakan kenangan indah hingga akhir waktu.\n\n" +
            "Aku mencintaimu, sekarang dan selamanya.\n" +
            "💕 Suamimu yang selalu jatuh cinta padamu. Khabs",

            // Kepin
            "pingu..... apa yah, sukses selalu aja deh wkwkwkw",

            // Dwi Clip (gak nerima singkatan gwe, yapping banget taik gwe udh muak sama kata kata "pipel ceng")
            "gimana ya, aku jarang memberikan ucapan ucapan kek gini sih... tapi makasih. \nudah setahun ya? walaupun aku ga ngikutin kamu dari awal debut juga sih," +
            " jadi belum setahun bagiku. intinya makasih kenangannya. aku ga bakal janji apapun untuk masa depan karena people change. \ntapi kalo diizinkan berharap," +
            " aku harap kita tetap bisa berinteraksi sampai tahun depan interaksi sekecil apapun itu.",

            // Jormungand
            "Semoga sehat selalu, dilancarkan rezekinya dan bisa tetap streaming dengan penonton ton ton ton",

            // Ajijiw
            "otanjōbi omedetō Pinguu~ semoga rezekinya lancar terus bahagia dan sehat selalu",

            // Kenra
            "Hai Kak Pingu.Cieee udah anniversary yang pertama nih.Selamat ya kak,semoga kakak selalu sehat,panjang umur, dilancarkan rezekinya, " +
            "bisa dikurangin begadangnya, pokoknya doa-doa terbaik buat kakak.\n Makasih ya kak udah turun ke bumi lalu membuka Cat Cafe," +
            "serta hadir ke dunia Youtube. Kucing green flag ini bener-bener ngerasa nyaman dan asik buat nonton Sang Bintang bersama " +
            "kucing-kucing lainnya a.k.a penonton.\nAku harap kita semua bisa terus seru-seruan bareng sampe beberapa tahun kedepan.\n\n" +
            "Kelupaan,semoga goals 50K subs bisa tercapai di tahun ini.Bu Asri makan sirih.Cukup sekian dan terimakasih.",

            // Tony
            " 祝你生日快乐 pingu, sehat selalu , kantong makmur, serta rejeki karir yang selalu lancar, " +
            "meskipun aing orang baru izinkan saya utk mengucapkan terima kasih telah menemani hari lelahku setelah aktivitas seharian" +
            " (BTW i really enjoy curhat2 viewer tengah malamnya), pingu sendiri juga jgn hanya menampung y klu misal ada masalah yg bisa " +
            "dishare ke viewer kami akan dengan senang hati menampung juga.\n\nArt by: @Okutahhh555",

            // PetrickJD
            "Ohh Pingu,\nHari ini langit lebih biru,\nmentari tersenyum penuh rindu.\nAda bisikan angin yang syahdu,\nmembawa ucapan: Selamat ulang tahun, Pingu!" +
            "\n\nOhhh Pungii\nLangkahmu ringan, penuh warna\nseperti pelangi usai hujan reda\nDalam canda, tawa, dan cita,\nkau pancarkan hangat yang tiada dua." +
            "\n\nOhhhhhh Ipunggg, engkau bukan sekadar nama\nkau sahabat, cahaya, dan makna.\nDi setiap detik yang terus berjalan,\ndoaku: kebahagiaan tak pernah hilang." +
            "\n\nSemoga usiamu bertambah berkah,\nimpianmu menjelma tanpa lelah.\nDan dalam tiap harapan yang kau semai,\nsemesta turut serta, mendampingi tiap langkah damai." +
            "\n\nTerima Kasihh Kak Pingu sudah mau menghibur para pingstar selama ini..." +
            "\nOhh iya terima kasih untuk para admin stray cafe yang sudah memberi forum ini, gw turut berbahagia telah diundang untuk mengisi forum ini.",

            // PELPETTT TOLONGINNN PETTTT 😭
            "Singkat saja, terimakasih pung sudah menemani malam dan siang ku dengan Valo walaupun harus dihujani dengan warna merah.",

            // Syaa
            "Haloo pingu.. Met ultah yahh, semoga di fase bertambah umur, makin bertambah juga semangat stream nyaa, di pelancar karir mu, dan di kabulkan apa yg kamu inginkan," +
            "\n.\n.\nUtk hadiah bisa acc steam aj 'syasipembuat' :P",

            // Reius
            "Happy Birthday Pingu my favorite kesukaan vtuber no.1 🥳🎉, Semoga kedepannya sukses selalu, segala kegiatan dilancarkan, dan juga sehat selalu",

            // Mujair
            "Selamat Ulang tahun Pinguu. \nTerima kasih sudah terus menghibur kami dengan energi positif dan vibes yang selalu bikin senyum. " +
            "Semoga, semua harapan dan impianmu tercapai satu per satu. Kami, para penonton dan pendukungmu, akan selalu ada di belakangmu. " +
            "Jangan lupa bikin schedule biar livestream kamu terjadwal. Teruslah berkarya, tetap jadi Pingu yang ceria dan penuh semangat! 💙",

            // Akasyah
            "Happy Birthday kak Pungii! Kebetulan aku pingstar baru, dan join karena server menkrep, so I hope nanti kedepannya server member pingu " +
            "bisa rame dan jadi ekosistem yang berkembang yaaaaaa, DAH segitu dulu, oiya sama aku harap nanti Pingu bisa dapet turning point juga biar " +
            "bisa meledak dan growing up channel yutupnya! Thank you ya pungi udah baca iniii. Eh ini bakal dibaca ga? Atau dilisanin? Kalau dilisanin:" +
            "\nThank you for listening ya pungiii",
        ],
        usernames: [
            "Rakenn",
            "Izall",
            "Rama",
            "surya",
            "PPAJA",
            "Arrkunnn",
            "galang my only satu",
            "Ricky",
            "Celine Tzu.",
            "Inisial A",
            "Sakamura",
            "Flavourouz",
            "Ren Hiroshi",
            "Prabowo Subianto",
            "Redaksi Majalah Harian Pingstar",
            "ArZe",
            "Khabs",
            "Kepin",
            "Dwi Clip",
            "Jormungand",
            "Ajijiw",
            "Kenra",
            "Tony",
            "PetrickJD",
            "Velvet",
            "Syaa",
            "Reius",
            "Mujair",
            "Akasyah",
        ],
        images: [
            null, // Rakenn
            "fanart/fanart-izall.png", // Izall
            null, // Rama
            null, // surya
            null, // PPAJA
            null, // Arrkunn
            null, // Galang
            null, // Ricky
            null, // Celine Tzu.
            null, // Inisial A/Atsukozen
            null, // Sakamura
            null, // Flavourouz
            null, // Ren Hiroshi
            null, // Prabowo Subianto
            "gift/redaksi-gift.png", // Redaksi Majalah Harian Pingstar
            null, // ArZe
            null, // Khabs
            null, // Kepin
            null, // Dwi Clip
            null, // Jormungand
            null, // Ajijiw
            null, // Kenra
            "gift/thony-gift-2.png", // Tony
            null, // PetrickJD
            null, // Velvet
            null, // Syaa
            null, // Reius
            "gift/mujair-gift.jpg", // Mujair
            null, // Akasyah
        ],
        voices: [
            null, // Rakenn
            null, // Izall
            null, // Rama
            null, // surya
            null, // PPAJA
            null, // Arrkunn
            null, // Galang
            null, // Ricky
            null, // Celine Tzu
            null, // Inisial A/Atsukozen
            null, // Sakamura
            null, // Flavourouz
            null, // Ren Hiroshi
            null, // Prabowo Subianto
            null, // Redaksi Majalah Harian Pingstar
            null, // ArZe
            null, // Khabs
            null, // Kepin
            null, // Dwi Clip
            null, // Jormungand
            null, // Ajijiw
            null, // Kenra
            null, // Tony
            null, // PetrickJD
            null, // Velvet
            null, // Syaa
            null, // Reius
            null, // Mujair
            null, // Akasyah
        ]
    },

    moderator: {
        messages: [
            // Dito
            "terima kasih sudah membawa warna baru, terima kasih sudah membuat wadah untuk bertemu orang orang keren, terima kasih sudah mengenalkan ke sesorang spesial, " +
            "terima kasih buat semuanya. semoga kedepannya bisa makin keren lagi dan makin bersinar terang dan mejadi bintang paling terang." +
            "\noh iyaa terima kasih juga buat orang orang keren yang udah bikin ini, maaf ga bisa sebutin satu satu tapi kalian keren banget. ily all.",
        ],
        usernames: [
            "Dito",
        ],
        images: [
            "gift/dito-gift.jpeg", // Dito
        ],
        voices: [
            null,
        ]
    }
};
let fullscreenKeyHandler = null;
let fullscreenOverlayListeners = new Map();
let categoryCounters = {
    guestStar: 0,
    pingstar: 0,
    moderator: 0
};
function cleanupFullscreenListeners() {
    if (fullscreenKeyHandler) {
        document.removeEventListener('keydown', fullscreenKeyHandler);
        fullscreenKeyHandler = null;
    }
    fullscreenOverlayListeners.clear();
}

function getDataForCategory(category, dataType) {
    const data = categoryData[category];
    if (!data || !data[dataType]) {
        console.warn(`Data ${dataType} untuk kategori ${category} tidak ditemukan`);
        return null;
    }

    const counter = categoryCounters[category];
    const result = data[dataType][counter % data[dataType].length];

    return result;
}

function incrementCategoryCounter(category) {
    categoryCounters[category]++;
}

async function generateCategoryCards(containerId, category, iconClass, title) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container ${containerId} tidak ditemukan`);
        return;
    }

    const data = categoryData[category];
    if (!data) {
        console.error(`Data untuk kategori ${category} tidak ditemukan`);
        return;
    }
    const cardCount = Math.min(data.messages.length, 100);

    for (let i = 0; i < cardCount; i++) {
        const message = getDataForCategory(category, 'messages');
        const username = getDataForCategory(category, 'usernames');
        const imagePath = getDataForCategory(category, 'images');
        const voicePath = getDataForCategory(category, 'voices');
        incrementCategoryCounter(category);
        let validImagePath = null;
        if (imagePath) {
            const imageExists = await checkImageExists(imagePath);
            if (imageExists) {
                validImagePath = imagePath;
            }
        }
        const card = document.createElement('div');
        const formattedMessage = message.replace(/\n/g, "<br>");
        card.className = 'card';
        let mediaIndicators = '';
        if (validImagePath) mediaIndicators += '<span class="media-indicator image-indicator"></span>';
        if (voicePath) mediaIndicators += '<span class="media-indicator voice-indicator"></span>';

        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon ${iconClass}"></div>
                <h3 class="card-title">${title}</h3>
            </div>
            <div class="card-content">
            ${formattedMessage && formattedMessage.length > 100 ? formattedMessage.substring(0, 100) + '...' : formattedMessage || 'No message available'}
            </div>
        `;
        card.addEventListener('click', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    scale: 0.95,
                    duration: 0.1,
                    yoyo: true,
                    repeat: 1,
                    onComplete: () => {
                        showModal(category, `${title} Message`, username || 'Anonymous', message || 'No message', validImagePath, voicePath);
                    }
                });
            } else {
                showModal(category, `${title} Message`, username || 'Anonymous', message || 'No message', validImagePath, voicePath);
            }
        });
        card.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    y: -8,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        container.appendChild(card);
    }
}
function resetCategoryCounters() {
    categoryCounters = {
        guestStar: 0,
        pingstar: 0,
        moderator: 0
    };
}
function getDataInfo() {
    const info = {};
    for (const [category, data] of Object.entries(categoryData)) {
        info[category] = {
            totalMessages: data.messages.length,
            totalUsernames: data.usernames.length,
            totalImages: data.images.filter(img => img !== null).length,
            totalVoices: data.voices.filter(voice => voice !== null).length
        };
    }
    return info;
}
function handleImageError(imgElement, imagePath) {
    console.error('Image not found:', imagePath);

    const alternativePaths = [
        imagePath,
        imagePath.replace('fanart/', './fanart/'),
        imagePath.replace('fanart/', '../fanart/'),
        `./assets/${imagePath}`,
        `../${imagePath}`
    ];
    let currentTry = parseInt(imgElement.dataset.tryCount) || 0;

    if (currentTry < alternativePaths.length - 1) {
        currentTry++;
        imgElement.dataset.tryCount = currentTry;
        imgElement.src = alternativePaths[currentTry];
        return;
    }
    const container = imgElement.closest('.modal-image-container');
    if (container) {
        container.innerHTML = `
            <div class="image-error-message">
                <div class="error-icon">🖼️</div>
                <p>Gambar tidak dapat dimuat</p>
                <small>File: ${imagePath}</small>
            </div>
        `;
    }
}

function createMediaElement(imagePath, voicePath) {
    let mediaHTML = '';

    if (imagePath) {
        mediaHTML += `
            <div class="modal-image-container" data-image-path="${imagePath}">
                <img src="${imagePath}" 
                     alt="User Image" 
                     class="modal-image" 
                     onload="console.log('Image loaded successfully:', '${imagePath}'); this.style.opacity='1';"
                     onerror="handleImageError(this, '${imagePath}')"
                     style="opacity: 0; transition: opacity 0.3s ease;">
                <div class="image-overlay">
                    <span class="expand-icon">🔍</span>
                </div>
            </div>
        `;
    }

    if (voicePath) {
        mediaHTML += `
            <div class="modal-voice-container">
                <div class="voice-player">
                    <div class="voice-icon">🎵</div>
                    <audio controls class="voice-audio" preload="metadata">
                        <source src="${voicePath}" type="audio/mpeg">
                        <source src="${voicePath}" type="audio/wav">
                        <source src="${voicePath}" type="audio/ogg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        `;
    }

    return mediaHTML;
}
function checkImageExists(imagePath) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imagePath;
    });
}
function openImageFullscreen(imageSrc) {
    openFullscreenImage(imageSrc);
}
function openFullscreenImage(imageSrc) {
    console.log('Opening fullscreen image:', imageSrc);
    let fullscreenOverlay = document.getElementById('fullscreenOverlay');
    if (!fullscreenOverlay) {
        fullscreenOverlay = document.createElement('div');
        fullscreenOverlay.id = 'fullscreenOverlay';
        fullscreenOverlay.className = 'fullscreen-overlay';
        fullscreenOverlay.innerHTML = `
            <div class="fullscreen-container">
                <img id="fullscreenImage" class="fullscreen-image" src="" alt="Fullscreen Image">
                <span class="fullscreen-close">&times;</span>
            </div>
        `;
        document.body.appendChild(fullscreenOverlay);
        setupFullscreenListeners(fullscreenOverlay);
    }

    const fullscreenImage = document.getElementById('fullscreenImage');

    if (!fullscreenImage) {
        console.error('Fullscreen image element not found');
        return;
    }
    fullscreenImage.style.opacity = '0';
    fullscreenImage.removeAttribute('data-original-size');
    fullscreenOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        fullscreenOverlay.style.opacity = '1';
    }, 10);

    const tempImage = new Image();
    tempImage.onload = function () {
        console.log('Image loaded successfully for fullscreen');
        fullscreenImage.src = imageSrc;
        const sizeCategory = categorizeImageSize(this.naturalWidth, this.naturalHeight);
        fullscreenImage.setAttribute('data-original-size', sizeCategory);
        if (this.naturalWidth < 500 && this.naturalHeight < 500) {
            fullscreenImage.setAttribute('data-original-size', 'small');
        } else if (this.naturalWidth < 800 && this.naturalHeight < 800) {
            fullscreenImage.setAttribute('data-original-size', 'medium');
        } else {
            fullscreenImage.setAttribute('data-original-size', 'large');
        }
        setTimeout(() => {
            fullscreenImage.style.opacity = '1';
        }, 100);
    };

    tempImage.onerror = function () {
        console.error('Failed to load fullscreen image:', imageSrc);
        closeFullscreenImage();
    };
    tempImage.src = imageSrc;
}
function categorizeImageSize(naturalWidth, naturalHeight) {
    const maxDimension = Math.max(naturalWidth, naturalHeight);

    if (maxDimension <= 400) {
        return 'small';
    } else if (maxDimension <= 800) {
        return 'medium';
    } else {
        return 'large';
    }
}
function setupFullscreenImage() {
    document.removeEventListener('click', handleImageClick);
    document.addEventListener('click', handleImageClick);
    console.log('Image click handlers setup');
}
function handleImageClick(e) {
    const imageElement = e.target;

    if (imageElement.classList.contains('modal-image') && imageElement.src) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Modal image clicked, opening fullscreen:', imageElement.src);
        openFullscreenImage(imageElement.src);
        return;
    }
    const imageContainer = e.target.closest('.modal-image-container');
    if (imageContainer) {
        const img = imageContainer.querySelector('.modal-image');
        if (img && img.src) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Image container clicked, opening fullscreen:', img.src);
            openFullscreenImage(img.src);
            return;
        }
    }
}

function testFullscreenClose() {
    console.log('Testing fullscreen close functionality...');
    const testImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPjIwMHgyMDA8L3RleHQ+PC9zdmc+';
    openFullscreenImage(testImage);
    setTimeout(() => {
        console.log('Auto testing close...');
        closeFullscreenImage();
    }, 3000);
}

function showModal(type, title, user, text, imagePath = null, voicePath = null) {
    const modal = document.getElementById('letterModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalUser = document.getElementById('modalUser');
    const modalText = document.getElementById('modalText');
    const modalMedia = document.getElementById('modalMedia');
    const iconClassMap = {
        guestStar: 'guest-star-icon',
        pingstar: 'pingstar-icon',
        moderator: 'moderator-icon'
    };

    modalIcon.className = `modal-icon ${iconClassMap[type] || ''}`;
    modalTitle.textContent = title;
    modalUser.textContent = `From: ${user}`;
    modalText.innerHTML = text.replace(/\n/g, "<br>");

    modalMedia.innerHTML = createMediaElement(imagePath, voicePath);
    modalMedia.className = 'modal-media medium';

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (typeof gsap !== 'undefined') {
        gsap.fromTo('.modal-content', {
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

        gsap.fromTo('.modal-header', {
            x: -30,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.2
        });

        gsap.fromTo('.modal-user, .modal-text', {
            y: 20,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.3,
            stagger: 0.1
        });

        gsap.fromTo('.modal-image-container, .modal-voice-container', {
            scale: 0.8,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            delay: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    }
}

function hideModal() {
    const modal = document.getElementById('letterModal');
    const modalMedia = document.getElementById('modalMedia');
    const modalContent = document.querySelector('.modal-content');

    if (typeof gsap !== 'undefined') {
        gsap.to('.modal-content', {
            scale: 0.7,
            y: -50,
            opacity: 0,
            duration: 0.3,
            ease: "back.in(1.7)",
            onComplete: () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (modalMedia) {
                    modalMedia.innerHTML = '';
                    modalMedia.className = 'modal-media';
                }
                if (modalContent) {
                    modalContent.classList.remove('left-content');
                }
            }
        });
    } else {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (modalMedia) {
            modalMedia.innerHTML = '';
            modalMedia.className = 'modal-media';
        }
        if (modalContent) {
            modalContent.classList.remove('left-content');
        }
    }
}

function goBack() {
    if (typeof gsap !== 'undefined') {
        gsap.to('.container', {
            opacity: 0,
            y: -30,
            duration: 0.5,
            onComplete: () => {
                window.location.href = 'mending-scroll-pesnuk.html';
            }
        });
    } else {
        window.location.href = 'mending-scroll-pesnuk.html';
    }
}

function initPageAnimations() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        setTimeout(() => {
            if (typeof gsap !== 'undefined') {
                gsap.to('#loadingOverlay', {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        loadingOverlay.style.display = 'none';
                    }
                });
            } else {
                loadingOverlay.style.display = 'none';
            }
        }, 3000);
    }

    if (typeof gsap === 'undefined') {
        console.log('GSAP not loaded, skipping animations');
        return;
    }

    gsap.to('.header', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out"
    });

    gsap.to('.title-section', {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.5,
        ease: "power2.out"
    });

    const starIcon = document.querySelector('.star-icon');
    if (starIcon) {
        gsap.to('.star-icon', {
            rotation: 360,
            duration: 2,
            delay: 0.8,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 3
        });
    }

    gsap.to('.cards-grid', {
        opacity: 1,
        duration: 0.6,
        delay: 0.7,
        stagger: 0.2
    });

    gsap.to('.section-divider', {
        opacity: 1,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        delay: 1,
        stagger: 0.3
    });

    gsap.to('.section-divider', {
        scaleX: 1,
        duration: 1.2,
        delay: 1.2,
        stagger: 0.3,
        ease: "power2.out"
    });
}

function animateCards() {
    const cards = document.querySelectorAll('.card');
    if (typeof gsap !== 'undefined') {
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 1.5,
            stagger: 0.1,
            ease: "back.out(1.7)"
        });
    }
}

function addParallaxEffect() {
    if (typeof gsap === 'undefined') return;
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        gsap.to('body', {
            background: `radial-gradient(circle at ${x}% ${y}%, #1a1a2e 0%, #121214 50%)`,
            duration: 2,
            ease: "power2.out"
        });
    });
}

function setupFullscreenListeners(overlay) {
    cleanupFullscreenListeners();
    const closeBtn = overlay.querySelector('.fullscreen-close');
    const fullscreenContainer = overlay.querySelector('.fullscreen-container');
    const closeClickHandler = (e) => {
        console.log('Close button clicked');
        e.preventDefault();
        e.stopPropagation();
        closeFullscreenImage();
    };
    const overlayClickHandler = (e) => {
        console.log('Overlay clicked:', e.target);
        if (e.target === overlay) {
            console.log('Clicking overlay background - closing');
            closeFullscreenImage();
        }
    };
    fullscreenKeyHandler = (e) => {
        if (overlay.style.display === 'flex') {
            console.log('Key pressed in fullscreen:', e.key);
            switch (e.key) {
                case 'Escape':
                    e.preventDefault();
                    closeFullscreenImage();
                    break;
                case '-':
                case '_':
                    e.preventDefault();
                    adjustImageSize(0.8);
                    break;
                case '+':
                case '=':
                    e.preventDefault();
                    adjustImageSize(1.2);
                    break;
                case '0':
                    e.preventDefault();
                    resetImageSize();
                    break;
            }
        }
    };
    if (closeBtn) {
        closeBtn.addEventListener('click', closeClickHandler);
        fullscreenOverlayListeners.set('closeBtn', { element: closeBtn, handler: closeClickHandler });
        console.log('Close button listener added');
    }
    overlay.addEventListener('click', overlayClickHandler);
    fullscreenOverlayListeners.set('overlay', { element: overlay, handler: overlayClickHandler });
    document.addEventListener('keydown', fullscreenKeyHandler);
    console.log('All fullscreen listeners setup completed');
}

function openFullscreenImage(imageSrc) {
    console.log('Opening fullscreen image:', imageSrc);
    let fullscreenOverlay = document.getElementById('fullscreenOverlay');
    if (!fullscreenOverlay) {
        console.log('Creating new fullscreen overlay');
        fullscreenOverlay = document.createElement('div');
        fullscreenOverlay.id = 'fullscreenOverlay';
        fullscreenOverlay.className = 'fullscreen-overlay';
        fullscreenOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.95);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        fullscreenOverlay.innerHTML = `
            <div class="fullscreen-container" style="
                position: relative;
                max-width: 90vw;
                max-height: 90vh;
                display: flex;
                justify-content: center;
                align-items: center;
            ">
                <img id="fullscreenImage" class="fullscreen-image" src="" alt="Fullscreen Image" style="
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                ">
                <span class="fullscreen-close" style="
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
                ">&times;</span>
            </div>
        `;

        document.body.appendChild(fullscreenOverlay);
        console.log('New overlay created and appended to body');
    }
    setupFullscreenListeners(fullscreenOverlay);
    const fullscreenImage = document.getElementById('fullscreenImage');
    if (!fullscreenImage) {
        console.error('Fullscreen image element not found');
        return;
    }
    fullscreenImage.style.opacity = '0';
    fullscreenImage.src = '';
    fullscreenOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        fullscreenOverlay.style.opacity = '1';
        console.log('Overlay shown');
    }, 10);
    const tempImage = new Image();
    tempImage.onload = function () {
        console.log('Image loaded successfully for fullscreen');
        fullscreenImage.src = imageSrc;
        setTimeout(() => {
            fullscreenImage.style.opacity = '1';
            console.log('Image displayed');
        }, 100);
    };
    tempImage.onerror = function () {
        console.error('Failed to load fullscreen image:', imageSrc);
        closeFullscreenImage();
    };
    tempImage.src = imageSrc;
}

function showImageControls() {
    const overlay = document.getElementById('fullscreenOverlay');
    if (!overlay || overlay.style.display !== 'flex') return;
    let controlsInfo = document.getElementById('fullscreenControls');
    if (!controlsInfo) {
        controlsInfo = document.createElement('div');
        controlsInfo.id = 'fullscreenControls';
        controlsInfo.style.cssText = `
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-size: 14px;
            z-index: 10002;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        controlsInfo.innerHTML = `
            <div>ESC: Close | -: Smaller | +: Larger | 0: Reset</div>
        `;
        overlay.appendChild(controlsInfo);
    }
    controlsInfo.style.opacity = '1';
    setTimeout(() => {
        controlsInfo.style.opacity = '0';
    }, 3000);
}

function closeFullscreenImage() {
    console.log('Closing fullscreen image');
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    const fullscreenImage = document.getElementById('fullscreenImage');
    if (!fullscreenOverlay) {
        console.log('No overlay to close');
        return;
    }
    cleanupFullscreenListeners();
    fullscreenOverlay.style.opacity = '0';
    setTimeout(() => {
        fullscreenOverlay.style.display = 'none';
        if (fullscreenImage) {
            fullscreenImage.src = '';
            fullscreenImage.style.opacity = '0';
        }
        document.body.style.overflow = '';
        console.log('Fullscreen closed');
    }, 300);
}

/* function testImageSizes() {
    const testImages = [
        'fanart/fanart-evai.jpeg',
        'fanart/fanart-evai2.jpeg',  
        'fanart/fanart-evai3.jpeg'
    ];
    
    testImages.forEach((imgPath, index) => {
        setTimeout(() => {
            console.log(`Testing image ${index + 1}: ${imgPath}`);
            openFullscreenImage(imgPath);
            
            // Auto close after 3 seconds for demo
            setTimeout(() => {
                closeFullscreenImage();
            }, 3000);
        }, index * 4000);
    });
} */

function adjustImageSize(scale = 0.8) {
    const fullscreenContainer = document.querySelector('.fullscreen-container');
    if (!fullscreenContainer) return;
    const currentMaxWidth = parseInt(fullscreenContainer.style.maxWidth) || 90;
    const currentMaxHeight = parseInt(fullscreenContainer.style.maxHeight) || 90;
    const newWidth = Math.min(95, Math.max(30, currentMaxWidth * scale));
    const newHeight = Math.min(95, Math.max(30, currentMaxHeight * scale));
    fullscreenContainer.style.maxWidth = `${newWidth}vw`;
    fullscreenContainer.style.maxHeight = `${newHeight}vh`;
    console.log(`Image size adjusted to: ${newWidth}vw x ${newHeight}vh`);
}
function resetImageSize() {
    const fullscreenContainer = document.querySelector('.fullscreen-container');
    if (!fullscreenContainer) return;

    fullscreenContainer.style.maxWidth = '90vw';
    fullscreenContainer.style.maxHeight = '90vh';

    console.log('Image size reset to default');
}

function createImageContainer(imageSrc) {
    const container = document.createElement('div');
    container.classList.add('modal-image-container');
    const image = document.createElement('img');
    image.classList.add('modal-image');
    image.src = imageSrc;
    image.onerror = function () {
        container.innerHTML = `
            <div class="image-error-message">
                <div class="error-icon">🖼️</div>
                <p>Gambar tidak dapat dimuat</p>
                <small>Path: ${imageSrc}</small>
            </div>
        `;
    };
    const overlay = document.createElement('div');
    overlay.classList.add('image-overlay');
    overlay.innerHTML = '<div class="expand-icon">🔍</div>';
    container.appendChild(image);
    container.appendChild(overlay);
    return container;
}
function debugImagePaths() {
    const images = document.querySelectorAll('.modal-image');
    images.forEach((img, index) => {
        console.log(`Image ${index + 1}:`, {
            src: img.src,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            complete: img.complete
        });
        const testImg = new Image();
        testImg.onload = () => console.log(`✅ Image ${index + 1} loaded successfully`);
        testImg.onerror = () => console.log(`❌ Image ${index + 1} failed to load`);
        testImg.src = img.src;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupFullscreenImage();

    document.addEventListener('click', function firstFullscreenOpen(e) {
        if (e.target.classList.contains('modal-image') ||
            e.target.closest('.modal-image-container')) {
            setTimeout(() => {
                showImageControls();
            }, 500);
            document.removeEventListener('click', firstFullscreenOpen);
        }
    });
});

function reinitializeImageHandlers() {
    setupFullscreenImage();
}

function setupEventListeners() {
    const modal = document.getElementById('letterModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', hideModal);
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideModal();
        }
    });

    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goBack();
        });
    }
}

function initializePage() {
    console.log('Data information:', getDataInfo());
    resetCategoryCounters();
    generateCategoryCards('guestStarCards', 'guestStar', 'guest-star-icon', 'Guest Star');
    generateCategoryCards('pingstarCards', 'pingstar', 'pingstar-icon', 'Pingstar');
    generateCategoryCards('moderatorCards', 'moderator', 'moderator-icon', 'Moderator');
    setupEventListeners();
    setupFullscreenImage();
    setTimeout(() => {
        initPageAnimations();
        animateCards();
    }, 500);

    addParallaxEffect();
}
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded - Initializing page...');
    initializePage();
});
window.addEventListener('load', () => {
    console.log('Window loaded - Adding floating animations...');
    setTimeout(() => {
        if (typeof addFloatingAnimation === 'function') {
            addFloatingAnimation();
        }
    }, 2000);
});