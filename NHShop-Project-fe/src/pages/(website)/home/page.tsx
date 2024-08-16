import React from 'react';
import AnimatedSection from './_component/AnimatedSection';
import Banner from "./_component/Banner";
import Blog from "./_component/Blog";
import Carousel from "./_component/carousel";
import New from "./_component/New";
import Services from "./_component/Services";
import Shop from "./_component/Shop";


const HomePage = () => {
  return (
    <div>
     
      <AnimatedSection delay={0.1}>
        <Banner />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <Carousel />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <New />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Shop />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Blog />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <Services />
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
