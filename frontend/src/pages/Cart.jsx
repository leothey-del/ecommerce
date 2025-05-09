import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import useCartStore from '../store/useCartStore';

const Cart = () => {
  const { items, removeItem, clearCart, addItem, decreaseQuantity } = useCartStore();
  const location = useLocation();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [location.key]);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-4 pt-20">
        <div className="flex flex-col items-center justify-center h-[60vh]">
          <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</p>
          <p className="text-gray-500 mb-6">Explore our products and start shopping!</p>
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 pt-20">
      <Link to="/list" className="text-blue-600 hover:underline mb-6 inline-block">
        Back to Products
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-20 h-20 object-cover rounded-lg mr-4"
                loading="lazy"
              />
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-full hover:bg-gray-300 text-gray-800 font-semibold shadow-sm transition-all duration-300"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => addItem(item)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 border border-gray-300 rounded-full hover:bg-gray-300 text-gray-800 font-semibold shadow-sm transition-all duration-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 hover:text-red-800 transition-colors duration-300"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6 sticky top-24">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Total</span>
              <span className="text-xl font-semibold text-gray-800">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={clearCart}
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300 mb-3"
            >
              Clear Cart
            </button>
            <button
              onClick={() => alert('Proceed to checkout')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;