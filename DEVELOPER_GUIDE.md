# Developer Guide - WhatsApp Clone

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

## Project Structure

```
whatsapp-clone/
├── src/
│   ├── pages/              # Route pages (Login, Chats, NotFound)
│   ├── components/         # Reusable components (ErrorBoundary, etc.)
│   ├── assets/             # Images, videos, icons, SVGs
│   ├── data/               # Mock data
│   ├── design-system/      # Design tokens and theme
│   ├── Home.jsx            # Router setup and layout
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── vite.config.js          # Vite build config
├── vercel.json             # Vercel deployment config
├── tailwind.config.mjs     # Tailwind theme config
├── package.json            # Dependencies and scripts
└── index.html              # HTML entry point
```

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with HMR

# Building
npm run build        # Build for production (includes linting)
npm run preview      # Preview production build locally

# Quality
npm run lint         # Run ESLint (build fails if errors)
npm run lint:fix     # Auto-fix linting issues

# Server
npm run start        # Preview production build (alias for npm run preview)
```

## Styling Guidelines

### Colors

Use the WhatsApp green color for primary actions:

```jsx
// Good
<button className="bg-whatsapp-300 hover:bg-whatsapp-600">
  Send
</button>

// Avoid hardcoding colors
<button className="bg-[#25D366]">Send</button>
```

### Spacing

Use Tailwind spacing scale:

```jsx
// Good
<div className="p-4 mb-6 gap-3">

// Avoid arbitrary values
<div className="p-[16px] mb-[24px]">
```

### Responsive Design

Mobile-first approach:

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">
  <img className="w-6 h-6 md:w-8 md:h-8" />
</div>
```

## Component Best Practices

### Error Handling

All pages are wrapped in `ErrorBoundary`:

```jsx
// In Home.jsx - already configured
<ErrorBoundary>
  <Routes>
    {/* Your routes */}
  </Routes>
</ErrorBoundary>
```

### Lazy Loading Routes

Routes are lazy-loaded for code splitting:

```jsx
// In Home.jsx - already configured
const Login = lazy(() => import('./pages/Login'))
const Chats = lazy(() => import('./pages/Chats'))
```

### Loading States

Always provide loading UI with Suspense:

```jsx
// Already configured in Home.jsx
<Suspense fallback={<LoadingSpinner />}>
  <Routes>{/* */}</Routes>
</Suspense>
```

## ESLint Rules

The project enforces:

- ✅ React best practices
- ✅ React Hooks rules
- ✅ No unused variables
- ✅ No console.log in production (warns only)
- ✅ Safe prop usage

**Fix linting errors:**
```bash
npm run lint:fix
```

## Environment Variables

Create `.env.local` for local development:

```
VITE_APP_NAME=WhatsApp Clone
VITE_API_URL=http://localhost:5000
```

Use in code:
```jsx
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
```

## Deployment

### Local Testing Before Deployment

```bash
# Build production version
npm run build

# Preview production build locally
npm run preview

# Your build will be at http://localhost:4173
```

### Deploy to Vercel

```bash
# Via GitHub (recommended)
# 1. Push code to GitHub
# 2. Import repo in Vercel dashboard
# 3. Vercel auto-configures from vercel.json

# Via CLI
npm install -g vercel
vercel --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Common Tasks

### Adding a New Page

1. Create file: `src/pages/MyPage.jsx`
2. Add lazy import in `Home.jsx`:
   ```jsx
   const MyPage = lazy(() => import('./pages/MyPage'))
   ```
3. Add route:
   ```jsx
   <Route path="/mypage" element={<MyPage />} />
   ```

### Adding a New Component

1. Create file: `src/components/MyComponent.jsx`
2. Import in your page:
   ```jsx
   import MyComponent from '../components/MyComponent'
   ```

### Debugging

Use browser DevTools:

1. Open DevTools (F12)
2. Go to Console tab
3. Look for errors
4. Check Network tab for failed requests
5. Use React Developer Tools extension

### Updating Styles

1. Edit `tailwind.config.mjs` for design tokens
2. Or use Tailwind classes directly in JSX
3. Always check responsive breakpoints

## Production Considerations

### Performance

- Bundle size should be < 250KB gzipped
- Check with: `npm run build && du -sh dist/`
- Lazy load routes for splitting
- Cache HTTP headers configured in `vercel.json`

### Security

- Never commit `.env` files
- Use HTTPS in production
- Security headers configured automatically
- Input validation required for forms

### Monitoring

After deployment:

1. Enable Vercel Analytics
2. Check Core Web Vitals
3. Monitor error rates
4. Track user behavior

## Tools & Libraries

- **React 19** - UI framework
- **React Router 7** - Routing
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **Lucide React** - Icons
- **ESLint** - Code quality

## Getting Help

1. **Build errors**: Check console output and run `npm run lint`
2. **Runtime errors**: Check browser console
3. **Styling issues**: Verify Tailwind classes and breakpoints
4. **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## Code Examples

### Using Environment Variables

```jsx
// In any component
function MyComponent() {
  const apiUrl = import.meta.env.VITE_API_URL
  
  return <div>API: {apiUrl}</div>
}
```

### Navigation

```jsx
import { useNavigate } from 'react-router-dom'

function MyButton() {
  const navigate = useNavigate()
  
  return (
    <button onClick={() => navigate('/chats')}>
      Go to Chats
    </button>
  )
}
```

### Conditional Rendering

```jsx
function MyComponent({ isLoggedIn }) {
  return isLoggedIn ? (
    <ChatsList />
  ) : (
    <LoginForm />
  )
}
```

## Performance Tips

1. Use lazy loading for large components
2. Optimize images before committing
3. Keep bundle small with tree-shaking
4. Use React DevTools Profiler
5. Check Lighthouse scores regularly

---

**Ready to start developing?** Run `npm run dev` and open http://localhost:5173
