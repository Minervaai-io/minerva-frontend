
# Minerva — Official Integration Logos Kit

This kit helps you keep **official** brand assets organized and compliant.
It includes:
- A recommended `/public/logos/` structure
- Direct links to each brand’s **official** asset/guideline page
- A `fetch_logos.sh` script with `curl` placeholders (for sources that allow direct file URLs)
- Quick notes about usage and restrictions

> ⚠️ Many brands (Google, WhatsApp, Meta/FB, HubSpot) require following strict guidelines and/or permission.
> Where direct downloads aren’t permitted, this kit points you to the brand’s official portal. Always follow each brand’s terms.

## Suggested filenames (place inside your project's `public/logos/`)

- meta.svg
- google-ads.svg / .png
- google-calendar.svg / .png
- calendly.svg
- hubspot.svg
- pipedrive.svg
- google-sheets.svg / .png
- zapier.svg
- make.svg
- whatsapp.svg

## How to use

1. Visit each link in `sources/` and download the **official** logo that matches your intended use (web, dark/light bg, mono, etc.).  
2. Save the files into your app at: `public/logos/` using the suggested filenames above.  
3. If a brand provides a **ZIP kit**, download and extract the appropriate SVG/PNG and place it in `public/logos/`.  
4. (Optional) Run `fetch_logos.sh` — it contains `curl` lines for brands that offer direct file URLs. Some lines are placeholders that open the brand portal for manual download.

