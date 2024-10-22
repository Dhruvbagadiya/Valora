import Hero from './Hero';
import About from './About';
import Services from './ServicesCards';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
