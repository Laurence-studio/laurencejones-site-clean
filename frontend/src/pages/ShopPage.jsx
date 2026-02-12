import React from 'react';
import Header from '../components/Header';
import { ShoppingBag } from 'lucide-react';

const shopItems = [
  {
    id: 1,
    name: "Balloon Dog Print - Blue",
    price: 250,
    image: "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/c66d2988-b577-41af-9028-c96d13d91f7e/balloondog_blue+%281%29.jpg",
    category: "Prints"
  },
  {
    id: 2,
    name: "Rabbit Print - Silver",
    price: 300,
    image: "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/435ecc2f-2331-4826-94cb-1caecf54afa0/JK_Rabbit.jpg",
    category: "Prints"
  },
  {
    id: 3,
    name: "Tulips Print",
    price: 275,
    image: "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/534dfca8-6373-4514-8349-c25f05205f8a/tulips.jpg",
    category: "Prints"
  },
  {
    id: 4,
    name: "Jeff Koons: A Retrospective (Book)",
    price: 75,
    image: "https://images.squarespace-cdn.com/content/v1/66993101c21acf31dcadf692/361cb81b-6835-4ec2-ae53-b3dbd85464de/balloonflower_yelllow.jpg",
    category: "Books"
  }
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-20 px-6 md:px-12">
        <h1 
          className="font-black text-black leading-none tracking-tighter mb-16"
          style={{ 
            fontSize: 'clamp(48px, 10vw, 120px)',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            letterSpacing: '-0.03em'
          }}
        >
          SHOP
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-4 bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-gray-500 mb-1">{item.category}</p>
              <h3 className="font-medium text-black mb-2">{item.name}</h3>
              <p className="text-gray-700">${item.price}</p>
              <button className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-4 text-sm font-medium hover:bg-gray-800 transition-colors">
                <ShoppingBag size={16} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
