document.addEventListener('DOMContentLoaded', function() {
    // Menu Animation
    const menu = document.getElementById('menu');
    menu.style.opacity = 0;
    menu.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        menu.style.transition = 'opacity 1s, transform 1s';
        menu.style.opacity = 1;
        menu.style.transform = 'translateY(0)';
    }, 500);

    // Dynamic Rating System
    const stars = document.querySelectorAll('.rating .star');
    const ratingMessage = document.getElementById('rating-message');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            const profile = window.location.pathname.split('/').pop().replace('.html', '');
            localStorage.setItem(`rating_${profile}`, rating);
            updateRating(rating);
            showThankYouMessage();
        });
    });

    function updateRating(rating) {
        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('active');
        }
    }

    function showThankYouMessage() {
        ratingMessage.classList.add('show');
        setTimeout(() => {
            ratingMessage.classList.remove('show');
        }, 2000);
    }

    // Load saved rating
    const profile = window.location.pathname.split('/').pop().replace('.html', '');
    const savedRating = localStorage.getItem(`saved_rating_${profile}`) || localStorage.getItem(`rating_${profile}`);
    if (savedRating) {
        updateRating(savedRating);
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }

    // Menu Navigation Animation
    const menuLinks = document.querySelectorAll('#menu ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            fadeOut(function() {
                window.location.href = target;
            });
        });
    });

    function fadeOut(callback) {
        const main = document.querySelector('main');
        main.style.opacity = 1;
        main.style.transition = 'opacity 0.5s';
        main.style.opacity = 0;
        setTimeout(callback, 500);
    }
});
