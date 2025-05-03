// Splash Screen Effect
document.getElementById('enterSite').addEventListener('click', function () {
    const splash = document.getElementById('splash');
    const mainContent = document.querySelector('.main-content');
    const audio = document.getElementById('backgroundMusic');

    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }, 800);

    audio.play().catch((err) => {
        console.log("Autoplay gagal:", err);
    })
});

// Add floating hearts
function createHearts() {
    const container = document.querySelector('.floating-hearts');

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-float');

        // Random positioning
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';

        // Random size
        const size = Math.random() * 15 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';

        // Random animation duration
        heart.style.animationDuration = Math.random() * 15 + 5 + 's';

        // Random delay
        heart.style.animationDelay = Math.random() * 5 + 's';

        container.appendChild(heart);
    }
}

// Gallery modal
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = 'flex';
        const imgSrc = this.querySelector('img').src;
        const caption = this.getAttribute('data-caption');
        modalImg.src = imgSrc;
        modalCaption.textContent = caption;
    });
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Initialize
window.addEventListener('load', function () {
    createHearts();

    // Animation for description section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.description p').forEach(p => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        p.style.transition = 'all 0.8s ease';
        observer.observe(p);
    });
});