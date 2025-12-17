import { Navbar } from '.';
import { Icon } from '@/svg';

const Header = () => {
  return (
    <header className='header container'>
      <div className='header__logo'>
        <Icon name='logo' />
        <span className='sr-only'>Shortly</span>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
