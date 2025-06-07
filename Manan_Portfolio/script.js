document.addEventListener('DOMContentLoaded', () => {

    // --- Typing Effect for Hero Section ---
    const typingTextEl = document.getElementById('typing-text');
    if (typingTextEl) {
        const words = ["Full-Stack Developer", "Gamer", "Problem Solver", "Linux Enthusiast"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            const currentText = isDeleting ? 
                currentWord.substring(0, charIndex--) : 
                currentWord.substring(0, charIndex++);

            typingTextEl.textContent = currentText;
            typingTextEl.classList.add('stop-blinking');

            let typeSpeed = isDeleting ? 50 : 150;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
                typingTextEl.classList.remove('stop-blinking');
            }
            setTimeout(type, typeSpeed);
        }
        type();
    }


    // --- On-Scroll Reveal Animation ---
    const sections = document.querySelectorAll('.container');
    if (sections) {
        const revealSection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        };

        const sectionObserver = new IntersectionObserver(revealSection, {
            root: null,
            threshold: 0.1,
        });

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }


    // --- Mobile Navigation (Hamburger Menu) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            
            // Animate links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Hamburger animation
            hamburger.classList.toggle('toggle');
        });
    }

    // --- Hide Nav on Link Click (for mobile) ---
    if(navLinks && navLinks.classList.contains('nav-active')){
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            });
        });
    }

});