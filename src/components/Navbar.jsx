import Button from './Button';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Button
        type='button'
        className='navbar__toggle'
        expanded='false'
        aria-label='Toggle menu'>
        <span className='sr-only'>Toggle menu</span>
        <span className='icon-bar top-bar'></span>
        <span className='icon-bar middle-bar'></span>
        <span className='icon-bar bottom-bar'></span>
      </Button>
      <div className='navbar__wrapper'>
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
