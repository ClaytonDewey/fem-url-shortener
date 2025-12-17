'use client';

import { useState } from 'react';
import Input from './Input';
import { Button } from '.';
import Link from 'next/link';

type ShortenResponse = {
  result_url?: string;
  error?: string;
};

const Form = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!url.trim()) {
      setError('Please enter a valid URL.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setShortUrl(null);

    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten the URL.');
      }

      const data: ShortenResponse = await response.json();

      if (!data.result_url) {
        throw new Error(data.error || 'Unexpected API response.');
      }

      setShortUrl(data.result_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    if (!shortUrl) return;

    await navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 3000);
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
              <Button className='btn' type='submit' disabled={isLoading}>
                {isLoading ? 'Shortening...' : 'Shorten It!'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section
        className={`results__wrapper ${shortUrl ? 'faded-in' : 'hidden'}`}>
        <div className={`results ${shortUrl ? 'fade-in' : 'hidden'}`}>
          <div className='results__header'>
            <p>{url}</p>
          </div>
          <div className='results__body'>
            {shortUrl && (
              <Link
                href={shortUrl}
                className='link'
                target='_blank'
                rel='noopener noreferrer'>
                {shortUrl}
              </Link>
            )}

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
