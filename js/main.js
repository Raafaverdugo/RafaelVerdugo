// ===== Scroll suave para enlaces internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Botón "Volver arriba" =====
const backToTop = document.createElement('button');
backToTop.textContent = "↑";
backToTop.id = "backToTop";
backToTop.style.cssText = `
    position: fixed;
    bottom: 2em;
    right: 2em;
    background-color: #007aff;
    color: white;
    border: none;
    padding: 0.8em 1em;
    border-radius: 50%;
    font-size: 1.5em;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;
document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// ===== Animación fade-in al hacer scroll =====
const faders = document.querySelectorAll('section');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(section => {
    section.classList.add('fade-section');
    appearOnScroll.observe(section);
});
