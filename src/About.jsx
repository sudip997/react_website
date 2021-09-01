import React from 'react';
import { NavLink } from 'react-router-dom';
import webimg from './images/undraw_Hello_re_3evm (1).svg';
import Common from './Common';

const About = () => {
  return <>
    <Common name="Welcome to About page" 
      imgsrc={webimg} 
      visit="/contact" 
      btname="Contact Now"                
    />
  </>;
};

export default About;