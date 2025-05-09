import React from 'react';
import { Link } from 'react-router-dom';

const category = [
  {
    id: 1,
    name: 'T-Shirt',
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 19.99,
    slug: 'Clothing',
    alt: 'White T-Shirt',
  },
  {
    id: 2,
    name: 'Jeans',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 49.99,
    slug: 'Clothing',
    alt: 'Blue Jeans',
  },
  {
    id: 3,
    name: 'Sneakers',
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 89.99,
    slug: 'Footwear',
    alt: 'White Sneakers',
  },
  {
    id: 4,
    name: 'Cap',
    image: 'https://images.pexels.com/photos/1613208/pexels-photo-1613208.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 12.5,
    slug: 'Accessories',
    alt: 'Black Cap',
  },
];

const CategoryList = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
      {category.map((category) => (
        <Link key={category.id} to={`/list?cat=${category.slug}`}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
              src={category.image}
              alt={category.alt}
              className="w-full h-48 object-cover rounded-t-lg hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600 text-center font-medium">{category.name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;