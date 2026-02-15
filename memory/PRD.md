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

## Pending/Backlog

### P1 - Ready for Assets
- [ ] Replace Vault detail page placeholders ("gallery install", "interior view")
- [ ] Replace Studio page portrait placeholder

### P2 - Future Enhancements
- [ ] Replace Exhibitions page image placeholders
- [ ] Replace Viewing Rooms image placeholders
- [ ] Additional content updates as requested

## Project Health
- **Broken**: None
- **Mocked**: 
  - Vault detail page gallery install/interior images (placeholder)
  - Studio page portrait (placeholder)
  - Exhibitions page images (placeholder)
  - Viewing Rooms additional images (placeholder)

## 3rd Party Integrations
None currently.
