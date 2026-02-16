from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'jeff_koons_db')]

# Create the main app without a prefix
app = FastAPI(title="Jeff Koons Website API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ==================== MODELS ====================

class Artwork(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    image: str
    year: str
    series: str
    medium: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ArtworkCreate(BaseModel):
    title: str
    image: str
    year: str
    series: str
    medium: str

class FeaturedWork(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    gallery_image: str  # On-wall view for grid
    detail_image: str   # Full artwork for click-through
    year: str
    dimensions: str
    medium: str
    series: Optional[str] = "Featured"
    exhibitions: Optional[List[str]] = []
    collection: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class FeaturedWorkCreate(BaseModel):
    title: str
    gallery_image: str
    detail_image: str
    year: str
    dimensions: str
    medium: str
    series: Optional[str] = "Featured"

class Exhibition(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    venue: str
    date: str
    status: str  # "Current" or "Past"

class Biography(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    portrait: str
    short_bio: str
    birth_info: str
    exhibitions: str
    recent_exhibitions: str
    famous_works: str
    awards: str

class BibliographyItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    year: str
    title: str
    publisher: str
    authors: str

class ShopItem(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    price: float
    image: str
    category: str

# ==================== ROUTES ====================

@api_router.get("/")
async def root():
    return {"message": "Jeff Koons Website API"}

# Artworks Routes
@api_router.get("/artworks", response_model=List[Artwork])
async def get_artworks():
    artworks = await db.artworks.find().to_list(100)
    return [Artwork(**artwork) for artwork in artworks]

@api_router.get("/artworks/{artwork_id}", response_model=Artwork)
async def get_artwork(artwork_id: str):
    artwork = await db.artworks.find_one({"id": artwork_id})
    if not artwork:
        raise HTTPException(status_code=404, detail="Artwork not found")
    return Artwork(**artwork)

@api_router.post("/artworks", response_model=Artwork)
async def create_artwork(artwork: ArtworkCreate):
    artwork_obj = Artwork(**artwork.dict())
    await db.artworks.insert_one(artwork_obj.dict())
    return artwork_obj

class ArtworkImageUpdate(BaseModel):
    image: str

@api_router.patch("/artworks/{artwork_id}/image")
async def update_artwork_image(artwork_id: str, update: ArtworkImageUpdate):
    result = await db.artworks.update_one(
        {"id": artwork_id},
        {"$set": {"image": update.image}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Artwork not found")
    return {"message": "Image updated successfully"}

@api_router.patch("/artworks/by-index/{index}/image")
async def update_artwork_image_by_index(index: int, update: ArtworkImageUpdate):
    artworks = await db.artworks.find().to_list(100)
    if index < 0 or index >= len(artworks):
        raise HTTPException(status_code=404, detail="Artwork index out of range")
    artwork_id = artworks[index]["id"]
    result = await db.artworks.update_one(
        {"id": artwork_id},
        {"$set": {"image": update.image}}
    )
    return {"message": f"Image at index {index} updated successfully", "artwork_id": artwork_id}

# Featured Works Routes
@api_router.get("/featured-works", response_model=List[FeaturedWork])
async def get_featured_works():
    works = await db.featured_works.find().to_list(100)
    return [FeaturedWork(**work) for work in works]

@api_router.get("/featured-works/{work_id}", response_model=FeaturedWork)
async def get_featured_work(work_id: str):
    work = await db.featured_works.find_one({"id": work_id})
    if not work:
        raise HTTPException(status_code=404, detail="Featured work not found")
    return FeaturedWork(**work)

@api_router.post("/featured-works", response_model=FeaturedWork)
async def create_featured_work(work: FeaturedWorkCreate):
    work_obj = FeaturedWork(**work.dict())
    await db.featured_works.insert_one(work_obj.dict())
    return work_obj

@api_router.delete("/featured-works")
async def delete_all_featured_works():
    result = await db.featured_works.delete_many({})
    return {"message": f"Deleted {result.deleted_count} featured works"}

class FeaturedWorkGalleryImageUpdate(BaseModel):
    gallery_image: str

@api_router.patch("/featured-works/{work_id}/gallery-image")
async def update_featured_work_gallery_image(work_id: str, update: FeaturedWorkGalleryImageUpdate):
    result = await db.featured_works.update_one(
        {"id": work_id},
        {"$set": {"gallery_image": update.gallery_image}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Featured work not found")
    return {"message": "Gallery image updated successfully"}

class FeaturedWorkTitleUpdate(BaseModel):
    title: str

@api_router.patch("/featured-works/{work_id}/title")
async def update_featured_work_title(work_id: str, update: FeaturedWorkTitleUpdate):
    result = await db.featured_works.update_one(
        {"id": work_id},
        {"$set": {"title": update.title}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Featured work not found")
    return {"message": "Title updated successfully"}

# Exhibitions Routes
@api_router.get("/exhibitions", response_model=List[Exhibition])
async def get_exhibitions(status: Optional[str] = None):
    query = {}
    if status:
        query["status"] = status
    exhibitions = await db.exhibitions.find(query).to_list(100)
    return [Exhibition(**exhibition) for exhibition in exhibitions]

# Biography Route
@api_router.get("/biography", response_model=Biography)
async def get_biography():
    biography = await db.biography.find_one()
    if not biography:
        raise HTTPException(status_code=404, detail="Biography not found")
    return Biography(**biography)

class BiographyPortraitUpdate(BaseModel):
    portrait: str

@api_router.patch("/biography/portrait")
async def update_biography_portrait(update: BiographyPortraitUpdate):
    result = await db.biography.update_one(
        {},
        {"$set": {"portrait": update.portrait}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Biography not found")
    return {"message": "Portrait updated successfully"}

# Bibliography Routes
@api_router.get("/bibliography", response_model=List[BibliographyItem])
async def get_bibliography():
    items = await db.bibliography.find().to_list(100)
    return [BibliographyItem(**item) for item in items]

# Shop Routes
@api_router.get("/shop", response_model=List[ShopItem])
async def get_shop_items():
    items = await db.shop.find().to_list(100)
    return [ShopItem(**item) for item in items]

# Seed Database Route (for initial data)
@api_router.post("/seed")
async def seed_database():
    # Check if data already exists
    existing_artworks = await db.artworks.count_documents({})
    if existing_artworks > 0:
        return {"message": "Database already seeded", "artworks_count": existing_artworks}
    
    # Seed Artworks
    artworks_data = [
        {
            "id": str(uuid.uuid4()),
            "title": "Balloon Dog (Blue)",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/c66d2988-b577-41af-9028-c96d13d91f7e/balloondog_blue+%281%29.jpg",
            "year": "1994-2000",
            "series": "Celebration",
            "medium": "Mirror-polished stainless steel with transparent color coating",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "One Ball Total Equilibrium Tank",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/f1b5a2c0-10e7-4adc-b2ec-70d4dd22d9f6/aqua_basketball.jpg",
            "year": "1985",
            "series": "Equilibrium",
            "medium": "Glass, steel, sodium chloride reagent, distilled water, basketball",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Inflatable Flower and Bunny",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/e1fa8503-ad2a-4ce7-8b02-39d040881766/inflatableflowerandbunny.jpg",
            "year": "1979",
            "series": "Inflatables",
            "medium": "Vinyl, mirrors",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Tulips",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/534dfca8-6373-4514-8349-c25f05205f8a/tulips.jpg",
            "year": "1995-2004",
            "series": "Celebration",
            "medium": "Mirror-polished stainless steel with transparent color coating",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Lips",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/082f21fd-d2d7-4814-8f8a-29be07d88d06/lips.jpg",
            "year": "2000",
            "series": "Easyfun-Ethereal",
            "medium": "Oil on canvas",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Balloon Flower (Yellow)",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/361cb81b-6835-4ec2-ae53-b3dbd85464de/balloonflower_yelllow.jpg",
            "year": "1995-2000",
            "series": "Celebration",
            "medium": "Mirror-polished stainless steel with transparent color coating",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Rabbit",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/435ecc2f-2331-4826-94cb-1caecf54afa0/JK_Rabbit.jpg",
            "year": "1986",
            "series": "Statuary",
            "medium": "Stainless steel",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Metallic Venus",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/2c33616e-5981-4fdb-a7be-92255b3cbacc/MetallicVenus_MG_0517.jpg",
            "year": "2010-2012",
            "series": "Antiquity",
            "medium": "Mirror-polished stainless steel with transparent color coating",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Balloon Swan (Magenta)",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/2dc62853-ebe1-486f-b257-a99b56817abc/balloonswan_mag.jpg",
            "year": "2004-2011",
            "series": "Celebration",
            "medium": "Mirror-polished stainless steel with transparent color coating",
            "created_at": datetime.utcnow()
        },
        {
            "id": str(uuid.uuid4()),
            "title": "Gazing Ball (Ariadne)",
            "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/6aff7be8-70fc-4b0c-9dee-80592a6acb9a/GazingBall_Ariadne.jpg",
            "year": "2013",
            "series": "Gazing Ball",
            "medium": "Plaster and glass",
            "created_at": datetime.utcnow()
        }
    ]
    await db.artworks.insert_many(artworks_data)

    # Seed Exhibitions
    exhibitions_data = [
        {"id": str(uuid.uuid4()), "title": "Jeff Koons: Porcelain Series", "venue": "Gagosian, New York", "date": "2024 - Present", "status": "Current"},
        {"id": str(uuid.uuid4()), "title": "Jeff Koons: Lost in America", "venue": "Qatar Museums, Doha", "date": "2021 - 2022", "status": "Past"},
        {"id": str(uuid.uuid4()), "title": "Shine", "venue": "Palazzo Strozzi, Florence", "date": "2021", "status": "Past"},
        {"id": str(uuid.uuid4()), "title": "Jeff Koons: A Retrospective", "venue": "Whitney Museum of American Art, New York", "date": "2014", "status": "Past"}
    ]
    await db.exhibitions.insert_many(exhibitions_data)

    # Seed Biography
    biography_data = {
        "id": str(uuid.uuid4()),
        "name": "Jeff Koons",
        "portrait": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/1727279571917-EZ739QD1LLMSYPTG39BO/01_JK_PORTRAIT_0170.jpg",
        "short_bio": "Jeff Koons is one of the most prominent artists working today. He is known for challenging the limitations of fabrication while transforming everyday images and objects into works of art that engage the viewer in a dialogue with the time in which we live and our historical past. For four decades, Koons has created works that explore themes of self-acceptance and transcendence.",
        "birth_info": "Jeff Koons was born in York, Pennsylvania in 1955. He studied at the Maryland Institute College of Art in Baltimore, Maryland, and the School of the Art Institute of Chicago in Chicago, Illinois. He received a BFA from the Maryland Institute College of Art in 1976. Koons lives and works in New York City.",
        "exhibitions": "Since his first solo exhibition in 1980, Koons's work has been shown in galleries, museums, and cultural institutions throughout the world. Koons's work is in numerous collections, including The Broad Art Foundation, Los Angeles, California; Hirshhorn Museum and Sculpture Garden, Washington, D.C.; Los Angeles County Museum of Art; Museum of Contemporary Art, Tokyo; The Museum of Modern Art, New York; National Gallery of Art, Washington, D.C.; Solomon R. Guggenheim Museum, New York; Stedelijk Museum, Amsterdam; Tate Gallery, London; and the Whitney Museum of American Art, New York.",
        "recent_exhibitions": "His work was the subject of a major exhibition organized by the Whitney Museum of American Art, Jeff Koons: A Retrospective (June 27 - October 19, 2014), which then traveled to the Centre Pompidou Paris and the Guggenheim Bilbao. Recent solo exhibitions include Shine at Palazzo Strozzi in Florence and Jeff Koons: Lost in America at Qatar Museums in Doha. Porcelain Series is currently on view at Gagosian, 541 West 24th Street, in New York City.",
        "famous_works": "Koons is widely known for his bold paintings and sculptures, including Rabbit, Michael Jackson and Bubbles, Puppy, and Balloon Dog. The smooth, mirror-finished surfaces of his iconic stainless steel sculptures reflect and affirm viewers and their environments. A dialogue with the readymade is evident in his complex paintings that often employ bright, saturated color, communicating the artist's interest in art history, the biological, and acceptance. Koons earned renown for his public works, such as the monumental floral sculptures Puppy and Split-Rocker.",
        "awards": "Jeff Koons has received numerous awards and honors in recognition of his cultural achievements. Notably, President Jacques Chirac promoted Koons from Chevalier to Officier de l'Ordre National de la Légion d'Honneur for his ongoing strengthening of relations between France and the United States; and in 2013 Koons was honored with the U.S. Department of State's Medal of the Arts for his outstanding commitment to the Art in Embassies Program and international cultural exchange."
    }
    await db.biography.insert_one(biography_data)

    # Seed Bibliography
    bibliography_data = [
        {"id": str(uuid.uuid4()), "year": "2014", "title": "Jeff Koons: A Retrospective", "publisher": "Whitney Museum of American Art", "authors": "Scott Rothkopf"},
        {"id": str(uuid.uuid4()), "year": "2012", "title": "Jeff Koons: The Painter & The Sculptor", "publisher": "Hatje Cantz", "authors": "Matthias Ulrich, Vinzenz Brinkmann"},
        {"id": str(uuid.uuid4()), "year": "2009", "title": "Jeff Koons: Versailles", "publisher": "Xavier Barral", "authors": "Jeff Koons, Edouard de Broglie"},
        {"id": str(uuid.uuid4()), "year": "2008", "title": "Jeff Koons", "publisher": "Taschen", "authors": "Katy Siegel, Ingrid Sischy"},
        {"id": str(uuid.uuid4()), "year": "2006", "title": "Jeff Koons: Celebration", "publisher": "Gagosian Gallery", "authors": "Jeff Koons"},
        {"id": str(uuid.uuid4()), "year": "1992", "title": "The Jeff Koons Handbook", "publisher": "Rizzoli", "authors": "Anthony d'Offay Gallery"}
    ]
    await db.bibliography.insert_many(bibliography_data)

    # Seed Shop Items
    shop_data = [
        {"id": str(uuid.uuid4()), "name": "Balloon Dog Print - Blue", "price": 250, "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/c66d2988-b577-41af-9028-c96d13d91f7e/balloondog_blue+%281%29.jpg", "category": "Prints"},
        {"id": str(uuid.uuid4()), "name": "Rabbit Print - Silver", "price": 300, "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/435ecc2f-2331-4826-94cb-1caecf54afa0/JK_Rabbit.jpg", "category": "Prints"},
        {"id": str(uuid.uuid4()), "name": "Tulips Print", "price": 275, "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/534dfca8-6373-4514-8349-c25f05205f8a/tulips.jpg", "category": "Prints"},
        {"id": str(uuid.uuid4()), "name": "Jeff Koons: A Retrospective (Book)", "price": 75, "image": "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/361cb81b-6835-4ec2-ae53-b3dbd85464de/balloonflower_yelllow.jpg", "category": "Books"}
    ]
    await db.shop.insert_many(shop_data)

    return {"message": "Database seeded successfully", "artworks": len(artworks_data), "exhibitions": len(exhibitions_data), "bibliography": len(bibliography_data), "shop": len(shop_data)}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
