'use client';

import styles from './page.module.css';
import HomePageHero from './assets/Hero';
import FeatureSection from './assets/Features';
import Testimonials from './assets/Testimonials';

export default function HomePage() {
  return (
    <>
    <HomePageHero />
    <FeatureSection />
    <Testimonials/>
    <div style={{width:'100vw', height:'300px', backgroundColor:'#222'}}>

    </div>
    </>
  );
}
