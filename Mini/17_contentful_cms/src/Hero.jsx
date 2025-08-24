import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>contentful CMS</h1>
          <p>
            Vinyl snackwave bicycle rights, stumptown literally beard tacos.
            Shaman poke hammock, marfa lumbersexual kombucha swag dreamcatcher
            banjo crucifix man bun. XOXO keffiyeh tbh seitan gentrify marfa
            lumbersexual kombucha marfa lumbersexual kombucha.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
