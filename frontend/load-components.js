// Configuración de rutas para local y GitHub Pages
const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const repoName = 'miportafolio';
const basePath = isLocal ? '/' : `/${repoName}/`;

/**
 * Carga un componente HTML (header o footer) y lo inserta en el DOM
 * @param {string} componentName - Nombre del componente ('header' o 'footer')
 * @param {string} targetElementId - ID del elemento donde se insertará el componente
 */
async function loadComponent(componentName, targetElementId) {
    try {
        const componentPath = `${basePath}frontend/pages/components/${componentName}.html`;
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Error ${response.status}`);

        document.getElementById(targetElementId).innerHTML = await response.text();
        
        if (componentName === 'header') {
            setupHamburgerMenu();
            updateLinks('.menu a');
            updateLinks('.logo a');
            updateImages('.logo img');
        }

        if (componentName === 'footer') {
            updateLinks('.footer-links a');
            updateLinks('.footer-logo a');
            updateImages('.footer-logo img');
            updateImages('.footer-social img');
        }
    } catch (error) {
        console.error(`Error al cargar ${componentName}:`, error);
    }
}

/**
 * Actualiza los enlaces dentro de un contenedor específico para que funcionen en local y en GitHub Pages
 * @param {string} selector - Selector CSS de los enlaces a actualizar
 */
function updateLinks(selector) {
    document.querySelectorAll(selector).forEach(link => {
        if (link.hasAttribute('href')) {
            link.href = `${basePath}${link.getAttribute('href').replace(/^\//, '')}`;
        }
    });
}

/**
 * Actualiza las imágenes dentro de un contenedor específico para que funcionen en local y en GitHub Pages
 * @param {string} selector - Selector CSS de las imágenes a actualizar
 */
function updateImages(selector) {
    document.querySelectorAll(selector).forEach(img => {
        if (img.hasAttribute('src')) {
            img.src = `${basePath}${img.getAttribute('src').replace(/^\//, '')}`;
        }
    });
}

/**
 * Configura el botón de menú hamburguesa en móviles
 */
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
