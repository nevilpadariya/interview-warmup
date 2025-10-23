# Quick Start Guide - Interview Warmup

## 🚀 Getting Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Navigate to project directory
cd "/Users/nevilsmac/CMPE 280/interview_test"

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

## 📋 Common Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Testing Locally
```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🎯 How to Use the App

### Step 1: Choose a Category
- Open the app in your browser
- Click on one of three categories:
  - 💼 **General** - Personal questions
  - 💻 **Technical** - Programming questions
  - 🤝 **Behavioral** - Situational questions

### Step 2: Prepare Your Answer
- Read the question carefully
- Click "Start" on the 30-second prep timer (optional)
- Think about your answer structure

### Step 3: Record Your Answer
- Click "Start Recording"
- Allow microphone access when prompted
- Speak your answer clearly
- Click "Stop Recording" when done

### Step 4: Review and Continue
- Listen to your recording using the audio player
- Click "Try Again" to re-record
- Click "Next Question" to practice another question

### Step 5: Track Your Progress
- Click "Progress" in the header
- View your statistics and practice history
- See category breakdown and recent sessions

## 🔧 Troubleshooting

### Microphone Not Working?
1. Check browser permissions (usually top-right of address bar)
2. Ensure you're using HTTPS or localhost
3. Try a different browser
4. Check system microphone settings

### Build Errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use?
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use a different port
npm run dev -- --port 3000
```

### TypeScript Errors?
```bash
# Check for errors
npx tsc --noEmit

# If errors persist, check tsconfig.json
```

## 📱 Testing on Mobile

### Local Network Testing
```bash
# Start dev server with host flag
npm run dev -- --host

# Access from phone using your computer's IP
# Example: http://192.168.1.100:5173
```

### Find Your IP Address
```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

## 🚀 Deployment to Vercel

### One-Time Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login
```

### Deploy
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Via GitHub
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically on every push

## 📊 Project Stats

- **Total Files**: 30+
- **Components**: 11
- **Pages**: 3
- **Custom Hooks**: 2
- **Questions**: 30 (10 per category)
- **Bundle Size**: ~200KB (gzipped ~60KB)

## 🎨 Customization

### Add More Questions
Edit `src/data/questions.ts`:
```typescript
{
  id: 'tech-11',
  category: 'technical',
  text: 'Your new question here',
}
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'google-blue': '#1A73E8', // Change this
}
```

### Modify Timer Duration
Edit `src/components/practice/PrepTimer.tsx`:
```typescript
initialTime: 30, // Change to desired seconds
```

## 📚 Key Files to Know

### Source Code
- `src/App.tsx` - Main app with routing
- `src/pages/` - Page components
- `src/components/` - Reusable components
- `src/hooks/` - Custom hooks
- `src/context/` - Global state
- `src/data/questions.ts` - All questions

### Configuration
- `package.json` - Dependencies
- `vite.config.ts` - Build config
- `tailwind.config.js` - Styling config
- `tsconfig.json` - TypeScript config
- `vercel.json` - Deployment config

### Documentation
- `README.md` - Main documentation
- `FEATURES.md` - Feature list
- `DEPLOYMENT.md` - Deployment guide
- `PROJECT_SUMMARY.md` - Complete summary

## ⚡ Performance Tips

### Development
- Use Chrome DevTools for debugging
- Enable React DevTools extension
- Check Network tab for load times
- Use Lighthouse for performance audit

### Production
- Always run `npm run build` before deploying
- Check bundle size in `dist/` folder
- Test on actual mobile devices
- Verify HTTPS is enabled

## 🆘 Getting Help

### Check Documentation
1. Read `README.md` for overview
2. Check `FEATURES.md` for detailed features
3. See `DEPLOYMENT.md` for deployment help

### Debug Steps
1. Check browser console for errors
2. Verify all dependencies installed
3. Ensure Node.js version is 18+
4. Try clearing browser cache
5. Test in incognito/private mode

### Common Issues

**Issue**: "Module not found"
**Fix**: Run `npm install`

**Issue**: "Port in use"
**Fix**: Kill process or use different port

**Issue**: "Microphone permission denied"
**Fix**: Check browser settings and grant permission

**Issue**: "localStorage not working"
**Fix**: Check browser privacy settings, disable private browsing

## 🎓 Learning Resources

### Technologies Used
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)
- [MDN Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

### Video Tutorials
- Search YouTube for "React TypeScript Tutorial"
- "Vite React Setup"
- "Web Audio API Recording"
- "Tailwind CSS Crash Course"

## ✅ Verification Checklist

Before deployment, verify:
- [ ] `npm install` runs successfully
- [ ] `npm run dev` starts without errors
- [ ] `npm run build` completes successfully
- [ ] All pages load correctly
- [ ] Microphone recording works
- [ ] Audio playback works
- [ ] localStorage persists data
- [ ] Mobile responsive design works
- [ ] No console errors
- [ ] TypeScript compiles without errors

## 🎉 You're Ready!

The app is fully functional and ready to use. Start practicing your interview skills!

**Happy Interviewing! 🚀**

---

For detailed information, see:
- `README.md` - Complete documentation
- `PROJECT_SUMMARY.md` - Full project overview
- `FEATURES.md` - Detailed feature list

