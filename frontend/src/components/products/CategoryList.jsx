import React from 'react'
import { Link } from 'react-router-dom'

const products = [

{ id: 1, name: 'T-Shirt', price: 19.99, category: 'Clothing' },
{ id: 2, name: 'Jeans', price: 49.99, category: 'Clothing' },
{ id: 3, name: 'Sneakers', price: 89.99, category: 'Footwear' },
{ id: 4, name: 'Cap', price: 12.5, category: 'Accessories' },
]
const CategoryList = () => {
  return (
    <Link to={"/list"}>
    <div className=' md:grid grid-cols-4 gap-2 py-4'>
         {products.map((product) => (
  <div key={product.id} className="p-4 shadow bg-white rounded  ">
    <h3 className="text-sm  text-gray-700 font-semibold">{product.name}</h3>
   
    <p className="text-sm text-gray-500">{product.category}</p>
   
  </div>
))}
      
    </div>
    </Link>
  )
}

export default CategoryList
