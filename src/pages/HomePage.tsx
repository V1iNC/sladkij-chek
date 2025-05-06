import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Promotions from '../components/home/Promotions';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Promotions />
      <AboutPreview />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default HomePage;