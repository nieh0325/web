/**
 * Main JavaScript for Nieh0325 Personal Website
 */

// Search engines configuration
const engines = {
    google: { 
        action: 'https://www.google.com/search', 
        icon: 'https://www.google.com/favicon.ico' 
    },
    bing: { 
        action: 'https://www.bing.com/search', 
        icon: 'https://www.bing.com/favicon.ico' 
    },
    yahoo: { 
        action: 'https://search.yahoo.com/search', 
        icon: 'https://www.yahoo.com/favicon.ico' 
    },
    baidu: { 
        action: 'https://www.baidu.com/s', 
        icon: 'https://www.baidu.com/favicon.ico' 
    },
    duckduckgo: { 
        action: 'https://duckduckgo.com/', 
        icon: 'https://duckduckgo.com/favicon.ico' 
    }
};

/**
 * Update search engine icon based on selection
 */
function updateSearchEngine() {
    const engineSelect = document.getElementById('engine-select');
    const searchIcon = document.getElementById('search-engine-icon');
    
    if (engineSelect && searchIcon) {
        const engine = engineSelect.value;
        searchIcon.src = engines[engine].icon;
        searchIcon.alt = engine + ' favicon';
    }
}

/**
 * Handle search form submission
 * @param {Event} event - Form submit event
 */
function handleSearch(event) {
    event.preventDefault();
    
    const engineSelect = document.getElementById('engine-select');
    const searchInput = document.getElementById('search-input');
    
    if (engineSelect && searchInput) {
        const engine = engineSelect.value;
        const query = searchInput.value.trim();
        
        if (query) {
            const url = engines[engine].action + '?q=' + encodeURIComponent(query);
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }
}

/**
 * Display current date in Chinese format
 */
function displayDate() {
    const dateElement = document.getElementById('current-date');
    
    if (dateElement) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            weekday: 'long' 
        };
        dateElement.textContent = now.toLocaleDateString('zh-TW', options);
    }
}

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
    displayDate();
    
    // Add event listeners
    const searchForm = document.getElementById('global-search');
    const engineSelect = document.getElementById('engine-select');
    
    if (searchForm) {
        searchForm.addEventListener('submit', handleSearch);
    }
    
    if (engineSelect) {
        engineSelect.addEventListener('change', updateSearchEngine);
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
