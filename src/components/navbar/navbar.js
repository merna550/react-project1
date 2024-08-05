import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavLinks from './navlinks';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  const [top, setTop] = useState(!window.scrollY);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
  return (
  
      <div>
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 ${!top && 'bg-white shadow-lg'}`}>
          <div className="flex flex-row justify-between p-6 ">
            <div className='flex flex-row items-center justify-center font-semibold text-center md:px-12 md:mx-12'>
              <HashLink smooth to="/#hero"><h1 className="font-extrabold text-4xl text-blue-900">mld</h1></HashLink>
            </div>

            <NavLinks />
          </div>
        </nav>
      </div>
  


  )
}

export default NavBar;