import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import webimg from './images/undraw_Investment_data_re_sh9x.svg';

const Home = () => {
  return <>
    <Common name="Grow your business with" 
      imgsrc={webimg} 
      visit="/service" 
      btname="Get Started"                
    />
  </>;
};

export default Home;