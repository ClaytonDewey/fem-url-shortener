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
        <ul className='links' aria-label='Main navigation links'>
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
        <ul className='account' aria-label='Account links'>
          <li>
            <Link href='/'>Login</Link>
          </li>
          <li className='signup'>
            <Link href='/'>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
