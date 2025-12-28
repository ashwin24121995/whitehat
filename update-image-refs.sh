#!/bin/bash

# Update all image references from png/jpg to webp
find client/src -type f \( -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" \) -exec sed -i \
  -e 's/logo-whitehat\.png/logo-whitehat.webp/g' \
  -e 's/badge-18plus\.png/badge-18plus.webp/g' \
  -e 's/badge-fairplay\.png/badge-fairplay.webp/g' \
  -e 's/hero-stadium-bg\.jpg/hero-stadium-bg.webp/g' \
  -e 's/hero-cricket-1\.jpg/hero-cricket-1.webp/g' \
  -e 's/hero-cricket-2\.jpg/hero-cricket-2.webp/g' \
  -e 's/hero-bg-stadium\.jpg/hero-bg-stadium.webp/g' \
  -e 's/about-hero\.jpg/about-hero.webp/g' \
  -e 's/blog-hero\.jpg/blog-hero.webp/g' \
  -e 's/contact-hero\.jpg/contact-hero.webp/g' \
  -e 's/faq-hero\.jpg/faq-hero.webp/g' \
  -e 's/howtoplay-hero\.jpg/howtoplay-hero.webp/g' \
  -e 's/cricket-pitch-texture\.jpg/cricket-pitch-texture.webp/g' \
  {} \;

echo "✅ All image references updated to WebP format"
