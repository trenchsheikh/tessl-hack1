// 🐛 BUG: Global variables causing scope pollution
let globalCounter = 0;
let isLoggedIn = false;
let userData = {};

// 🔒 SECURITY VULNERABILITY: Insecure session management
const sessionData = {
    userId: null,
    isAdmin: false,
    token: null
};

// 🐛 BUG: Broken function that sometimes works, sometimes doesn't
function brokenFunction() {
    const random = Math.random();
    if (random > 0.5) {
        alert('This function worked!');
    } else {
        // 🐛 BUG: Function fails silently
        console.error('Function failed');
        return false;
    }
}

// 🐛 BUG: Function that crashes the app
function crashApp() {
    try {
        // 🐛 BUG: Infinite loop that crashes the browser
        while (true) {
            globalCounter++;
            if (globalCounter > 1000000) break; // This will never be reached
        }
    } catch (error) {
        console.error('App crashed:', error);
    }
}

// 🐛 BUG: Infinite loop function
function infiniteLoop() {
    // 🐛 BUG: Infinite loop that freezes the browser
    let i = 0;
    while (i < 10) {
        console.log('Loop iteration:', i);
        // 🐛 BUG: Counter never increments
    }
}

// 🐛 BUG: Broken modal functions
function openBrokenModal() {
    const modal = document.getElementById('brokenModal');
    modal.style.display = 'block';
    // 🐛 BUG: Modal doesn't properly handle backdrop clicks
}

function closeModal() {
    const modal = document.getElementById('brokenModal');
    // 🐛 BUG: Modal doesn't close properly
    modal.style.display = 'none';
    // 🐛 BUG: Missing proper cleanup
}

// 🔒 SECURITY VULNERABILITY: XSS vulnerability in search form
function showSearchForm() {
    const searchSection = document.getElementById('searchSection');
    searchSection.style.display = 'block';
}

// 🔒 SECURITY VULNERABILITY: XSS vulnerability in search
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const query = document.getElementById('searchQuery').value;
            const resultsDiv = document.getElementById('searchResults');
            
            // 🔒 SECURITY VULNERABILITY: Direct DOM injection without sanitization
            resultsDiv.innerHTML = `<p>Search results for: ${query}</p>`;
            
            // 🐛 BUG: Search sometimes returns no results
            const random = Math.random();
            if (random > 0.4) {
                resultsDiv.innerHTML += '<p>No results found.</p>';
            } else {
                resultsDiv.innerHTML += '<p>Found some results...</p>';
            }
        });
    }
});

// 🐛 BUG: Performance issue - heavy DOM manipulation
function performanceTest() {
    const resultsDiv = document.getElementById('performanceResults');
    resultsDiv.innerHTML = '<p>Running performance test...</p>';
    
    // 🐛 BUG: Heavy DOM manipulation causing performance issues
    for (let i = 0; i < 10000; i++) {
        const div = document.createElement('div');
        div.textContent = `Element ${i}`;
        div.className = 'performance-test-element';
        resultsDiv.appendChild(div);
        
        // 🐛 BUG: Unnecessary DOM queries in loop
        document.getElementById('performanceResults').innerHTML += `<span>${i}</span>`;
    }
    
    resultsDiv.innerHTML += '<p>Performance test completed!</p>';
}

// 🐛 BUG: Utility functions with inconsistent behavior
function showAlert(message) {
    // 🐛 BUG: Function sometimes doesn't work
    const random = Math.random();
    if (random > 0.1) {
        alert(message);
    } else {
        // 🐛 BUG: Silent failure
        console.log('Alert failed to show');
    }
}

// 🐛 BUG: Memory leak - event listeners not properly cleaned up
window.addEventListener('load', function() {
    // 🐛 BUG: Multiple event listeners added without cleanup
    document.addEventListener('click', function() {
        globalCounter++;
    });
    
    document.addEventListener('scroll', function() {
        globalCounter++;
    });
});

// 🔒 SECURITY VULNERABILITY: Insecure data storage
function storeUserData(username, data) {
    // 🔒 SECURITY VULNERABILITY: Storing sensitive data in localStorage
    localStorage.setItem('userData', JSON.stringify(data));
    // 🔒 SECURITY VULNERABILITY: No encryption
}

// 🐛 BUG: Broken error handling
function handleError(error) {
    // 🐛 BUG: Error handling doesn't work properly
    console.error('Error:', error);
    // 🐛 BUG: No user feedback
}

// 🐛 BUG: Race condition in async operations
async function asyncOperation() {
    // 🐛 BUG: Race condition - multiple promises not properly handled
    const promises = [];
    for (let i = 0; i < 5; i++) {
        promises.push(new Promise(resolve => {
            setTimeout(() => resolve(i), Math.random() * 1000);
        }));
    }
    
    // 🐛 BUG: Not waiting for all promises
    Promise.all(promises).then(results => {
        console.log('Results:', results);
    });
}

// 🐛 BUG: Memory leak - global variables accumulating
setInterval(() => {
    globalCounter++;
    // 🐛 BUG: No cleanup of accumulated data
}, 1000);

// 🔒 SECURITY VULNERABILITY: Insecure cookie handling
function setCookie(name, value) {
    // 🔒 SECURITY VULNERABILITY: No secure flags, no httpOnly
    document.cookie = `${name}=${value}; path=/`;
}

// 🐛 BUG: Broken form validation
function validateForm(formData) {
    // 🐛 BUG: Incomplete validation
    if (formData.username && formData.password) {
        return true;
    }
    // 🐛 BUG: Missing specific validation rules
    return false;
}

// 🐛 BUG: Inconsistent API responses
function mockApiCall() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.7) {
                resolve({ success: true, data: 'API response' });
            } else if (random > 0.4) {
                reject(new Error('API error'));
            } else {
                // 🐛 BUG: Inconsistent response format
                resolve('Invalid response format');
            }
        }, Math.random() * 2000);
    });
}

// 🐛 BUG: Text input that crashes on certain values
function processUserInput(input) {
    // 🐛 BUG: Crashes on certain input values
    if (input.includes('crash')) {
        throw new Error('Input caused crash');
    }
    
    if (input.includes('loop')) {
        // 🐛 BUG: Infinite loop on certain input
        while (true) {
            console.log('Infinite loop triggered');
        }
    }
    
    return input.toUpperCase();
}

// 🔒 SECURITY VULNERABILITY: SQL injection simulation
function simulateSqlQuery(userInput) {
    // 🔒 SECURITY VULNERABILITY: SQL injection possible
    const query = `SELECT * FROM users WHERE name = '${userInput}'`;
    console.log('Executing query:', query);
    return query;
}

// 🐛 BUG: Feature that sometimes works, sometimes fails
function unreliableFeature() {
    const random = Math.random();
    if (random > 0.6) {
        return 'Success';
    } else if (random > 0.3) {
        return 'Partial success';
    } else {
        throw new Error('Feature failed');
    }
}

// 🐛 BUG: Broken navigation handling
function handleNavigation(target) {
    // 🐛 BUG: Navigation sometimes fails
    const random = Math.random();
    if (random > 0.2) {
        window.location.href = target;
    } else {
        // 🐛 BUG: Navigation fails silently
        console.log('Navigation failed');
    }
}

// 🐛 BUG: Performance issue - unoptimized loops
function unoptimizedLoop() {
    let result = 0;
    // 🐛 BUG: Unoptimized loop causing performance issues
    for (let i = 0; i < 1000000; i++) {
        result += Math.sqrt(i) * Math.sin(i) * Math.cos(i);
    }
    return result;
}

// 🔒 SECURITY VULNERABILITY: JWT tampering vulnerability
function createInsecureToken(userId) {
    // 🔒 SECURITY VULNERABILITY: Weak token generation
    const payload = {
        userId: userId,
        exp: Date.now() + 3600000, // 1 hour
        iat: Date.now()
    };
    
    // 🔒 SECURITY VULNERABILITY: No proper signing
    return btoa(JSON.stringify(payload));
}

// 🐛 BUG: Broken authentication check
function checkAuth() {
    // 🐛 BUG: Inconsistent authentication check
    const random = Math.random();
    if (random > 0.8) {
        return true;
    } else {
        return false;
    }
}

// Initialize the app with some broken behavior
document.addEventListener('DOMContentLoaded', function() {
    // 🐛 BUG: App initialization sometimes fails
    const random = Math.random();
    if (random > 0.1) {
        console.log('App initialized successfully');
    } else {
        // 🐛 BUG: Silent initialization failure
        console.error('App initialization failed');
    }
    
    // 🐛 BUG: Sometimes loads broken data
    if (random < 0.05) {
        loadBrokenData();
    }
});

// 🐛 BUG: Function that loads broken data
function loadBrokenData() {
    // 🐛 BUG: Loading data that causes issues
    userData = {
        corrupted: true,
        broken: 'data',
        crash: 'on access'
    };
}

// 🔒 SECURITY VULNERABILITY: Exposed admin functions
function exposeAdminFunctions() {
    // 🔒 SECURITY VULNERABILITY: Admin functions accessible without auth
    window.deleteAllUsers = function() {
        alert('All users deleted!');
    };
    
    window.resetSystem = function() {
        alert('System reset!');
    };
}

// 🐛 BUG: Broken event delegation
document.addEventListener('click', function(e) {
    // 🐛 BUG: Event delegation that sometimes doesn't work
    const random = Math.random();
    if (random < 0.1) {
        e.preventDefault();
        e.stopPropagation();
        // 🐛 BUG: Prevents event from working
    }
}); 