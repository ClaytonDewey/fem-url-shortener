import { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className='form'>
      <form>
        <Input
          label='Link to shorten'
          placeholder='Shorten a link here...'
          name='url'
          value={url}
          onChange={handleChange}
        />
        <Button className='btn' type='submit'>
          Shorten It!
        </Button>
      </form>
    </div>
  );
};
export default Form;
