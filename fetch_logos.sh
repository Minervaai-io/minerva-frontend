
#!/usr/bin/env bash
set -euo pipefail

# Directory to place logos (adjust as needed)
DEST="./public/logos"
mkdir -p "$DEST"

echo "Saving official logos into: $DEST"

# --- Calendly (manual portal -> download ZIP, then pick SVG) ---
echo "Calendly: opening newsroom page for manual download..."
open "https://calendly.com/newsroom" || xdg-open "https://calendly.com/newsroom" || true

# --- Zapier (brand site with downloads) ---
echo "Zapier: opening brand site for download..."
open "https://brand.zapier.com/" || xdg-open "https://brand.zapier.com/" || true

# --- Pipedrive (press kit) ---
echo "Pipedrive: opening press kit..."
open "https://www.pipedrive.com/en/newsroom/press-kit" || xdg-open "https://www.pipedrive.com/en/newsroom/press-kit" || true

# --- Make.com (press -> logo kit) ---
echo "Make.com: opening press page (Logo kit)..."
open "https://www.make.com/en/press" || xdg-open "https://www.make.com/en/press" || true

# --- WhatsApp (Legal -> Brand Guidelines -> 'Main Logo') ---
echo "WhatsApp: opening Legal page for Brand Guidelines + Main Logo..."
open "https://www.whatsapp.com/legal" || xdg-open "https://www.whatsapp.com/legal" || true

# --- Meta (Meta & Facebook) ---
echo "Meta: opening brand resources pages..."
open "https://www.meta.com/brand/resources/meta/company-brand/" || xdg-open "https://www.meta.com/brand/resources/meta/company-brand/" || true
open "https://www.meta.com/brand/resources/facebook/logo/" || xdg-open "https://www.meta.com/brand/resources/facebook/logo/" || true

# --- Google (Brand Resource Center) ---
echo "Google: opening Brand Resource Center (logos & product icons guidance)..."
open "https://about.google/brand-resource-center/" || xdg-open "https://about.google/brand-resource-center/" || true

echo "--------------------------------------------"
echo "Next steps:"
echo "1) Download each official logo per brand policy."
echo "2) Save as SVG/PNG into $DEST using suggested filenames:"
echo "   meta.svg, google-ads.svg, google-calendar.svg, calendly.svg, hubspot.svg,"
echo "   pipedrive.svg, google-sheets.svg, zapier.svg, make.svg, whatsapp.svg"
echo "3) Commit and deploy."
echo "--------------------------------------------"
