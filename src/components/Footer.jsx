import { Icon } from '../svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__logo'>
          <Icon name='logo' />
        </div>

        <div className='footer__wrapper-links'>
          <div className='footer__links'>
            <div>
              <h2>Features</h2>
              <ul>
                <li>
                  <a href='/'>Link Shortening</a>
                </li>
                <li>
                  <a href='/'>Branded Links</a>
                </li>
                <li>
                  <a href='/'>Analytics</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Resources</h2>
              <ul>
                <li>
                  <a href='/'>Blog</a>
                </li>
                <li>
                  <a href='/'>Developers</a>
                </li>
                <li>
                  <a href='/'>Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>Company</h2>
              <ul>
                <li>
                  <a href='/'>About</a>
                </li>
                <li>
                  <a href='/'>Our Team</a>
                </li>
                <li>
                  <a href='/'>Careers</a>
                </li>
                <li>
                  <a href='/'>Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer__social'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'>
              <Icon name='facebook' />
              <span className='sr-only'>Facebook</span>
            </a>
            <a href='https://www.twitter.com/' target='_blank' rel='noreferrer'>
              <Icon name='twitter' />
              <span className='sr-only'>Twitter</span>
            </a>
            <a
              href='https://www.pinterest.com/'
              target='_blank'
              rel='noreferrer'>
              <Icon name='pinterest' />
              <span className='sr-only'>Pinterest</span>
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'>
              <Icon name='instagram' />
              <span className='sr-only'>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          rel='noreferrer'
          target='_blank'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href='https://www.claytondewey.com/'
          rel='noreferrer'
          target='_blank'>
          Clayton Dewey
        </a>
        .
      </div>
    </footer>
  );
};
export default Footer;
