import React, { useState } from 'react';
import { X, Menu, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import useCartStore from '../store/useCartStore';

const Navbar = () => {
  const { items } = useCartStore();
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
  ];

  return (
    <nav className="fixed top-0 left-0 bg-white/80 backdrop-blur w-full shadow z-50">
      <div className="max-w-4xl mx-auto h-16 px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex shrink-0">
          <Link
            to="/"
            className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            My App
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          
          {links.map((data) => (
            <Link
              key={data.name}
              to={data.href}
              className="font-bold text-gray-700 text-base transition-colors duration-200 hover:text-blue-500"
            >
              {data.name}
            </Link>
          ))}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {items.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {items.length}
              </span>
            )}
          </Link>
          <button onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white/90 backdrop-blur p-4 flex flex-col space-y-4">
          {links.map((data) => (
            <Link
              key={data.name}
              to={data.href}
              className="font-bold text-gray-700 text-base transition-colors duration-200 hover:text-blue-500"
              onClick={() => setOpenMenu(false)}
            >
              {data.name}
            </Link>
          ))}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;