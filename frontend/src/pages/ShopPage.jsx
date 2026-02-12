import React from 'react';
import Header from '../components/Header';
import { useShop } from '../hooks/useApi';
import { ShoppingBag } from 'lucide-react';
import { Skeleton } from '../components/ui/skeleton';

const ShopPage = () => {
  const { shopItems, loading } = useShop();

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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="aspect-square mb-4" />
                <Skeleton className="h-3 w-16 mb-1" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full mt-4" />
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </main>
    </div>
  );
};

export default ShopPage;
