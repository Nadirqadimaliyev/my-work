import React from 'react';
import SectionAbout1 from '../components/SectionAbout1';
import SectionAbout2 from '../components/SectionAbout2';
import SectionAbout3 from '../components/SectionAbout3';
import "../assets/sass/style.scss"
import SectionAbout4 from '../components/SectionAbout4';

const AboutPages = () => {
  return (
    <div>
      <div>
        <SectionAbout4 />
        <SectionAbout3 />
        <SectionAbout2 />
        <SectionAbout1 />
      </div>
    </div>
  );
};


export default AboutPages;