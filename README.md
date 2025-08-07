# TaskFlow - Project Management Application

A web-based project management application with team collaboration and task tracking features.

## 🎯 Purpose

This application is designed to test AI agents' ability to detect and fix bugs, security vulnerabilities, and performance issues. The application appears as a legitimate project management tool but contains intentional bugs and vulnerabilities for testing purposes.

## 🐛 Intentional Bugs and Vulnerabilities

### ❌ UI Bugs
1. **Misaligned buttons** - Button group layout is broken
2. **Broken modal** - Modal doesn't close properly, missing backdrop handling
3. **Responsive design issues** - Mobile layout is broken
4. **Missing hover states** - No hover effects on buttons and links
5. **Poor color contrast** - Accessibility issues with text colors

### 🔒 Security Flaws
1. **XSS Vulnerabilities**:
   - Login form directly injects user input into DOM
   - Search form vulnerable to XSS attacks
   - No input sanitization on backend

2. **SQL Injection**:
   - Login form vulnerable to SQL injection
   - Backend uses string concatenation for SQL queries

3. **Authentication Bypass**:
   - Admin panel accessible without proper authentication
   - Weak session management
   - Insecure password storage (no hashing)

4. **Insecure Configuration**:
   - Session cookies not secure
   - No HTTPS enforcement
   - Sensitive data stored in localStorage

### 🐛 Frontend Logic Bugs
1. **Broken functions** - `brokenFunction()` sometimes works, sometimes fails
2. **Crash functions** - `crashApp()` causes infinite loops
3. **Inconsistent behavior** - `loadBrokenContent()` randomly fails
4. **Memory leaks** - Event listeners not properly cleaned up
5. **Race conditions** - Async operations not properly handled

### 🧠 Edge Cases
1. **Text inputs that crash** - Certain inputs cause infinite loops
2. **Broken navigation** - Some links lead to dead ends
3. **Inconsistent API responses** - Backend sometimes returns invalid formats
4. **Silent failures** - Functions fail without user feedback

### 🐢 Performance Issues
1. **Heavy DOM manipulation** - Performance test creates thousands of elements
2. **Infinite animations** - CSS animations that never stop
3. **Blocking operations** - Backend has blocking computation
4. **Memory leaks** - Global variables accumulating without cleanup

## 🚀 How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
# or for development with auto-restart:
npm run dev
```

3. Open http://localhost:3000 in your browser

## 🔑 Test Credentials

- **Username:** `admin` | **Password:** `admin123`
- **Username:** `user1` | **Password:** `password123`
- **Username:** `test` | **Password:** `test123`

## 🎯 Testing Scenarios

### For AI Agents to Detect and Fix:

1. **Security Issues**:
   - Find and fix XSS vulnerabilities
   - Implement proper SQL injection protection
   - Add proper authentication checks
   - Secure session management

2. **UI/UX Issues**:
   - Fix broken modal functionality
   - Improve responsive design
   - Add proper hover states
   - Fix button alignment

3. **Performance Issues**:
   - Optimize heavy DOM operations
   - Remove infinite loops
   - Fix memory leaks
   - Add proper error handling

4. **Logic Bugs**:
   - Fix inconsistent function behavior
   - Add proper validation
   - Implement proper async handling
   - Add missing error handling

## 📝 Bug Documentation

Each bug is documented in the code with comments explaining:
- What the bug is
- Why it's problematic
- How it could be exploited
- What the correct implementation should be

## ⚠️ Important Notes

### Testing Environment
This application is intentionally broken for testing purposes. Do not use in production or with real user data. All bugs and vulnerabilities are deliberately included to test AI agent capabilities.

### Application Appearance
The application is designed to look like a legitimate project management tool called "TaskFlow" to avoid obvious detection as a testing target. However, it contains numerous intentional bugs and vulnerabilities.

### Bug Documentation
Each bug is documented in the code with comments explaining:
- What the bug is
- Why it's problematic
- How it could be exploited
- What the correct implementation should be

## 🎯 Expected AI Agent Actions

A competent AI agent should be able to:

1. **Identify** all intentional bugs and vulnerabilities across all categories
2. **Prioritize** fixes based on severity (security > functionality > performance)
3. **Implement** proper fixes with best practices and industry standards
4. **Test** that fixes work correctly and don't introduce new issues
5. **Document** changes made with clear reasoning and explanations

### Priority Order for Fixes

1. **Critical Security Issues** (Fix First)
   - XSS vulnerabilities
   - Authentication bypass
   - Plaintext password storage
   - Admin panel access

2. **Major Functionality Issues** (Fix Second)
   - Broken navigation
   - Form validation
   - Error handling
   - Data consistency

3. **UI/UX Issues** (Fix Third)
   - Modal functionality
   - Responsive design
   - Accessibility
   - Visual alignment

4. **Performance Issues** (Fix Last)
   - Memory leaks
   - Infinite loops
   - Heavy operations
   - Optimization

## 🔍 Testing Checklist

### Security Fixes
- [ ] XSS vulnerabilities in search form fixed
- [ ] Plaintext password storage replaced with hashing
- [ ] Admin panel access properly secured
- [ ] Session management made secure
- [ ] Input validation implemented
- [ ] Output sanitization added
- [ ] Security headers added

### UI/UX Fixes
- [ ] Modal functionality fixed (close button, backdrop)
- [ ] Button alignment issues resolved
- [ ] Responsive design improved
- [ ] Hover states added
- [ ] Color contrast improved for accessibility

### Performance Fixes
- [ ] Heavy DOM manipulation optimized
- [ ] Infinite loops removed
- [ ] Memory leaks from event listeners fixed
- [ ] Blocking operations made asynchronous
- [ ] Unoptimized loops optimized

### Functionality Fixes
- [ ] Broken navigation links fixed
- [ ] Settings page 404 resolved
- [ ] Analytics page redirect loop fixed
- [ ] Form validation improved
- [ ] Error handling enhanced

## 📁 Project Structure

```
taskflow-app/
├── index.html          # Home page with UI bugs and broken buttons
├── login.html          # Login page with security vulnerabilities
├── dashboard.html      # Dashboard with broken data loading
├── settings.html       # Settings page with 404 error
├── trap.html          # Analytics page with redirect loops
├── style.css          # CSS with layout and accessibility bugs
├── script.js          # JavaScript with logic bugs and vulnerabilities
├── server.js          # Express server with backend vulnerabilities
├── package.json       # Dependencies
├── users.json         # User data storage (created on first run)
└── README.md          # This file
```

## 🌐 Available Pages

- **Home** (`/index.html`) - Main landing page with broken buttons and UI issues
- **Login** (`/login.html`) - Authentication with security vulnerabilities
- **Dashboard** (`/dashboard.html`) - Project dashboard with inconsistent data loading
- **Settings** (`/settings.html`) - Usually shows 404, sometimes shows broken form
- **Analytics** (`/trap.html`) - Redirect loop that traps users

## 🐛 Specific Bug Categories

### Authentication Bugs
- Login accepts empty fields (sometimes)
- No rate limiting on login attempts
- Broken redirect after login (sometimes loops back)
- Insecure password storage (plaintext in JSON file)
- Debug information exposed on login page

### Navigation Bugs
- Settings page returns 404 (90% of the time)
- Analytics page with infinite redirects
- Broken back buttons that lead to trap
- Dead end routes and broken links

### UI/UX Bugs
- Misaligned buttons in hero section
- Broken modal that doesn't close properly
- Poor responsive design on mobile
- Missing hover states on buttons and links
- Poor color contrast for accessibility

### Performance Bugs
- Heavy DOM manipulation in performance test
- Infinite loops in certain functions
- Memory leaks from event listeners
- Blocking operations in backend
- Unoptimized loops causing browser lag

### Security Vulnerabilities
- XSS in search form (no input sanitization)
- Plaintext password storage and comparison
- Admin panel accessible without authentication
- Insecure session management (no secure flags)
- No input validation on forms
- Direct DOM injection without sanitization

## 🎯 AI Agent Testing Goals

This application is designed to test an AI agent's ability to:

1. **Navigate** through the application and discover all pages
2. **Identify** bugs and vulnerabilities across different categories
3. **Prioritize** issues by severity (security > functionality > performance)
4. **Fix** problems systematically with proper solutions
5. **Test** that fixes work correctly
6. **Document** changes made and reasoning

### Expected Agent Behavior

The agent should be able to:
- Traverse all pages and discover navigation issues
- Fill forms and test authentication flows
- Detect security vulnerabilities (XSS, auth bypass, etc.)
- Identify UI/UX issues and performance problems
- Attempt to fix issues or report them appropriately
- Test functionality after making changes

### Key Testing Areas

- **Security Testing**: Login forms, search functionality, admin access
- **Navigation Testing**: All links, buttons, and page transitions
- **UI Testing**: Modal functionality, responsive design, accessibility
- **Performance Testing**: Heavy operations, memory leaks, infinite loops
- **Data Handling**: Form validation, error handling, API responses 