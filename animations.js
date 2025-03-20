// Fungsi untuk membuat bintang
function createStars() {
    const stars = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 1}s`;
        stars.appendChild(star);
    }
}

// Fungsi untuk membuat burung
function createBirds() {
    const birds = document.getElementById('birds');
    const numberOfBirds = 5;

    for (let i = 0; i < numberOfBirds; i++) {
        const bird = document.createElement('div');
        bird.className = 'bird';
        bird.style.left = `-50px`;
        bird.style.top = `${Math.random() * 50 + 20}%`;
        
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        bird.style.animation = `flyAcross ${duration}s linear ${delay}s infinite`;
        birds.appendChild(bird);
    }
}

// Fungsi untuk mengatur visibilitas berdasarkan waktu
function updateTimeBasedElements() {
    const currentHour = new Date().getHours();
    const stars = document.getElementById('stars');
    const lottieContainer = document.getElementById('lottie-container');
    
    // Atur visibilitas bintang
    if (currentHour >= 18 || currentHour < 6) {
        stars.style.opacity = '1';
        if (lottieContainer) lottieContainer.style.opacity = '0.2';
    } else {
        stars.style.opacity = '0';
        if (lottieContainer) lottieContainer.style.opacity = '0.4';
    }
}

// Inisialisasi Lottie
function initLottie() {
    const currentHour = new Date().getHours();
    let animationPath;

    // Pilih animasi berdasarkan waktu
    if (currentHour >= 5 && currentHour < 10) {
        // Pagi - animasi matahari terbit
        animationPath = 'https://assets5.lottiefiles.com/packages/lf20_XkF78Y.json';
    } else if (currentHour >= 10 && currentHour < 15) {
        // Siang - animasi awan bergerak
        animationPath = 'https://assets2.lottiefiles.com/packages/lf20_KUFdS6.json';
    } else if (currentHour >= 15 && currentHour < 18) {
        // Sore - animasi matahari terbenam
        animationPath = 'https://assets5.lottiefiles.com/packages/lf20_mR1ERr.json';
    } else {
        // Malam - animasi bintang
        animationPath = 'https://assets9.lottiefiles.com/packages/lf20_twxv8mn9.json';
    }

    lottie.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });
}

// Inisialisasi semua animasi
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createBirds();
    initLottie();
    
    // Update elemen berdasarkan waktu
    updateTimeBasedElements();
    setInterval(updateTimeBasedElements, 60000); // Update setiap menit
    
    // Atur animasi pesawat
    setInterval(() => {
        const plane = document.getElementById('plane');
        plane.style.animation = 'none';
        plane.offsetHeight; // Trigger reflow
        plane.style.animation = null;
    }, 25000); // Pesawat muncul setiap 25 detik
}); 