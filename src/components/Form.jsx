import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

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
    }
  };

  return (
    <section className='form__wrapper'>
      <div className='container'>
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
  );
};
export default Form;
