import React from 'react'
import { Link } from 'react-router-dom';
import useCartStore from '../../store/useCartStore';

// import { ShoppingCart } from "lucide-react";

const CounterCart = () => {
    const { items } = useCartStore();
  return (
    <Link to="/cart" className="relative">
  <span className="font-bold text-gray-700 hover:text-blue-500">Cart</span>
  {items.length > 0 && (
    <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-2">
      {items.length}
    </span>
  )}
</Link>

/* <div className="relative">
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {items.length}
        </span>
      )}
    </div> */
  )
}

export default CounterCart
