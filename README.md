# Interview Warmup

A full-stack Interview Warmup web application built with React, TypeScript, Vite, and Tailwind CSS. Practice your interview skills with audio recording and personalized feedback.

## Features

- 🎯 Multiple interview categories (General, Technical, Behavioral)
- 🎙️ Audio recording with Web Audio API
- ⏱️ Preparation timer with countdown
- 📊 Progress tracking and statistics
- 💾 Local storage persistence
- 📱 Responsive design
- ♿ Accessible UI

## Tech Stack

- React 18 with TypeScript
- Vite as build tool
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons
- Web Audio API for recording

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository to Vercel and it will automatically deploy.

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── layout/      # Layout components (Header)
│   ├── home/        # Home page components
│   └── practice/    # Practice page components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context for state management
├── types/           # TypeScript type definitions
├── data/            # Static data (questions)
├── App.tsx          # Main app component with routing
└── main.tsx         # Entry point
```

## License

MIT

