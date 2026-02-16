// Tasks JavaScript

let tasksList = [];
let currentFilter = 'all';

// Priority configuration
const priorityConfig = {
    low: { label: 'Baja', color: 'text-green-600', icon: '🟢' },
    medium: { label: 'Media', color: 'text-yellow-600', icon: '🟡' },
    high: { label: 'Alta', color: 'text-red-600', icon: '🔴' }
};

// Load tasks from localStorage
function loadTasks() {
    try {
        const saved = localStorage.getItem('tasksList');
        tasksList = saved ? JSON.parse(saved) : [];
        renderTasks();
        updateStatistics();
    } catch (error) {
        console.error('Error loading tasks:', error);
        tasksList = [];
    }
}

// Save tasks to localStorage
function saveTasks() {
    try {
        localStorage.setItem('tasksList', JSON.stringify(tasksList));
        updateStatistics();
    } catch (error) {
        console.error('Error saving tasks:', error);
    }
}

// Add task
function addTask(name, responsible, priority, date) {
    const task = {
        id: Date.now(),
        name: name.trim(),
        responsible: responsible || '',
        priority: priority || 'low',
        dueDate: date || null,
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null
    };
    
    tasksList.unshift(task);
    saveTasks();
    renderTasks();
}

// Toggle task completion
function toggleTask(id) {
    const task = tasksList.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date().toISOString() : null;
        saveTasks();
        renderTasks();
    }
}

// Delete task
function deleteTask(id) {
    tasksList = tasksList.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

// Clear completed tasks
function clearCompleted() {
    const completed = tasksList.filter(t => t.completed);
    if (completed.length === 0) {
        alert('No hay tareas completadas para eliminar');
        return;
    }
    
    if (confirm(`¿Estás seguro de que quieres eliminar ${completed.length} tarea(s) completada(s)?`)) {
        tasksList = tasksList.filter(t => !t.completed);
        saveTasks();
        renderTasks();
    }
}

// Filter tasks
function filterTasks(filter) {
    currentFilter = filter;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    
    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-200', 'text-gray-700');
        activeBtn.classList.add('active', 'bg-blue-600', 'text-white');
    }
    
    renderTasks();
}

// Render tasks
function renderTasks() {
    const listElement = document.getElementById('tasksList');
    const emptyState = document.getElementById('emptyState');
    
    if (!listElement || !emptyState) return;
    
    // Filter tasks
    let filteredTasks = tasksList;
    if (currentFilter === 'pending') {
        filteredTasks = tasksList.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasksList.filter(t => t.completed);
    } else if (currentFilter === 'high') {
        filteredTasks = tasksList.filter(t => t.priority === 'high' && !t.completed);
    }
    
    if (filteredTasks.length === 0) {
        emptyState.style.display = 'block';
        listElement.innerHTML = '';
        return;
    }
    
    emptyState.style.display = 'none';
    
    listElement.innerHTML = filteredTasks.map(task => {
        const config = priorityConfig[task.priority] || priorityConfig.low;
        const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'short'
        }) : null;
        
        const isOverdue = task.dueDate && !task.completed && new Date(task.dueDate) < new Date();
        
        return `
            <div class="task-card bg-white rounded-lg p-4 shadow-sm border priority-${task.priority} ${task.completed ? 'opacity-60' : ''}">
                <div class="flex items-start">
                    <input
                        type="checkbox"
                        ${task.completed ? 'checked' : ''}
                        onchange="toggleTask(${task.id})"
                        class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer mt-1"
                    >
                    <div class="ml-4 flex-1">
                        <div class="flex items-start justify-between">
                            <div class="flex-1">
                                <h3 class="font-medium text-gray-800 ${task.completed ? 'line-through' : ''}">
                                    ${escapeHtml(task.name)}
                                </h3>
                                <div class="flex flex-wrap items-center gap-3 mt-2 text-sm">
                                    ${task.responsible ? `
                                        <span class="text-gray-600">
                                            <span class="font-medium">${escapeHtml(task.responsible)}</span>
                                        </span>
                                    ` : ''}
                                    <span class="${config.color} font-medium">
                                        ${config.icon} ${config.label}
                                    </span>
                                    ${dueDate ? `
                                        <span class="${isOverdue ? 'text-red-600 font-semibold' : 'text-gray-500'}">
                                            📅 ${dueDate}${isOverdue ? ' ⚠️' : ''}
                                        </span>
                                    ` : ''}
                                </div>
                            </div>
                            <button
                                onclick="deleteTask(${task.id})"
                                class="text-gray-400 hover:text-red-500 transition ml-2"
                                title="Eliminar tarea"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Update statistics
function updateStatistics() {
    const totalTasks = document.getElementById('totalTasks');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');
    const highPriorityTasks = document.getElementById('highPriorityTasks');
    
    if (totalTasks) totalTasks.textContent = tasksList.length;
    if (pendingTasks) pendingTasks.textContent = tasksList.filter(t => !t.completed).length;
    if (completedTasks) completedTasks.textContent = tasksList.filter(t => t.completed).length;
    if (highPriorityTasks) highPriorityTasks.textContent = tasksList.filter(t => t.priority === 'high' && !t.completed).length;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    
    // Add task form
    const form = document.getElementById('addTaskForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('taskName');
            const responsibleInput = document.getElementById('taskResponsible');
            const priorityInput = document.getElementById('taskPriority');
            const dateInput = document.getElementById('taskDate');
            
            if (nameInput && nameInput.value.trim()) {
                addTask(
                    nameInput.value,
                    responsibleInput ? responsibleInput.value : '',
                    priorityInput ? priorityInput.value : 'low',
                    dateInput ? dateInput.value : null
                );
                
                nameInput.value = '';
                if (responsibleInput) responsibleInput.value = '';
                if (priorityInput) priorityInput.value = 'low';
                if (dateInput) dateInput.value = '';
                nameInput.focus();
            }
        });
    }
    
    // Clear completed button
    const clearCompletedBtn = document.getElementById('clearCompletedBtn');
    if (clearCompletedBtn) {
        clearCompletedBtn.addEventListener('click', clearCompleted);
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            if (filter) filterTasks(filter);
        });
    });
});
