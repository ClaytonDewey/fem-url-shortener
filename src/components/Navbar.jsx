import { useState } from 'react';
import Button from './Button';

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
        expanded={isOpen}
        aria-label='Toggle menu'
        onClick={handleClick}>
        <span className='sr-only'>Toggle menu</span>
        <span className='icon-bar top-bar'></span>
        <span className='icon-bar middle-bar'></span>
        <span className='icon-bar bottom-bar'></span>
      </Button>
      <div className={`navbar__wrapper ${isOpen ? 'open' : ''}`}>
        <ul className='links'>
          <li>
            <a href='/'>Features</a>
          </li>
          <li>
            <a href='/'>Pricing</a>
          </li>
          <li>
            <a href='/'>Resources</a>
          </li>
        </ul>
        <ul className='account'>
          <li>
            <a href='/'>Login</a>
          </li>
          <li className='signup'>
            <a href='/'>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
