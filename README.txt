SKILLEX DIGITAL ACADEMY — WEBSITE FILES
=========================================

FOLDER STRUCTURE
  index.html         -> Main page (open this in VS Code / Live Server)
  css/style.css       -> All styling
  js/script.js        -> Navigation, form, scroll animations
  assets/logo.jpg     -> Your logo (already added)

HOW TO RUN
  1. Open the "skillex-website" folder in VS Code.
  2. Install the "Live Server" extension (if not already installed).
  3. Right-click index.html -> "Open with Live Server".

THINGS TO REPLACE BEFORE GOING LIVE
  1. Gallery & About photos - currently placeholder images from placehold.co.
     Replace the <img src="https://placehold.co/..."> lines in index.html
     (Gallery section and About section) with real photos. Save your real
     photos inside the "assets" folder and point src="assets/your-photo.jpg".

  2. Enquiry form - currently opens WhatsApp with the student's details
     pre-filled (no backend/server needed, works for free forever).
     If you later want the enquiries to also be emailed to you automatically,
     you can connect a free service like formsubmit.co or Google Forms —
     ask your developer to wire that up.

  3. Domain & hosting - once you buy a domain (e.g. skillexdigitalacademy.com),
     update these lines in index.html:
       <link rel="canonical" href="...">
       <meta property="og:url" content="...">

  4. Google Map - already embedded using the address you gave
     (Kooriyad, Malappuram). If the pin looks slightly off, open Google Maps,
     search "Skillex Digital Academy", click Share -> Embed a map, and swap
     the iframe "src" in the Contact section with the new embed link.

SEO NOTES ALREADY DONE
  - Malayalam lang tag (<html lang="ml">) for correct search indexing
  - Meta title, description, keywords, Open Graph tags
  - Schema.org structured data (EducationalOrganization) for Google
  - Semantic HTML headings (h1 -> h2 -> h3) and alt text on every image
  - Mobile responsive down to small phones
  - Lazy-loaded images for faster page speed

CONTACT NUMBERS USED
  Call/WhatsApp: +91 92079 09190 (used in header, hero, floating button,
  enquiry section and footer)
