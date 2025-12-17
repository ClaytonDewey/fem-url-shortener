import { Icon } from '@/svg';

const Stats = () => {
  return (
    <section className='stats__wrapper'>
      <div className='stats__header'>
        <h2>Advanced Statistics</h2>

        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className='card__container'>
        <div className='card'>
          <div className='card__icon'>
            <Icon name='graph' />
          </div>
          <div className='card__body'>
            <h3>Brand Recognition</h3>

            <p>
              Boost your brand recognition with each click. Generic links
              don&rsquo;t mean a thing. Branded links help instil confidence in
              your content.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card__icon'>
            <Icon name='guage' />
          </div>
          <div className='card__body'>
            <h3>Detailed Records</h3>

            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card__icon'>
            <Icon name='pens' />
          </div>
          <div className='card__body'>
            <h3>Fully Customizable</h3>

            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stats;
