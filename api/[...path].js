const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');

const app = express();

// 🔒 SECURITY VULNERABILITY: Insecure session configuration
app.use(session({
    secret: 'insecure-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false, // 🔒 SECURITY VULNERABILITY: Not using HTTPS
        httpOnly: false // 🔒 SECURITY VULNERABILITY: XSS vulnerable
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files
app.use(express.static(path.join(__dirname, '..')));

// 🔒 SECURITY VULNERABILITY: Insecure JSON file-based storage
const usersFile = path.join(__dirname, '..', 'users.json');
let users = [];

// Initialize users data
try {
    if (fs.existsSync(usersFile)) {
        users = JSON.parse(fs.readFileSync(usersFile, 'utf8'));
    } else {
        // 🔒 SECURITY VULNERABILITY: Insecure password storage (plaintext)
        users = [
            { id: 1, username: 'admin', password: 'admin123', email: 'admin@test.com' },
            { id: 2, username: 'user1', password: 'password123', email: 'user1@test.com' },
            { id: 3, username: 'test', password: 'test123', email: 'test@test.com' }
        ];
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    }
} catch (error) {
    console.error('Error loading users:', error);
}

// API Routes
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    
    // 🔒 SECURITY VULNERABILITY: No password hashing
    const newUser = {
        id: users.length + 1,
        username,
        email,
        password // 🔒 SECURITY VULNERABILITY: Plaintext password
    };
    
    users.push(newUser);
    
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
        res.json({ success: true, userId: newUser.id });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    // 🔒 SECURITY VULNERABILITY: Plaintext password comparison
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // 🔒 SECURITY VULNERABILITY: Insecure session management
        req.session.userId = user.id;
        req.session.isAdmin = username === 'admin';
        res.json({ success: true, user: { id: user.id, username: user.username, email: user.email } });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/api/users', (req, res) => {
    // 🔒 SECURITY VULNERABILITY: No auth check
    const safeUsers = users.map(u => ({ id: u.id, username: u.username, email: u.email }));
    res.json({ users: safeUsers });
});

app.post('/api/search', (req, res) => {
    const { query } = req.body;
    
    // 🔒 SECURITY VULNERABILITY: No input sanitization
    const results = users.filter(u => u.username.includes(query));
    
    // 🔒 SECURITY VULNERABILITY: No output sanitization
    res.json({ results });
});

app.get('/api/status', (req, res) => {
    const random = Math.random();
    
    if (random > 0.3) {
        res.json({ status: 'healthy', timestamp: Date.now() });
    } else {
        // 🐛 BUG: Endpoint sometimes fails
        res.status(500).json({ error: 'Service unavailable' });
    }
});

app.get('/api/heavy-computation', (req, res) => {
    // 🐛 BUG: Blocking operation
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
        result += Math.sqrt(i);
    }
    res.json({ result });
});

app.get('/api/admin', (req, res) => {
    // 🔒 SECURITY VULNERABILITY: Weak admin check
    if (req.session.isAdmin || req.query.admin === 'true') {
        res.json({ 
            message: 'Admin access granted',
            secretData: 'This should be protected'
        });
    } else {
        res.status(403).json({ error: 'Access denied' });
    }
});

const dataStore = {};

app.post('/api/store-data', (req, res) => {
    const { key, value } = req.body;
    
    // 🐛 BUG: No cleanup of old data
    dataStore[key] = {
        value,
        timestamp: Date.now()
    };
    
    res.json({ success: true });
});

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dashboard.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'settings.html'));
});

app.get('/analytics', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'trap.html'));
});

// 🐛 BUG: Broken error handling
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// 🐛 BUG: Missing 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

module.exports = app; 