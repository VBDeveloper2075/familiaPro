// Notes JavaScript

let notesList = [];
let currentFilter = 'all';

// Category icons and colors
const categoryConfig = {
    general: { icon: '📌', color: 'bg-blue-100', textColor: 'text-blue-800' },
    importante: { icon: '⚠️', color: 'bg-red-100', textColor: 'text-red-800' },
    recordatorio: { icon: '⏰', color: 'bg-yellow-100', textColor: 'text-yellow-800' },
    compras: { icon: '🛒', color: 'bg-green-100', textColor: 'text-green-800' },
    salud: { icon: '🏥', color: 'bg-purple-100', textColor: 'text-purple-800' }
};

// Load notes from localStorage
function loadNotes() {
    try {
        const saved = localStorage.getItem('notesList');
        notesList = saved ? JSON.parse(saved) : [];
        renderNotes();
    } catch (error) {
        console.error('Error loading notes:', error);
        notesList = [];
    }
}

// Save notes to localStorage
function saveNotes() {
    try {
        localStorage.setItem('notesList', JSON.stringify(notesList));
    } catch (error) {
        console.error('Error saving notes:', error);
    }
}

// Add note
function addNote(title, content, category) {
    const note = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        category: category,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    notesList.unshift(note);
    saveNotes();
    renderNotes();
}

// Delete note
function deleteNote(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        notesList = notesList.filter(note => note.id !== id);
        saveNotes();
        renderNotes();
    }
}

// Filter notes
function filterNotes(filter) {
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
    
    renderNotes();
}

// Render notes
function renderNotes() {
    const gridElement = document.getElementById('notesGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!gridElement || !emptyState) return;
    
    // Filter notes based on current filter
    const filteredNotes = currentFilter === 'all' 
        ? notesList 
        : notesList.filter(note => note.category === currentFilter);
    
    if (filteredNotes.length === 0) {
        emptyState.style.display = 'block';
        gridElement.innerHTML = '';
        return;
    }
    
    emptyState.style.display = 'none';
    
    gridElement.innerHTML = filteredNotes.map(note => {
        const config = categoryConfig[note.category] || categoryConfig.general;
        const date = new Date(note.createdAt);
        const formattedDate = date.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric' 
        });
        
        return `
            <div class="bg-white rounded-xl shadow-md overflow-hidden note-card">
                <div class="p-5">
                    <div class="flex justify-between items-start mb-3">
                        <span class="${config.color} ${config.textColor} px-3 py-1 rounded-full text-xs font-semibold">
                            ${config.icon} ${note.category.charAt(0).toUpperCase() + note.category.slice(1)}
                        </span>
                        <button
                            onclick="deleteNote(${note.id})"
                            class="text-gray-400 hover:text-red-500 transition"
                            title="Eliminar nota"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </button>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">${escapeHtml(note.title)}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-3">${escapeHtml(note.content)}</p>
                    <div class="flex items-center text-xs text-gray-400">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        ${formattedDate}
                    </div>
                </div>
            </div>
        `;
    }).join('');
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
    loadNotes();
    
    // Add note form
    const form = document.getElementById('addNoteForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const titleInput = document.getElementById('noteTitle');
            const contentInput = document.getElementById('noteContent');
            const categoryInput = document.getElementById('noteCategory');
            
            if (titleInput && contentInput && titleInput.value.trim() && contentInput.value.trim()) {
                addNote(
                    titleInput.value,
                    contentInput.value,
                    categoryInput ? categoryInput.value : 'general'
                );
                
                titleInput.value = '';
                contentInput.value = '';
                if (categoryInput) categoryInput.value = 'general';
                titleInput.focus();
            }
        });
    }
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            if (filter) filterNotes(filter);
        });
    });
});
