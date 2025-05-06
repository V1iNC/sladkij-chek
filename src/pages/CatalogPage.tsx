import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/catalog/ProductCard';

const CatalogPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  useEffect(() => {
    if (activeCategory) {
      setFilteredProducts(products.filter(product => product.category === activeCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [activeCategory]);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Каталог продукции
          </h1>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Изысканные десерты для любого случая — от классических тортов до оригинальных пирожных
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              className={`py-2 px-4 rounded-full ${
                activeCategory === null 
                  ? 'bg-brown-700 text-white' 
                  : 'bg-brown-100 text-brown-700 hover:bg-brown-200'
              } transition-colors duration-200`}
              onClick={() => setActiveCategory(null)}
            >
              Все товары
            </button>
            {categories.map(category => (
              <button 
                key={category.id}
                className={`py-2 px-4 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-brown-700 text-white' 
                    : 'bg-brown-100 text-brown-700 hover:bg-brown-200'
                } transition-colors duration-200`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CatalogPage;