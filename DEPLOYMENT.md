# Deployment Guide

This guide will help you deploy the Interview Warmup application to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (sign up at https://vercel.com)
3. Git installed on your computer

## Steps to Deploy

### 1. Initialize Git Repository

```bash
cd /Users/nevilsmac/CMPE\ 280/interview_test
git init
git add .
git commit -m "Initial commit: Interview Warmup app"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (e.g., "interview-warmup")
3. Don't initialize with README (we already have one)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/interview-warmup.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Vercel

#### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite configuration
5. Click "Deploy"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 5. Verify Deployment

After deployment, Vercel will provide a URL (e.g., https://interview-warmup.vercel.app)

Test the following features:
- ✅ Home page loads correctly
- ✅ All three category cards are visible
- ✅ Clicking a category navigates to practice page
- ✅ Microphone permission request appears
- ✅ Audio recording works
- ✅ Audio playback works
- ✅ Progress tracking saves to localStorage
- ✅ Results page displays correctly
- ✅ Mobile responsive design works

## Configuration

The project is already configured for Vercel deployment:

- `vercel.json` - Handles SPA routing
- `vite.config.ts` - Build configuration
- `package.json` - Dependencies and scripts

## Environment Variables

This project doesn't require any environment variables. All data is stored locally in the browser using localStorage.

## Troubleshooting

### Build Fails

If the build fails, check:
1. All dependencies are installed: `npm install`
2. TypeScript compiles: `npm run build`
3. No linting errors: `npm run lint`

### Microphone Not Working

- Ensure the site is served over HTTPS (Vercel provides this automatically)
- Check browser permissions for microphone access
- Test in different browsers (Chrome, Firefox, Safari)

### Routing Issues

The `vercel.json` file includes a rewrite rule that redirects all routes to `index.html`. This is necessary for React Router to work correctly.

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

The app is already optimized with:
- Code splitting via Vite
- Tailwind CSS purging unused styles
- Production build minification
- Static asset caching

## Support

For issues or questions:
- Check the main README.md
- Review Vite documentation: https://vitejs.dev/
- Review Vercel documentation: https://vercel.com/docs

## License

MIT

