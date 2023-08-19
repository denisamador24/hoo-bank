import { useState } from 'react';
import { close, logo, menu } from '../assets/';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img width="124px" src={logo} alt="Logo hoobank" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-white mr-10 ${index === navLinks.length ? 'mr-0' : 'mr-10'}`}>
            <a href={nav.id} >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          width="28px"
          src={toggleMenu ? close : menu}
          alt="menu"
          className='object-contain'
          onClick={() => setToggleMenu(prev => !prev)}
        />
        <div
          className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-white mr-10 ${index - 1 === navLinks.length ? 'mr-0' : 'mb-4'}`}>
                <a href={nav.id} >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;