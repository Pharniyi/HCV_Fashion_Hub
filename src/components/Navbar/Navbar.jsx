import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa"

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: "/#",
  },
  {
    id: 2,
    name: 'About',
    link: '/#',
  },
  {
    id: 3,
    name: 'Products',
    link: "/#",
  },
  {
    id: 4,
    name: 'Contact',
    link: "/#",
  }
];

const DropdownLinks = [
  {
    id: 1,
    name: 'Products',
    link: "/#",
  },
  {
    id: 2,
    name: 'Best Selling',
    link: '/#',
  },
  {
    id: 3,
    name: 'Top Rated',
    link: "/#",
  }
];

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 '>
      {/* upper navbar */}
      <div className="bg-blue-500/40 py-2">
        <div className='container flex justify-between items-center px-4'>
          <div className="flex items-center gap-2">
            <span className='font-bold text-2xl sm:text-3xl'>HCV</span>
            <span className="text-xs sm:text-sm self-center leading-none">Fashion <br /> Hub</span>
          </div>

          <div className='flex justify-center'>
            <ul className='sm:flex hidden items-center gap-4'>
              {
                Menu.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                  </li>
                ))
              }

              <li className='group relative cursor-pointer'>
                <div className='flex items-center gap-[2px] py-2'>Trendings
                  <span>
                    <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
                  </span>
                  <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                    <ul>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/**<div className="flex gap-4">
          <a href="/home" className="text-gray-700 dark:text-white hover:text-primary transition-all duration-200">Home</a>
          <a href="/about" className="text-gray-700 dark:text-white hover:text-primary transition-all duration-200">About</a>
          <a href="/products" className="text-gray-700 dark:text-white hover:text-primary transition-all duration-200">Products</a>
          <a href="/contact" className="text-gray-700 dark:text-white hover:text-primary transition-all duration-200">Contact</a>
            </div> */}

          {/** search bar and order button */}
          <div className='flex justify-between items-center gap-4'>
            <div className="relative group hidden sm:flex items-center gap-4">
              <div className="relative">
                <input type="text" placeholder="search" className="w-[200px] sm:w-[200px] 
              group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300
              px-2 py-2 bg-white focus:outline-none focus:border-1 focus:border-primary"/>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <IoMdSearch className="text-gray-500 group-hover:text-primary" />
                </div>
              </div>
              {/**order button */}
              <button onClick={() => alert("Order now")}
                className='bg-primary transition-all duration-200 text-white py-1 px-4 rounded-full
                flex items-center gap-3 '>
                <span className="transition-all duration-200 invisible hover:block text-white">Shop</span>
                <FaCartShopping className='text-xl' />
              </button>
            </div>
          </div>
        </div>

      </div>


    </div>

  );
};

export default Navbar;

