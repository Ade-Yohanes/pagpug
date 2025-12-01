# 🚀 Setup & Testing Guide

## 📋 Prasyarat

- Node.js 18+ installed
- npm atau yarn package manager

## 🔧 Installation & Running

### 1. Install Dependencies (jika belum)
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Output akan menunjukkan:
```
> web-pagpug@0.1.0 dev
> next dev

  ▲ Next.js 16.0.5
  - Local:        http://localhost:3000
```

### 3. Buka di Browser
```
http://localhost:3000
```

---

## 📱 Testing Responsive Design

### Method 1: Browser DevTools (Recommended)

#### Chrome/Edge/Firefox:
1. **Buka DevTools:**
   - Windows/Linux: `F12` atau `Ctrl+Shift+I`
   - Mac: `Cmd+Option+I`

2. **Toggle Device Toolbar:**
   - Windows/Linux: `Ctrl+Shift+M`
   - Mac: `Cmd+Shift+M`

3. **Test Devices:**
   - Select "iPhone 12" → 390px width
   - Select "iPad" → 768px width
   - Select "Desktop" → 1920px width

#### Firefox DevTools:
1. Open DevTools: `F12`
2. Click "Responsive Design Mode" icon (Ctrl+Shift+M)
3. Select various devices from dropdown

---

## ✅ Responsive Checklist

### Mobile (< 640px)
- [ ] Hamburger menu visible
- [ ] Logo text hidden (only icon shown)
- [ ] Hero section single column
- [ ] Buttons full-width
- [ ] Features grid 1 column
- [ ] Pricing cards full-width
- [ ] Footer 2 columns
- [ ] No horizontal scrollbar

### Tablet (640px - 1024px)
- [ ] Logo text visible
- [ ] Hero section still single column (xs) or 2-column (md+)
- [ ] Buttons side-by-side option
- [ ] Features grid 2-3 columns
- [ ] Pricing grid 2 columns
- [ ] Footer grid proper layout
- [ ] Navigation menu starts showing

### Desktop (> 1024px)
- [ ] Full navigation menu visible
- [ ] Sign In button visible
- [ ] Hero section 2-column layout
- [ ] Features grid 3 columns
- [ ] Pricing grid 3 columns with center scaling
- [ ] Footer 4 columns
- [ ] All spacing optimal
- [ ] Hover effects working

---

## 🧪 Feature Testing

### Navbar
- [x] Mobile menu toggle works
- [x] Menu closes when clicking links
- [x] Logo responsive
- [x] Buttons responsive
- [x] No overflow on mobile

### Hero Section
- [x] Heading responsive size
- [x] Buttons responsive layout
- [x] Stats grid responsive
- [x] Visual box responsive
- [x] Proper spacing on all devices

### Features Section
- [x] Grid responsive (1→2→3 columns)
- [x] Cards have hover effect
- [x] Icon scaling on hover
- [x] Text readable on all sizes

### Pricing Section
- [x] Grid responsive (1→2→3 columns)
- [x] Popular plan scaling responsive
- [x] Checkmarks aligned properly
- [x] Buttons responsive

### CTA Section
- [x] Heading responsive
- [x] Buttons responsive layout
- [x] Text centered properly
- [x] Spacing consistent

### Footer
- [x] Layout responsive
- [x] Links properly organized
- [x] Social links responsive
- [x] Copyright text readable

---

## 🎨 Browser Support Testing

Test di multiple browsers:

```
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
```

### Quick Cross-Browser Test:
1. Chrome DevTools: Toggle device mode
2. Firefox DevTools: Responsive mode
3. Safari (Mac): Develop → Enter Responsive Design Mode
4. Edge: F12 → Device emulation

---

## 🔍 Performance Testing

### Use Google Lighthouse:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Click "Generate report"
4. Check:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Target Scores:
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

---

## 📊 Specific Device Testing

### Test Orientations:
- [ ] Portrait mode (mobile)
- [ ] Landscape mode (tablet)
- [ ] Both orientations work correctly

### Test Network:
- [ ] Fast 3G speed
- [ ] Slow 4G speed
- [ ] Fast WiFi

---

## 🐛 Troubleshooting

### Issue: Horizontal Scrollbar Appears
**Solution:** Check padding/margin with DevTools, adjust breakpoints

### Issue: Text Too Small on Mobile
**Solution:** Typography sizes are relative to viewport, should adjust automatically

### Issue: Menu Not Toggling
**Solution:** Ensure Navbar.tsx has `'use client'` at top

### Issue: Layout Looks Wrong
**Solution:** Clear .next folder and rebuild:
```bash
rm -rf .next
npm run dev
```

---

## 🚀 Production Build

### Build for Production:
```bash
npm run build
```

### Start Production Server:
```bash
npm start
```

### Verify Build:
- Check for console errors
- Test all responsive breakpoints
- Verify all links work
- Check form submissions

---

## 📈 Analytics to Monitor

For production deployment, consider:

```
- Page load time (target: < 3s)
- Mobile usability
- Core Web Vitals:
  - Largest Contentful Paint (LCP): < 2.5s
  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1
```

---

## 🔗 Useful Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Next.js Optimization](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

## 💾 Project Structure Reminder

```
web-pagpug/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles + mobile optimizations
├── components/             # Reusable React components
│   ├── Navbar.tsx         # Navigation with mobile menu
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── Pricing.tsx        # Pricing cards
│   ├── CTA.tsx            # Call-to-action
│   └── Footer.tsx         # Footer
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── RESPONSIVE_DESIGN.md   # Responsive design documentation
```

---

## ✨ Next Steps

1. **Customize Content**: Update text, colors, links
2. **Add Images**: Replace placeholder emojis with real images
3. **Connect Backend**: Add API calls for dynamic content
4. **Analytics**: Integrate GA4 or similar
5. **SEO**: Add structured data with JSON-LD
6. **Deploy**: Push to Vercel, Netlify, or your server

---

**Happy Testing! 🎉**

Jika ada pertanyaan, refer ke file RESPONSIVE_DESIGN.md untuk detail teknis lebih lanjut.
