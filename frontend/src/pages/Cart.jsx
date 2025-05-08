import React from 'react';
import useCartStore from '../store/useCartStore';

const Cart = () => {
  const { items, removeItem, clearCart, addItem, decreaseQuantity } = useCartStore();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-white rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-600 font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
              <p className="text-sm text-gray-800 font-semibold">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-2 py-1 border rounded text-sm"
                >
                  −
                </button>
                <button
                  onClick={() => addItem(item)}
                  className="px-2 py-1 border rounded text-sm"
                >
                  ＋
                </button>
              </div>
            </div>
            
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => removeItem(item.id,) }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
