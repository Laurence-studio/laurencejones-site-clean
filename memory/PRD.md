# Laurence Jones Portfolio - Product Requirements Document

## Original Problem Statement
Create a pixel-perfect clone of `https://www.jeffkoons.com`, then transform it into a personal portfolio site for "Laurence Jones" - an artist portfolio website.

## User Personas
- **Primary:** Art collectors, gallery owners, curators seeking artwork information and sales inquiries
- **Secondary:** General art enthusiasts and media professionals

## Core Requirements
- Navigation: `FEATURED WORKS`, `VIEWING ROOMS`, `VAULT`, `STUDIO`, `EXHIBITIONS`, `CONTACT`
- Top-left branding: "Laurence Jones" text
- Homepage: Large bold "LAURENCE JONES" hero text with scrolling images
- Dual footer system: Homepage (white) and all other pages (black)
- Copyright: "© 2026 Laurence Jones. All rights reserved."
- Featured Works page: Dropdown filter, grid/full view toggle, artwork detail pages
- Vault page: Sales-focused detail view with ENQUIRE button, gallery install + interior view mockups
- Contact page: Rectangular form fields with studio contact information

## Technical Stack
- **Frontend:** React, React Router, Tailwind CSS, Shadcn/UI, Axios
- **Backend:** FastAPI (Python), MongoDB (motor async driver)
- **Architecture:** Decoupled full-stack SPA

## Database Schema
- **artworks:** `{ title, year, medium, series, image, exhibitions }`
- **exhibitions:** `{ title, venue, location, year }`
- **publications:** `{ title, publisher, year, image }`

---

## Completed Features (as of December 2025)

### Session 1 - Initial Build
- Jeff Koons clone → Laurence Jones portfolio migration
- Updated navigation and footers across the site
- Implemented custom `Featured Works` page with filters and multiple views
- Implemented custom `Vault` page with sales-oriented detail view
- Adjusted homepage hero text layout and z-index
- Made homepage images non-clickable
- Updated `Contact` page form styling and information

### Session 2 - Bug Fixes & Studio Page (December 2025)
- **Fixed:** Navigation scroll bug - pages now scroll to top after navigation from footer
  - Added `ScrollToTop` component using React Router's `useLocation` hook
- **Fixed:** Vault page layout - Gallery Install and Interior View sections now display side-by-side
  - Left: Dark gallery setting with framed artwork
  - Right: Light interior room mockup with artwork on wall
- **New:** Studio page redesigned with two-column scrolling layout
  - Left: Biography, artist statement, contact info (scrolls normally)
  - Right: Timeline of exhibitions & milestones (sticky on desktop)
  - Matches reference site: laurence-showcase.preview.emergentagent.com/studio

---

## P0 - Completed
- [x] Navigation scroll-to-top fix
- [x] Vault page side-by-side layout for gallery/interior views

## P1 - Upcoming
- [ ] Integrate user-provided assets for gallery install/interior view sections on Vault page (pending user assets)

## P2 - Future/Backlog
- [ ] Viewing Rooms page - may need unique content/functionality
- [ ] Studio page - may need unique content/functionality
- [ ] Custom artwork images for Laurence Jones (currently using placeholder images)

---

## Key Files Reference
- `/app/frontend/src/App.js` - Main router with ScrollToTop component
- `/app/frontend/src/components/ScrollToTop.jsx` - Scroll-to-top navigation fix
- `/app/frontend/src/pages/VaultPage.jsx` - Vault gallery with side-by-side layout
- `/app/frontend/src/pages/FeaturedWorksPage.jsx` - Featured works gallery
- `/app/frontend/src/components/BlackFooter.jsx` - Footer for non-homepage pages
- `/app/frontend/src/components/Footer.jsx` - Homepage footer
- `/app/frontend/src/pages/HomePage.jsx` - Hero section with large typography

## API Endpoints
- `GET /api/artworks` - Fetch all artworks
- `GET /api/exhibitions` - Fetch exhibitions
- `GET /api/publications` - Fetch publications
- `GET /api/biography` - Fetch biography
- `GET /api/shop` - Fetch shop items
