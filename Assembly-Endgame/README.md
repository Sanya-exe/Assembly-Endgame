# Assembly-Endgame

A word puzzle game built with React and Vite.

## 🚀 Technologies

- React 19.1.1
- Vite 7.1.7
- Modern ES6+ JavaScript

## 📦 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

This project is configured for easy deployment to Netlify.

### Deployment Files:
- `netlify.toml` - Netlify configuration
- `public/_redirects` - SPA routing support

### Quick Deploy Steps:
1. Push code to GitHub
2. Connect to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎮 Game Features

- Word puzzle mechanics
- Multiple language support (via language.js)
- Custom word dictionary (via words.js)
- Utility functions (via utilis.js)

## 📄 Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── main.jsx         # Application entry point
├── index.css        # Global styles
├── language.js      # Language configuration
├── words.js         # Word dictionary
└── utilis.js        # Utility functions
```
