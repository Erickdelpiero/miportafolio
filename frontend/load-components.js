// Función para cargar un componente (header/footer) en un elemento del DOM
async function loadComponent(componentName, targetElementId) {
    try {
        const response = await fetch(`/frontend/pages/components/${componentName}.html`);
        const html = await response.text();
        document.getElementById(targetElementId).innerHTML = html;

        // 👇 Añade esto solo para el header
        if (componentName === 'header') {
            setupHamburgerMenu();
        }

    } catch (error) {
        console.error(`Error al cargar ${componentName}:`, error);
    }
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