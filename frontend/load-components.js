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
            updateHeaderLinks(); // 👈 Función para actualizar enlaces
            updateHeaderLogoLink(); // Función para actualizar link del logo header
            updateHeaderLogoImg(); // Función para actualizar el logo header
            updateFooterLinks(); // Función para actualizar los links del footer
            updateFooterLogoLink(); // Función para actualizar el link del logo
            updateFooterLogoLinkSocial(); // Función para actualizar el link del social
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

// Actualiza el enlace del logo del header
function updateHeaderLogoLink() {
    const menuLinks = document.querySelectorAll('.logo a');
    menuLinks.forEach(link => {
        const originalHref = link.getAttribute('href').replace(/^\//, ''); // Remueve el / inicial
        link.href = `${basePath}${originalHref}`;
    });
}

// Actualiza la imagen del logo del header
function updateHeaderLogoImg() {
    const logoImages = document.querySelectorAll('.logo img');
    logoImages.forEach(img => {
        const originalSrc = img.getAttribute('src').replace(/^\//, ''); // Remueve el / inicial
        img.src = `${basePath}${originalSrc}`;
    });
}

// Actualiza los enlaces del footer
function updateFooterLinks() {
    const menuLinks = document.querySelectorAll('.footer-links a');
    menuLinks.forEach(link => {
        const originalHref = link.getAttribute('href').replace(/^\//, ''); // Remueve el / inicial
        link.href = `${basePath}${originalHref}`;
    });
}

// Actualiza el enlace del logo del footer
function updateFooterLogoLink() {
    const menuLinks = document.querySelectorAll('.footer-logo a');
    menuLinks.forEach(link => {
        const originalHref = link.getAttribute('href').replace(/^\//, ''); // Remueve el / inicial
        link.href = `${basePath}${originalHref}`;
    });
}

// Actualiza el enlace del logo social del footer
function updateFooterLogoLinkSocial() {
    const menuLinks = document.querySelectorAll('.footer-social a');
    menuLinks.forEach(link => {
        const originalHref = link.getAttribute('href').replace(/^\//, ''); // Remueve el / inicial
        link.href = `${basePath}${originalHref}`;
    });
}

// Actualiza la imagen del logo del footer
function updateFooterLogoImg() {
    const logoImages = document.querySelectorAll('.logo img');
    logoImages.forEach(img => {
        const originalSrc = img.getAttribute('src').replace(/^\//, ''); // Remueve el / inicial
        img.src = `${basePath}${originalSrc}`;
    });
}

// Actualiza la imagen del logo social del footer
function updateFooterLogoSocialImg() {
    const logoImages = document.querySelectorAll('.footer-social img');
    logoImages.forEach(img => {
        const originalSrc = img.getAttribute('src').replace(/^\//, ''); // Remueve el / inicial
        img.src = `${basePath}${originalSrc}`;
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