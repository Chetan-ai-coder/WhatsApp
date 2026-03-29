# Deployment Guide - WhatsApp Clone

## Production Deployment Checklist

This project is now configured for production deployment on Vercel. All critical configurations are in place.

### Pre-Deployment

1. **Environment Variables**
   - Copy `.env.example` to `.env.local` for local testing
   - Set required variables in Vercel project settings
   - Do NOT commit `.env` files

2. **Build Verification**
   ```bash
   npm install
   npm run lint
   npm run build
   npm run preview
   ```

3. **Bundle Size Check**
   - Expected: < 250KB gzipped
   - After build, check `dist/` folder size
   - Run: `npm run build` and review console output

### Deployment Steps

1. **Connect to Vercel**
   ```bash
   # Via GitHub (recommended)
   # 1. Push code to GitHub
   # 2. Go to vercel.com and import repository
   # 3. Vercel auto-detects settings from vercel.json
   ```

2. **Manual Deployment**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **Environment Setup**
   - Add environment variables in Vercel dashboard
   - Settings → Environment Variables
   - Redeploy after adding variables

### Configuration Files

- **vercel.json** - Build, caching, and security headers
- **vite.config.js** - Build optimization and output settings
- **.env.example** - Template for environment variables
- **package.json** - Scripts and dependencies

### Performance Optimization

- Code splitting enabled for React Router
- Lazy loading for route components
- Asset caching configured:
  - HTML: 0 max-age (always fresh)
  - Assets: 1 year (immutable)
  - API responses: 1 hour

### Security Headers

Automatically configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Monitoring & Troubleshooting

**Build Fails**
- Check `npm run lint` output
- Verify Node version >= 18.0.0
- Clear `node_modules` and reinstall

**Slow Performance**
- Check bundle size: `npm run build`
- Review Network tab in browser DevTools
- Enable Vercel Analytics in dashboard

**Environment Variable Issues**
- Verify variables in Vercel dashboard
- Redeploy after changing variables
- Check `.env.example` for required vars

### Rollback Procedure

1. Go to Vercel dashboard
2. Select deployment to revert to
3. Click "Promote to Production"

### Local Development

```bash
# Start dev server (with HMR)
npm run dev

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Next Steps

1. Add TypeScript (optional but recommended)
2. Implement real API integration
3. Add error tracking (Sentry)
4. Set up analytics (Google Analytics, PostHog)
5. Configure custom domain
6. Enable Vercel Analytics for monitoring

---

For more info: [Vercel Docs](https://vercel.com/docs)
