# Responsive Design Implementation

## 📱 Breakpoints Tailwind CSS

Proyek ini menggunakan breakpoints Tailwind CSS standar untuk responsive design:

- **Mobile (xs)**: < 375px
- **Mobile (sm)**: ≥ 640px
- **Tablet (md)**: ≥ 768px
- **Tablet/Desktop (lg)**: ≥ 1024px
- **Desktop (xl)**: ≥ 1280px

## 🎯 Component Responsiveness

### Navbar
- **Mobile**: Logo teks disembunyikan, tombol CTA ringkas, mobile menu toggle
- **Tablet (md)**: Logo teks muncul
- **Desktop (lg)**: Menu desktop lengkap, Sign In button visible, desktop navigation

### Hero Section
- **Mobile**: 
  - Padding terbatas (px-3)
  - Typography: h1 text-3xl
  - Single column layout
  - Buttons full-width
  - Visual box smaller (h-64)

- **Tablet (md)**:
  - h1 text-5xl
  - Buttons side-by-side (xs:flex-row)
  - Visual box h-80

- **Desktop (lg)**:
  - Grid 2 kolom
  - h1 text-6xl
  - Full height visual box

### Features Section
- **Mobile**: Grid 1 kolom, padding compact
- **Tablet (sm)**: Grid 2 kolom
- **Desktop (lg)**: Grid 3 kolom

### Pricing Section
- **Mobile**: Grid 1 kolom, no scaling
- **Tablet (sm)**: Grid 2 kolom, popular plan scaled 105%
- **Desktop (lg)**: Grid 3 kolom, proper spacing

### Footer
- **Mobile**: Grid 2 kolom (Brand full-width), compact spacing
- **Tablet (sm)**: 2x2 grid
- **Desktop (md)**: 4 kolom, full layout

## 🔍 Key Responsive Techniques

### 1. Flexible Padding & Margins
```
px-3 sm:px-4 md:px-6 lg:px-8
py-12 sm:py-16 md:py-20
```

### 2. Responsive Typography
```
text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl
```

### 3. Flexible Layouts
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
flex flex-col xs:flex-row
```

### 4. Conditional Display
```
hidden xs:inline        // Hide on mobile, show xs+
hidden md:block         // Hide on mobile/tablet, show desktop
hidden lg:flex          // Hide on mobile/tablet, show lg+
```

### 5. Container Queries
```
max-w-7xl              // Max width constraint
w-full xs:w-auto       // Full width on mobile, auto on xs+
```

## 📊 Mobile-First Approach

Semua styling dimulai dari mobile sebagai base, kemudian di-enhance dengan breakpoints yang lebih besar:

```tsx
// Mobile base: text-2xl
// Tablet (sm): sm:text-3xl
// Tablet (md): md:text-4xl
// Desktop (lg): lg:text-5xl
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
```

## ✨ Additional Mobile Optimizations

1. **Touch-friendly sizing**:
   - Minimum button height: 44px (accessible)
   - Proper tap target sizes
   - Reduced tap highlight color

2. **Font size**:
   - Base 16px (prevents zoom on input focus)
   - Relative sizing for scaling

3. **Scrollbar styling**:
   - Custom scrollbar untuk desktop
   - Smooth scroll behavior
   - Accessible scroll behavior

4. **Viewport optimization**:
   - Font smoothing (-webkit-font-smoothing)
   - Antialiased text rendering

## 🧪 Testing Responsive Design

### Desktop Browser DevTools
1. Open Chrome DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test berbagai device presets:
   - iPhone 12 (390px)
   - iPad (768px)
   - Desktop (1920px)

### Screen Sizes to Test
- **Mobile**: 375px, 390px, 420px
- **Tablet**: 640px, 768px, 820px
- **Desktop**: 1024px, 1280px, 1920px

## 🎨 Color & Design Consistency

Semua komponen menggunakan:
- **Primary**: Blue (600, 700)
- **Secondary**: Purple (600, 700)
- **Neutral**: Gray scale (50-900)
- **Gradient**: Linear to-r (right) dan to-br (bottom-right)

## 📱 Mobile Menu Implementation

Navbar menggunakan React state untuk mobile menu:

```tsx
'use client';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);
// Mobile menu dengan toggle button
```

## 🚀 Performance Tips

1. **Lazy Loading**: Gunakan Next.js Image component
2. **Code Splitting**: Komponen terpisah untuk tree-shaking
3. **CSS Optimization**: Tailwind CSS menghasilkan minimal CSS
4. **Font Optimization**: Geist fonts pre-loaded

## ✅ Checklist Responsive Design

- ✅ Mobile (< 640px) fully responsive
- ✅ Tablet (640px - 1024px) optimized layout
- ✅ Desktop (> 1024px) full featured
- ✅ Touch-friendly buttons & links
- ✅ Flexible typography
- ✅ Optimized images
- ✅ Mobile navigation menu
- ✅ Proper spacing & padding
- ✅ No horizontal scrolling
- ✅ Readable text sizes

## 🔧 Development Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

Akses di `http://localhost:3000` dan test responsiveness dengan browser DevTools.
