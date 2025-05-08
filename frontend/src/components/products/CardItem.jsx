import React from 'react'
import useCartStore from '../../store/useCartStore';
const products = [
    { id: 1, name: 'T-Shirt', price: 19.99, category: 'Clothing' },
    { id: 2, name: 'Jeans', price: 49.99, category: 'Clothing' },
    { id: 3, name: 'Sneakers', price: 89.99, category: 'Footwear' },
    { id: 4, name: 'Cap', price: 12.5, category: 'Accessories' },
    { id: 5, name: 'Hoodie', price: 39.99, category: 'Clothing' },
    { id: 6, name: 'Socks', price: 5.99, category: 'Footwear' },
    { id: 7, name: 'Jacket', price: 79.99, category: 'Clothing' },
    { id: 8, name: 'Shorts', price: 24.99, category: 'Clothing' },
    { id: 9, name: 'Backpack', price: 59.99, category: 'Accessories' },
    { id: 10, name: 'Watch', price: 129.99, category: 'Accessories' },
    { id: 11, name: 'Belt', price: 14.99, category: 'Accessories' },
    { id: 12, name: 'Sunglasses', price: 29.99, category: 'Accessories' },
 
   
  ];
  
const CardItem = () => {
    const {addItem} = useCartStore();
  return (
    <div className='grid grid-cols-4 gap-3 '>
     {products.map((product) => (
  <div key={product.id} className="p-4 shadow bg-white rounded">
    <h3 className="text-sm  text-gray-700 font-semibold">{product.name}</h3>
    <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
    <p className="text-sm text-gray-500">{product.category}</p>
    <button
      onClick={() => addItem(product)}
      className="bg-blue-600 text-white text-sm px-2 rounded hover:bg-blue-700"
    >
      Add to Cart
    </button>
  </div>
))}

    </div>
  )
}

export default CardItem
