import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

const allProducts = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 19.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'White T-Shirt',
    description: 'A comfortable white cotton T-shirt, perfect for casual wear.',
  },
  {
    id: 2,
    name: 'Jeans',
    price: 49.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Blue Jeans',
    description: 'Classic blue denim jeans with a modern slim fit.',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 89.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'White Sneakers',
    description: 'Stylish white sneakers, ideal for both casual and athletic use.',
  },
  {
    id: 4,
    name: 'Cap',
    price: 12.5,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/1613208/pexels-photo-1613208.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Cap',
    description: 'A sleek black cap, perfect for everyday style.',
  },
  {
    id: 5,
    name: 'Hoodie',
    price: 39.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/6311439/pexels-photo-6311439.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Gray Hoodie',
    description: 'Cozy gray hoodie with a soft, warm interior.',
  },
  {
    id: 6,
    name: 'Socks',
    price: 5.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/3735617/pexels-photo-3735617.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'White Socks',
    description: 'Soft and durable white cotton socks, pack of three.',
  },
  {
    id: 7,
    name: 'Jacket',
    price: 79.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/1610762/pexels-photo-1610762.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Jacket',
    description: 'Sleek black jacket, great for cool weather.',
  },
  {
    id: 8,
    name: 'Shorts',
    price: 24.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/5256618/pexels-photo-5256618.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Khaki Shorts',
    description: 'Comfortable khaki shorts, ideal for warm days.',
  },
  {
    id: 9,
    name: 'Backpack',
    price: 59.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Backpack',
    description: 'Spacious black backpack for work or travel.',
  },
  {
    id: 10,
    name: 'Watch',
    price: 129.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Silver Watch',
    description: 'Elegant silver watch with a minimalist design.',
  },
  {
    id: 11,
    name: 'Belt',
    price: 14.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/5555185/pexels-photo-5555185.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Brown Belt',
    description: 'Durable brown leather belt for a polished look.',
  },
  {
    id: 12,
    name: 'Sunglasses',
    price: 29.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Sunglasses',
    description: 'Stylish black sunglasses with UV protection.',
  },
  {
    id: 13,
    name: 'Scarf',
    price: 9.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/4754648/pexels-photo-4754648.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Gray Scarf',
    description: 'Soft gray scarf for warmth and style.',
  },
  {
    id: 14,
    name: 'Gloves',
    price: 15.49,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/4505173/pexels-photo-4505173.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Gloves',
    description: 'Warm black gloves for cold weather.',
  },
  {
    id: 15,
    name: 'Beanie',
    price: 11.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/9842970/pexels-photo-9842970.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Beanie',
    description: 'Cozy black beanie for a trendy winter look.',
  },
  {
    id: 16,
    name: 'Wallet',
    price: 34.99,
    category: 'Accessories',
    image: 'https://images.pexels.com/photos/4451740/pexels-photo-4451740.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Brown Wallet',
    description: 'Sleek brown leather wallet with multiple compartments.',
  },
  {
    id: 17,
    name: 'Boots',
    price: 99.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/3329048/pexels-photo-3329048.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Brown Boots',
    description: 'Rugged brown leather boots for all terrains.',
  },
  {
    id: 18,
    name: 'Flip Flops',
    price: 7.99,
    category: 'Footwear',
    image: 'https://images.pexels.com/photos/4661358/pexels-photo-4661358.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Flip Flops',
    description: 'Casual black flip flops for beach or home.',
  },
  {
    id: 19,
    name: 'Raincoat',
    price: 54.99,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/6996329/pexels-photo-6996329.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Yellow Raincoat',
    description: 'Bright yellow raincoat to stay dry in style.',
  },
  {
    id: 20,
    name: 'Polo Shirt',
    price: 22.49,
    category: 'Clothing',
    image: 'https://images.pexels.com/photos/10409477/pexels-photo-10409477.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'White Polo Shirt',
    description: 'Classic white polo shirt for a smart-casual look.',
  },
];

const ProductList = () => {
  const { addItem, calculateTotal } = useCartStore();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('cat');

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [location.key]);

  const filteredProducts = category
    ? allProducts.filter((product) => product.category === category)
    : allProducts;

  return (
    <div className="max-w-7xl mx-auto p-4 pt-20">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        Back to Home
      </Link>
      <h2 className="text-2xl font-bold mb-6">
        {category ? `${category} Products` : 'All Products'}
      </h2>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found for this category.</p>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-sm bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative isolate border border-gray-100"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-48 object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-300 min-h-0 z-0"
                  style={{ clipPath: 'inset(0)' }}
                  loading="lazy"
                />
              </Link>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-base text-gray-800 font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 font-medium mt-1">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => {
                    addItem(product);
                    calculateTotal();
                  }}
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;