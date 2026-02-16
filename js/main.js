// Main JavaScript for Dashboard

// Update date and time
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString('es-ES', options);
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('es-ES');
    }
}

// Load statistics from localStorage
function loadStatistics() {
    try {
        // Load shopping items count
        const compras = JSON.parse(localStorage.getItem('shoppingList') || '[]');
        const comprasCount = document.getElementById('comprasCount');
        if (comprasCount) {
            comprasCount.textContent = compras.length;
        }
        
        // Load tasks count
        const tareas = JSON.parse(localStorage.getItem('tasksList') || '[]');
        const tareasCount = document.getElementById('tareasCount');
        if (tareasCount) {
            const pendientes = tareas.filter(t => !t.completed).length;
            tareasCount.textContent = pendientes;
        }
        
        // Load notes count
        const notas = JSON.parse(localStorage.getItem('notesList') || '[]');
        const notasCount = document.getElementById('notasCount');
        if (notasCount) {
            notasCount.textContent = notas.length;
        }
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
}

// Initialize dashboard
function initDashboard() {
    updateDateTime();
    setInterval(updateDateTime, 1000);
    loadStatistics();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
} else {
    initDashboard();
}

// Refresh statistics when page becomes visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        loadStatistics();
    }
});
