import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Clothing',
    href: '/list?cat=Clothing',
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'White T-Shirt',
  },
  {
    name: 'Footwear',
    href: '/list?cat=Footwear',
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'White Sneakers',
  },
  {
    name: 'Accessories',
    href: '/list?cat=Accessories',
    image: 'https://images.pexels.com/photos/1613208/pexels-photo-1613208.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Black Cap',
  },
];

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 pt-20">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.href}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={category.image}
              alt={category.alt}
              className="w-full h-48 object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
            />
            <div className="p-4 flex justify-center">
              <h3 className="text-base text-gray-800 font-semibold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;