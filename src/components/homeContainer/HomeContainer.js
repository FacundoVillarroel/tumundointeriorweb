import React from 'react';
import Section1 from '../section1/Section1';
import Section2 from '../section2/Section2';
import Section3 from '../section3/Section3';

const HomeContainer = () => {
  return (
    <div className='homeContainer'>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default HomeContainer