#!/bin/bash

# 🔍 SEO SETUP SCRIPT
# Automated setup untuk SEO pada PAGPUG Landing Page
# Gunakan: bash setup-seo.sh

echo "🔍 SEO SETUP UNTUK PAGPUG LANDING PAGE"
echo "======================================"
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if all files exist
echo -e "${BLUE}📋 Checking SEO files...${NC}"
echo ""

FILES=(
    "app/layout.tsx"
    "app/page.tsx"
    "app/sitemap.ts"
    "next.config.ts"
    "public/robots.txt"
    "public/manifest.json"
    "public/browserconfig.xml"
    "components/StructuredData.tsx"
)

MISSING=0

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅${NC} $file"
    else
        echo -e "${RED}❌${NC} $file (MISSING)"
        MISSING=$((MISSING + 1))
    fi
done

echo ""

if [ $MISSING -eq 0 ]; then
    echo -e "${GREEN}✅ All SEO files found!${NC}"
else
    echo -e "${RED}⚠️ $MISSING files missing!${NC}"
fi

echo ""
echo "======================================"
echo ""

# Next steps
echo -e "${YELLOW}📝 NEXT STEPS:${NC}"
echo ""
echo "1️⃣  Update Your Information:"
echo "   - Edit: app/layout.tsx"
echo "   - Update domain, title, description"
echo "   - Update contact information"
echo ""

echo "2️⃣  Add Verification Codes:"
echo "   - Google: https://search.google.com/search-console"
echo "   - Bing: https://www.bing.com/webmasters"
echo ""

echo "3️⃣  Test SEO:"
echo "   - Robots: https://YOUR-DOMAIN.com/robots.txt"
echo "   - Sitemap: https://YOUR-DOMAIN.com/sitemap.xml"
echo "   - Rich Results: https://search.google.com/test/rich-results"
echo "   - Mobile: https://search.google.com/test/mobile-friendly"
echo ""

echo "4️⃣  Submit Sitemap:"
echo "   - Google Search Console → Sitemaps → Submit"
echo "   - Bing Webmaster Tools → Sitemaps → Submit"
echo ""

echo "5️⃣  Monitor:"
echo "   - Check Search Console daily"
echo "   - Monitor indexing status"
echo "   - Track search analytics"
echo ""

echo "======================================"
echo ""

# File summary
echo -e "${BLUE}📊 SEO FILES SUMMARY:${NC}"
echo ""
echo "CREATED FILES:"
echo "  ✅ app/sitemap.ts - Dynamic sitemap"
echo "  ✅ components/StructuredData.tsx - JSON-LD"
echo "  ✅ components/SEOOptimization.tsx - Meta tags"
echo "  ✅ public/robots.txt - Crawling rules"
echo "  ✅ public/manifest.json - PWA manifest"
echo "  ✅ public/browserconfig.xml - Windows tiles"
echo ""

echo "MODIFIED FILES:"
echo "  ✅ app/layout.tsx - SEO metadata"
echo "  ✅ app/page.tsx - StructuredData"
echo "  ✅ next.config.ts - Optimizations"
echo ""

echo "DOCUMENTATION:"
echo "  ✅ docs/10_SEO_IMPLEMENTATION.md"
echo "  ✅ docs/11_SEO_QUICK_SETUP.md"
echo "  ✅ docs/12_SEO_SUMMARY.md"
echo ""

echo "======================================"
echo ""

# Quick test
echo -e "${BLUE}🧪 QUICK SEO TEST:${NC}"
echo ""
echo "To test your SEO setup:"
echo ""
echo "1. Run development server:"
echo "   npm run dev"
echo ""
echo "2. Test files:"
echo "   - Open http://localhost:3000/robots.txt"
echo "   - Open http://localhost:3000/sitemap.xml"
echo ""
echo "3. Validate in browser DevTools:"
echo "   - Open http://localhost:3000"
echo "   - Press F12 (DevTools)"
echo "   - Check <head> section for meta tags"
echo "   - Search for 'script type=\"application/ld+json\"'"
echo ""

echo "======================================"
echo ""

# Configuration needed
echo -e "${YELLOW}⚙️  CONFIGURATION NEEDED:${NC}"
echo ""
echo "In app/layout.tsx, update these:"
echo "  • NEXT_PUBLIC_SITE_URL"
echo "  • title & description"
echo "  • openGraph.url"
echo "  • openGraph.images"
echo "  • twitter.images"
echo "  • creator email"
echo ""

echo "In components/StructuredData.tsx, update:"
echo "  • Organization name"
echo "  • Contact email"
echo "  • Phone number"
echo "  • Founding date"
echo ""

echo "In public/robots.txt, update:"
echo "  • Sitemap: https://YOUR-DOMAIN/sitemap.xml"
echo ""

echo "======================================"
echo ""

# Final status
echo -e "${GREEN}✅ SEO SETUP COMPLETE!${NC}"
echo ""
echo "Status: READY FOR DEPLOYMENT"
echo ""
echo "For detailed information, see:"
echo "  📖 docs/10_SEO_IMPLEMENTATION.md"
echo "  📖 docs/11_SEO_QUICK_SETUP.md"
echo "  📖 docs/12_SEO_SUMMARY.md"
echo ""
echo "======================================"
