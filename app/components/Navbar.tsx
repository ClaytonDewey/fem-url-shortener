'use client';

import { useState } from 'react';
import { Button } from '.';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <Button
        type='button'
        className={`navbar__toggle ${isOpen ? 'open' : ''}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-label='Toggle menu'
        onClick={handleClick}>
        <span className='sr-only'>Toggle menu</span>
        <span className='icon-bar top-bar'></span>
        <span className='icon-bar middle-bar'></span>
        <span className='icon-bar bottom-bar'></span>
      </Button>
      <div className={`navbar__wrapper ${isOpen ? 'open' : ''}`}>
        <nav aria-label='Main navigation links'>
          <ul className='links'>
            <li>
              <Link href='/'>Features</Link>
            </li>
            <li>
              <Link href='/'>Pricing</Link>
            </li>
            <li>
              <Link href='/'>Resources</Link>
            </li>
          </ul>
        </nav>
        <nav aria-label='Account links'>
          <ul className='account'>
            <li>
              <Link href='/'>Login</Link>
            </li>
            <li className='signup'>
              <Link href='/' className='btn btn-signup'>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};
export default Navbar;
