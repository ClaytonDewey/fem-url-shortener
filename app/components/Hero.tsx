import Link from 'next/link';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__body'>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand&rsquo;s recognition and get detailed insights on how
          your links are performing.
        </p>
        <Link href='/' className='btn btn-primary btn-pill'>
          Get Started
        </Link>
      </div>
    </section>
  );
};
export default Hero;
