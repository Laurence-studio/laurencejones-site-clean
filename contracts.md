# Jeff Koons Website - Backend Contracts

## A) API Contracts

### Artworks API
```
GET /api/artworks
Response: { artworks: Artwork[] }

GET /api/artworks/:id
Response: Artwork

POST /api/artworks (admin)
Body: { title, image, year, series, medium }
Response: Artwork

Artwork Schema:
{
  id: string,
  title: string,
  image: string,
  year: string,
  series: string,
  medium: string,
  created_at: datetime
}
```

### Exhibitions API
```
GET /api/exhibitions
Response: { exhibitions: Exhibition[] }

GET /api/exhibitions?status=Current|Past
Response: { exhibitions: Exhibition[] }

Exhibition Schema:
{
  id: string,
  title: string,
  venue: string,
  date: string,
  status: "Current" | "Past"
}
```

### Biography API
```
GET /api/biography
Response: Biography

Biography Schema:
{
  id: string,
  name: string,
  portrait: string,
  short_bio: string,
  birth_info: string,
  exhibitions: string,
  recent_exhibitions: string,
  famous_works: string,
  awards: string
}
```

### Bibliography API
```
GET /api/bibliography
Response: { bibliography: BibliographyItem[] }

BibliographyItem Schema:
{
  id: string,
  year: string,
  title: string,
  publisher: string,
  authors: string
}
```

### Shop API
```
GET /api/shop
Response: { items: ShopItem[] }

ShopItem Schema:
{
  id: string,
  name: string,
  price: number,
  image: string,
  category: string
}
```

## B) Mock Data to Replace

Located in `/app/frontend/src/data/mockData.js`:
- `artworks` array → GET /api/artworks
- `exhibitions` array → GET /api/exhibitions
- `artistBio` object → GET /api/biography
- `bibliographyData` (in BibliographyPage) → GET /api/bibliography
- `shopItems` (in ShopPage) → GET /api/shop

## C) Backend Implementation Plan

1. Create MongoDB models:
   - Artwork model
   - Exhibition model
   - Biography model
   - BibliographyItem model
   - ShopItem model

2. Create API routes:
   - /api/artworks (GET, POST)
   - /api/exhibitions (GET)
   - /api/biography (GET)
   - /api/bibliography (GET)
   - /api/shop (GET)

3. Seed database with initial data from mock

## D) Frontend-Backend Integration

Replace in each component:
1. `HomePage.jsx` → Already uses components that will fetch data
2. `ArtworkGallery.jsx` → Fetch from /api/artworks
3. `ArtworkPage.jsx` → Fetch from /api/artworks
4. `ExhibitionsPage.jsx` → Fetch from /api/exhibitions
5. `BiographyPage.jsx` → Fetch from /api/biography
6. `BibliographyPage.jsx` → Fetch from /api/bibliography
7. `ShopPage.jsx` → Fetch from /api/shop

Integration approach:
- Create custom hooks for data fetching
- Add loading states
- Handle errors gracefully
