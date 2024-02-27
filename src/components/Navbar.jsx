import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  const {user} = useContext(AuthContext)
  // console.log(user);
  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // navItems here
  const navItems = [
    { link: 'Home', path: '/home' },
    { link: 'About', path: '/about' },
    { link: 'Shop', path: '/shop' },
    // { link: 'Sell Your Game', path: '/admin/dashboard' },
    { link: 'Trailers', path: '/blog' },
  ];

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
      <nav className={`py-4 lg:px-24 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center">
          <i class="fa-regular fa-hand-scissors fa-bounce fa-xl"></i>   Games
          </Link>
    
          {/* navitem for large device */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">
                {link}
              </Link>
            ))}
          </ul>
          {/* buttons for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
          <Link to='/login'><button className="block text-base text-black uppercase cursor-pointer hover:text-red-700"><i class="fa-solid fa-power-off"></i></button></Link>
            <button onClick={toggleMenu}>
              <FaBarsStaggered className="w-5 hover:text-blue-700" />
            </button>
            {
              user? user.email:""
            }
          </div>

          {/* menu btn for the mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered className="h-5 w-5 text-black" />}
            </button>
          </div>
        </div>

        {/* navitems for an sm devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
            {
                navItems.map(({ link, path }) => (
                    <Link key={path} to={path} className="block text-base text-white uppercase cursor-pointer ">
                      {link}
                    </Link>
            ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
