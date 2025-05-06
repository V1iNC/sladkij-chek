import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Наши категории
          </h2>
          <p className="text-brown-700 max-w-2xl mx-auto">
            Широкий ассортимент кондитерских изделий на любой вкус и для любого события
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/catalog?category=${category.id}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg h-80 shadow-md">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 to-transparent flex items-end p-6">
                  <div className="w-full text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                    <span className="inline-block py-2 px-4 bg-caramel-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Смотреть
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;