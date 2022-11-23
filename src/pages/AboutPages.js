import React from 'react';
import SectionAbout1 from '../components/SectionAbout1';
import SectionAbout2 from '../components/SectionAbout2';
import "../assets/sass/style.scss"

const AboutPages = () => {
  return (
    <div>
      <div>
        <SectionAbout2 />
        <SectionAbout1 />
      </div>
    </div>
  );
};


export default AboutPages;