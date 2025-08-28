// Initialize mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-button');
    const closeBtn = document.getElementById('mobile-menu-close');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-menu-backdrop');

    if (!menuBtn || !closeBtn || !menu || !backdrop) return;

    function openMenu() {
        menu.setAttribute('aria-hidden', 'false');
        menuBtn.setAttribute('aria-expanded', 'true');
        menu.classList.remove('translate-x-full');
        menu.classList.add('translate-x-0');
        backdrop.classList.remove('hidden');
        backdrop.classList.add('opacity-100');
        closeBtn.classList.remove('hidden');
    }

    function closeMenu() {
        menu.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('translate-x-0');
        menu.classList.add('translate-x-full');
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('hidden');
        closeBtn.classList.add('hidden');
    }

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Close menu on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1200) {
            closeMenu();
        }
    });

    // Accordion logic
    const accordionButtons = document.querySelectorAll('[data-accordion-button]');
    accordionButtons.forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const panel = document.getElementById(targetId);
        const arrow = btn.querySelector('[data-arrow]');

        btn.addEventListener('click', () => {
            const open = panel.style.maxHeight && panel.style.maxHeight !== '0px';
            if (open) {
                panel.style.maxHeight = '0px';
                panel.classList.add('opacity-0');
                if (arrow) arrow.classList.remove('rotate-180');
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                panel.classList.remove('opacity-0');
                if (arrow) arrow.classList.add('rotate-180');
            }
        });
    });
}

// Initialize video player functionality (unchanged)
function initVideoPlayer() {
    const video = document.getElementById("demoVideo");
    const playBtn = document.getElementById("playButton");

    if (video && playBtn) {
        playBtn.addEventListener("click", () => {
            video.controls = true;
            video.play();
            playBtn.style.display = "none";
        });

        video.addEventListener("play", () => {
            playBtn.style.display = "none";
            video.controls = true;
        });
    }
}

// Load all components when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
});
 