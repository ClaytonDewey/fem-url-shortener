import Link from 'next/link';

const Cta = () => {
  return (
    <div className='cta'>
      <div className='container'>
        <h2>Boost your links today</h2>

        <Link href='/' className='btn btn-cta btn-pill'>
          Get Started
        </Link>
      </div>
    </div>
  );
};
export default Cta;
