import { useState } from 'react';
import Input from './Input';
import { Button } from '.';
import { generateLink } from '../utils';

const Form = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [shortenedLink, setShortenedLink] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() === '') {
      setError('Please add a link');
    } else {
      // alert(url);
      setError('');
      setShortenedLink(generateLink);
      setIsVisible(true);
    }
  };

  const handleClick = () => {
    navigator.clipboard.writeText(`https://rel.ink/${shortenedLink}`);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <>
      <section className='form__wrapper'>
        <div>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <Input
                label='Link to shorten'
                placeholder='Shorten a link here...'
                name='url'
                value={url}
                error={error}
                onChange={handleChange}
              />
              <Button className='btn' type='submit'>
                Shorten It!
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section
        className={`results__wrapper ${isVisible ? 'faded-in' : 'hidden'}`}>
        <div className={`results  ${isVisible ? 'fade-in' : 'hidden'}`}>
          <div className='results__header'>
            <p>{url}</p>
          </div>
          <div className='results__body'>
            <a href='/' className='link'>
              https://rel.ink/{shortenedLink}
            </a>
            <Button
              type='button'
              className={`btn btn-primary ${isCopied ? 'dark' : ''}`}
              onClick={handleClick}>
              {isCopied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Form;
