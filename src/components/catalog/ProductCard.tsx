import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <Link to={`/catalog/${product.id}`} className="block">
        <div className="h-60 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-brown-900 mb-2">{product.name}</h3>
          <p className="text-brown-600 text-sm line-clamp-2 mb-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-caramel-600 font-semibold">{formatPrice(product.price)}</span>
            <button 
              className="w-10 h-10 flex items-center justify-center bg-caramel-100 rounded-full hover:bg-caramel-200 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              aria-label="Добавить в корзину"
            >
              <ShoppingCart size={18} className="text-brown-800" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;