// Shopping List JavaScript

let shoppingList = [];

// Load shopping list from localStorage
function loadShoppingList() {
    try {
        const saved = localStorage.getItem('shoppingList');
        shoppingList = saved ? JSON.parse(saved) : [];
        renderShoppingList();
        updateStatistics();
    } catch (error) {
        console.error('Error loading shopping list:', error);
        shoppingList = [];
    }
}

// Save shopping list to localStorage
function saveShoppingList() {
    try {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        updateStatistics();
    } catch (error) {
        console.error('Error saving shopping list:', error);
    }
}

// Add item to shopping list
function addItem(name, quantity) {
    const item = {
        id: Date.now(),
        name: name.trim(),
        quantity: parseInt(quantity) || 1,
        checked: false,
        addedAt: new Date().toISOString()
    };
    
    shoppingList.unshift(item);
    saveShoppingList();
    renderShoppingList();
}

// Toggle item checked status
function toggleItem(id) {
    const item = shoppingList.find(item => item.id === id);
    if (item) {
        item.checked = !item.checked;
        saveShoppingList();
        renderShoppingList();
    }
}

// Delete item from shopping list
function deleteItem(id) {
    shoppingList = shoppingList.filter(item => item.id !== id);
    saveShoppingList();
    renderShoppingList();
}

// Clear all items
function clearAll() {
    if (shoppingList.length === 0) return;
    
    if (confirm('¿Estás seguro de que quieres eliminar todos los productos?')) {
        shoppingList = [];
        saveShoppingList();
        renderShoppingList();
    }
}

// Render shopping list
function renderShoppingList() {
    const listElement = document.getElementById('shoppingList');
    const emptyState = document.getElementById('emptyState');
    
    if (!listElement || !emptyState) return;
    
    if (shoppingList.length === 0) {
        emptyState.style.display = 'block';
        listElement.innerHTML = '';
        return;
    }
    
    emptyState.style.display = 'none';
    
    listElement.innerHTML = shoppingList.map(item => `
        <li class="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition item-enter ${item.checked ? 'checked-item' : ''}">
            <div class="flex items-center flex-1">
                <input
                    type="checkbox"
                    ${item.checked ? 'checked' : ''}
                    onchange="toggleItem(${item.id})"
                    class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                >
                <div class="ml-4 flex-1">
                    <span class="text-gray-800 font-medium ${item.checked ? 'line-through' : ''}">${escapeHtml(item.name)}</span>
                    <span class="ml-2 text-gray-500 text-sm">x${item.quantity}</span>
                </div>
            </div>
            <button
                onclick="deleteItem(${item.id})"
                class="text-red-500 hover:text-red-700 transition p-2 rounded-lg hover:bg-red-50"
                title="Eliminar"
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
            </button>
        </li>
    `).join('');
}

// Update statistics
function updateStatistics() {
    const totalItems = document.getElementById('totalItems');
    const pendingItems = document.getElementById('pendingItems');
    const checkedItems = document.getElementById('checkedItems');
    
    if (totalItems) totalItems.textContent = shoppingList.length;
    if (pendingItems) pendingItems.textContent = shoppingList.filter(item => !item.checked).length;
    if (checkedItems) checkedItems.textContent = shoppingList.filter(item => item.checked).length;
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
    loadShoppingList();
    
    // Add item form
    const form = document.getElementById('addItemForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameInput = document.getElementById('itemName');
            const quantityInput = document.getElementById('itemQuantity');
            
            if (nameInput && nameInput.value.trim()) {
                addItem(nameInput.value, quantityInput ? quantityInput.value : 1);
                nameInput.value = '';
                if (quantityInput) quantityInput.value = '1';
                nameInput.focus();
            }
        });
    }
    
    // Clear all button
    const clearAllBtn = document.getElementById('clearAllBtn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', clearAll);
    }
});
