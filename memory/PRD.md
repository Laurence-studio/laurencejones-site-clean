# Laurence Jones Portfolio - Product Requirements Document

## Original Problem Statement
Create a pixel-perfect clone of `https://www.jeffkoons.com`, later pivoted to build a personal portfolio site for an artist named "Laurence Jones".

## User Personas
- **Primary**: Art collectors, gallery curators, and institutions seeking to view and potentially acquire works
- **Secondary**: General public interested in the artist's practice and exhibitions

## Core Requirements

### Site Structure
- Homepage with large hero typography
- Featured Works - Gallery with filtering
- Vault - Dark-themed sales-focused gallery with cinematic entry
- Viewing Rooms - Architectural project showcases
- Studio - Two-column biography with sticky timeline
- Exhibitions - Exhibition history
- CV - Academic/professional history
- Contact - Inquiry form

### Key Features Implemented
1. **Navigation & Branding**: "Laurence Jones" branding throughout
2. **Homepage**: Hero text with cinematic entrance
3. **Featured Works**: Light theme gallery with dropdown filters, detail views with Share module
4. **Vault**: 
   - Cinematic full-screen entry page ("SILVER PALMS VAULT")
   - Dark theme (black background, white text)
   - Gallery with filtering
   - Detail views with Share module and "Enquire about this work" button
5. **Viewing Rooms**: Vertical stacked layout with subheading "Architectural Dialogues"
6. **Studio**: Two-column layout with sticky timeline
7. **CV Page**: Complete academic/professional history
8. **ScrollToTop**: Site-wide scroll reset on navigation
9. **Filter Reset**: Gallery filters reset when navigating back from detail views
10. **Share Module**: Email, WhatsApp, Copy Link functionality

## Technical Architecture

### Frontend (React + Tailwind)
```
/app/frontend/src/
├── App.js                    # Router with ScrollToTop
├── components/
│   ├── Header.jsx            # Nav with inverted prop for dark pages
│   ├── Footer.jsx            # Standard footer
│   ├── BlackFooter.jsx       # Dark theme footer
│   ├── WhiteFooter.jsx       # White theme footer
│   ├── ScrollToTop.jsx       # Navigation scroll fix
│   └── ShareModule.jsx       # Reusable share component
├── hooks/
│   └── useArtworks.js        # API data fetching
└── pages/
    ├── HomePage.jsx
    ├── FeaturedWorksPage.jsx
    ├── VaultPage.jsx         # Includes landing screen
    ├── VaultLandingPage.jsx
    ├── ViewingRoomsPage.jsx
    ├── StudioPage.jsx
    ├── ExhibitionsPage.jsx
    ├── CVPage.jsx
    └── ContactPage.jsx
```

### Backend (FastAPI + MongoDB)
```
/app/backend/
├── server.py                 # API routes
├── seed.py                   # Database seeding
└── .env                      # MONGO_URL, DB_NAME
```

### API Endpoints
- `/api/artworks` - Artwork data
- `/api/exhibitions` - Exhibition history
- `/api/publications` - Publication data
- `/api/biography` - Artist bio
- `/api/shop` - Shop items

### Database Schema (MongoDB)
- **artworks**: `{ title, year, medium, series, image, exhibitions, collection }`
- **exhibitions**: `{ title, venue, location, year }`
- **publications**: `{ title, publisher, year, image }`

## What's Been Implemented

### December 2025
- [x] Added subheading "Architectural Dialogues" to Viewing Rooms page
- [x] Fixed gallery filter reset bug on Featured Works and Vault pages
- [x] Created cinematic Vault landing page with fade-in animations
- [x] Added Share module to artwork detail pages
- [x] Converted Vault to dark theme
- [x] Implemented CV page with user content
- [x] Built Studio page with sticky two-column layout
- [x] Refactored Viewing Rooms to vertical stacked layout
- [x] Fixed site-wide scroll-to-top navigation bug
- [x] Numerous UI/content refinements based on user feedback

### February 2026
- [x] Populated all Viewing Rooms images (main, detail, gallery for both projects)
- [x] Populated all Exhibitions images (5 exhibitions with monographs)
- [x] Completed Vault gallery (7 artworks + Gallery View lightbox)
- [x] Updated Homepage artwork order and biography portrait
- [x] Updated Studio page portrait
- [x] Fixed page-load scrolling issue (pages loading halfway down)
- [x] Fixed thumbnail hover white-line visual bug on Vault/Featured Works
- [x] Fixed Maybourne Hotel image aspect ratio (full install view visible)
- [x] Fixed intermittent black square image loading bug on gallery images
- [x] Fixed "Viewing Rooms" navigation to return to main landing from detail pages
- [x] Fixed "Featured Works" navigation scroll-to-top from detail pages
- [x] Fixed Footer Home link to scroll to top on homepage
- [x] Updated Instagram link to correct profile (laurencejonesartist)
- [x] Vault copy edits: Exhibition History label, removed Private Collection from dropdown
- [x] Vault: Private Collection only shows for sold works (Night Pool, Memories In Sapphire)
- [x] Vault: Added more spacing between Exhibition History and Enquire button
- [x] Studio page: Updated biography and exhibitions/milestones content
- [x] Homepage: Updated biography text with new Laurence Jones copy
- [x] **Fixed homepage scroll flickering bug** - Replaced faulty IntersectionObserver with pure CSS z-index layering for smooth, stable scrolling. Text now appears in front of gallery images but behind biography section.

## Pending/Backlog

### P1 - Upcoming
- [x] PostHog analytics integration (completed with cookie consent)
- [x] Privacy Policy page (created at /privacy)
- [x] Cookie Policy page (created at /cookies)
- [x] Terms & Conditions page (created at /terms)
- [x] Cookie consent banner wiring to control tracking
- [x] Legal links added to all footer variants (Footer, BlackFooter, WhiteFooter)

### P2 - Future Enhancements
- [ ] Refactor `server.py` into separate route files using FastAPI's APIRouter
- [ ] Move hardcoded `artworkMetadata` from `FeaturedWorksPage.jsx` to separate data file
- [ ] Additional content updates as requested by user

## Project Health
- **Broken**: None
- **Mocked**: None - All placeholder content has been replaced

## 3rd Party Integrations
None currently.
