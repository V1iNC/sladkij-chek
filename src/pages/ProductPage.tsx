import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ChevronLeft, Minus, Plus } from 'lucide-react';
import Button from '../components/ui/Button';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  
  const product = products.find(product => product.id === Number(id));
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-bold text-brown-900 mb-4">Товар не найден</h1>
        <p className="text-brown-700 mb-6">К сожалению, данный товар не найден или был удален.</p>
        <Link 
          to="/catalog" 
          className="inline-block py-2 px-4 bg-brown-700 text-white rounded-md hover:bg-brown-800 transition-colors"
        >
          Вернуться в каталог
        </Link>
      </div>
    );
  }
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  // Find related products (same category, different id)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/catalog" className="flex items-center text-brown-700 hover:text-brown-900 transition-colors">
            <ChevronLeft size={20} className="mr-1" />
            <span>Назад в каталог</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-brown-900 mb-4">{product.name}</h1>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-caramel-600 mr-4">
                {formatPrice(product.price)}
              </span>
              {product.weight && (
                <span className="bg-cream-100 text-brown-700 py-1 px-3 rounded-full text-sm">
                  {product.weight}
                </span>
              )}
            </div>
            
            <p className="text-brown-700 mb-6">{product.description}</p>
            
            {product.ingredients && (
              <div className="mb-6">
                <h3 className="font-semibold text-brown-900 mb-2">Состав:</h3>
                <ul className="list-disc list-inside text-brown-700 space-y-1">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex items-center mb-8">
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mr-4">
                <button 
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Уменьшить количество"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-medium">
                  {quantity}
                </span>
                <button 
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Увеличить количество"
                >
                  <Plus size={16} />
                </button>
              </div>
              
              <Button 
                variant="primary" 
                size="lg"
                className="flex items-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} className="mr-2" />
                В корзину
              </Button>
            </div>
            
            <div className="bg-cream-100 rounded-lg p-4">
              <h3 className="font-semibold text-brown-900 mb-2">Важная информация:</h3>
              <p className="text-brown-700 text-sm">
                Все наши десерты изготавливаются из натуральных ингредиентов высшего качества. 
                Заказы принимаются за 24 часа до желаемой даты доставки. Для индивидуальных 
                заказов и особых пожеланий свяжитесь с нами по телефону.
              </p>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-brown-900 mb-6">Вам также может понравиться</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <div 
                  key={relatedProduct.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link to={`/catalog/${relatedProduct.id}`} className="block">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brown-900 mb-2">{relatedProduct.name}</h3>
                      <span className="text-caramel-600 font-semibold">{formatPrice(relatedProduct.price)}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductPage;