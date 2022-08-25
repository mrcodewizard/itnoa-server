import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
// import MainMenu from './main-menu/MainMenu';
import HeroBanner from './hero-banner/HeroBanner';
import IntroSection from './intro-section/IntroSection';
import Services from './services/Services';
import Feature from './feature-item/Feature';
import TopProjects from './top-projects/TopProjects';
import Checklist from './check-list/Checklist';
import RequestQuote from './request-quote/RequestQuote';
import Testimonials from './testimonials/Testimonials';

function Homepage() {
    const location = useLocation();
    useEffect( () => {
        if( location.hash) {
            let element = document.getElementById(location.hash.slice(1));
            if( element ) {
              element.scrollIntoView({ top: 50, behavior: "smooth"})
            }
        }
        else {
          window.scrollTo({ top: 0, behavior: "smooth"});
        }
    }, [location]);

  return (
    <main>
        <HeroBanner />
        <IntroSection />
        <Feature />
        <Services />
        <TopProjects />
        <Checklist />
        <RequestQuote />
        <Testimonials />
    </main>
  )
}

export default Homepage