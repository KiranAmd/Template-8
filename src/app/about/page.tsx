import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutSection from '../components/aboutsection'
import AboutPopularProduct from '../components/aboutPopulorProduct';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}
export default page