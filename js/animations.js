function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
        last = +new Date();

        if (+element.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };

    requestAnimationFrame(tick);
}

function slideIn(element) {
    element.style.transform = 'translateX(-100%)';
    element.style.transition = 'transform 0.5s ease-in-out';
    element.style.display = 'block';
    requestAnimationFrame(() => {
        element.style.transform = 'translateX(0)';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const profileLinks = document.querySelectorAll('.profile-link');

    fadeIn(menu);

    profileLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            slideIn(link);
        });
    });
});