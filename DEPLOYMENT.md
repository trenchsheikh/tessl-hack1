# Deployment Guide - TaskFlow to Vercel

This guide will help you deploy the TaskFlow application to Vercel.

## 🚀 Quick Deploy

### Option 1: Deploy from GitHub (Recommended)

1. **Fork the repository** to your GitHub account
2. **Go to [Vercel](https://vercel.com)** and sign in
3. **Click "New Project"**
4. **Import your forked repository**
5. **Configure the project:**
   - Framework Preset: `Node.js`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `./` (default)
   - Install Command: `npm install`
6. **Click "Deploy"**

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy from your local directory:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? `[Your account]`
   - Link to existing project? `N`
   - Project name: `taskflow-app` (or your preferred name)
   - In which directory is your code located? `./` (default)
   - Want to override the settings? `N`

## ⚙️ Configuration

### Environment Variables (Optional)

You can set these in your Vercel dashboard:

- `NODE_ENV`: `production`
- `PORT`: `3000` (Vercel will override this)

### Custom Domain (Optional)

1. **Go to your Vercel dashboard**
2. **Select your project**
3. **Go to "Settings" → "Domains"**
4. **Add your custom domain**

## 🔧 Project Structure for Vercel

```
taskflow-app/
├── api/
│   └── index.js          # Vercel API route
├── index.html            # Home page
├── login.html            # Login page
├── dashboard.html        # Dashboard page
├── settings.html         # Settings page
├── trap.html            # Analytics page
├── style.css            # Styles
├── script.js            # Frontend JavaScript
├── server.js            # Main server file
├── package.json         # Dependencies
├── vercel.json          # Vercel configuration
└── README.md            # Documentation
```

## 🌐 Access Your Deployed App

After deployment, you'll get a URL like:
- `https://your-project-name.vercel.app`
- `https://your-custom-domain.com` (if configured)

## 🐛 Testing the Deployed App

1. **Visit the home page** - Test UI bugs
2. **Try the login** - Test security vulnerabilities
3. **Navigate to dashboard** - Test broken functionality
4. **Check settings page** - Test 404 errors
5. **Visit analytics** - Test redirect loops

## 🔍 API Endpoints

Your deployed app will have these API endpoints:

- `POST /api/login` - Login (insecure)
- `POST /api/register` - Registration (insecure)
- `GET /api/users` - Get users (no auth required)
- `POST /api/search` - Search (XSS vulnerable)
- `GET /api/status` - Status (sometimes fails)
- `GET /api/heavy-computation` - Performance test
- `GET /api/admin` - Admin panel (bypass possible)

## 📝 Notes

- **All bugs and vulnerabilities are preserved** in the deployed version
- **The app appears as a legitimate project management tool**
- **Perfect for AI agent testing** in a production-like environment
- **HTTPS is automatically enabled** by Vercel
- **Serverless functions** handle API requests

## 🆘 Troubleshooting

### Common Issues:

1. **Build fails**: Check that all dependencies are in `package.json`
2. **API not working**: Ensure `api/index.js` exists and exports the app
3. **Static files not loading**: Verify `vercel.json` configuration
4. **Session issues**: Vercel uses serverless functions, sessions may not persist

### Debug Commands:

```bash
# Test locally with Vercel
vercel dev

# Check deployment status
vercel ls

# View deployment logs
vercel logs
```

## 🎯 Ready for AI Testing

Your deployed TaskFlow application is now ready for AI agent testing with:

- ✅ All intentional bugs preserved
- ✅ Security vulnerabilities intact
- ✅ Performance issues maintained
- ✅ UI/UX problems present
- ✅ Professional appearance maintained 