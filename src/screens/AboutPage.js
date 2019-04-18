import React from 'react';

//Import components
import AboutSection from '../Components/AboutSection/AboutSection';
import Navbar from '../Components/Navbar/Navbar';

//Export default component
export default function AboutPage(props) {
  return (
    <div>
      <Navbar />
      <AboutSection />
    </div>
  );
}
