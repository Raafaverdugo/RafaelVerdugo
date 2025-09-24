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


// JavaScript para el menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Toggle del menú
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        // Cambiar aria-label para accesibilidad
        const isOpen = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        
        // Prevenir scroll del body cuando el menú está abierto
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }
    
    // Cerrar menú
    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        hamburger.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = 'auto';
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    // Cerrar menú al hacer click en un enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    // Cerrar menú con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // Cerrar menú al redimensionar ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});