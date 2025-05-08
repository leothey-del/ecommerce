import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import CounterCart from './products/CounterCart';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  // const { isLoggedIn, logout } = useAuthStore();

  // const handleLogout = () => {
  //   logout();
  //   navigate('/login'); 
  // };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
   
  ];

  return (
    <nav className='top-0 left-0 bg-white/80 backdrop-blur w-full shadow'>
      <div className='max-w-7xl mx-auto h-16 px-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex shrink-0'>
          <Link
            to='/'
            className='font-bold text-2xl bg-gradient-to-r
            from-blue-600 to-purple-600 bg-clip-text text-transparent'
          >
            My App
          </Link>
        </div>

        {/* Desktop Links */}
        <div className=' md:flex items-center space-x-8'>
          {links.map((data) => (
            <Link
              key={data.name}
              to={data.href}
              className='font-bold text-gray-700 text-base transition-colors duration-200 hover:text-blue-500'
            >
              {data.name}
            </Link>
          ))}
       < CounterCart/>
        </div>

        {/* Mobile Button */}
        <button className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className='md:hidden bg-white/90 backdrop-blur p-4 flex flex-col space-y-4'>
          {links.map((data) => (
            <Link
              key={data.name}
              to={data.href}
              className='font-bold text-gray-700 text-base transition-colors duration-200 hover:text-blue-500'
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
