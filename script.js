// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Statistics Animation
const stats = document.querySelectorAll('.stat-number');

function animateStats() {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const current = parseInt(stat.textContent);
        const increment = target / 100;

        if (current < target) {
            stat.textContent = Math.ceil(current + increment);
            setTimeout(animateStats, 20);
        } else {
            stat.textContent = target;
        }
    });
}

// Intersection Observer for Statistics Animation
const statsSection = document.querySelector('.stats-section');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mainNav.classList.remove('active');
        }
    });
});

// Form Submissions
const inviteForm = document.getElementById('inviteForm');
const helpForm = document.getElementById('helpForm');

inviteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    // Here you would typically send this to your backend
    alert('Thank you for your interest! We will be in touch soon.');
    inviteForm.reset();
});

helpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: e.target.querySelector('input[type="text"]').value,
        email: e.target.querySelector('input[type="email"]').value,
        message: e.target.querySelector('textarea').value
    };
    // Here you would typically send this to your backend
    alert('Thank you for reaching out! We will respond to your inquiry soon.');
    helpForm.reset();
});

// Scroll-based Header Animation
const header = document.querySelector('.main-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});