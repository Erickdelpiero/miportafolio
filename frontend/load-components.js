// Configuración de rutas
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const repoName = 'miportafolio';
const basePath = isLocal ? '/' : `/${repoName}/`;

async function loadComponent(componentName, targetElementId) {
    try {
        const componentPath = `${basePath}frontend/pages/components/${componentName}.html`;
        const response = await fetch(componentPath);
        
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;

        if (componentName === 'header') {
            setupHamburgerMenu();
            updateHeaderLinks(); // 👈 Nueva función para actualizar enlaces
        }
    } catch (error) {
        console.error(`Error al cargar ${componentName}:`, error);
    }
}

// Actualiza los enlaces del header
function updateHeaderLinks() {
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        const originalHref = link.getAttribute('href').replace(/^\//, ''); // Remueve el / inicial
        link.href = `${basePath}${originalHref}`;
    });
}

// Función para configurar el botón hamburguesa
function setupHamburgerMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('active');
            this.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
    }
}

// Cargar header y footer al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header-placeholder');
    loadComponent('footer', 'footer-placeholder');
});