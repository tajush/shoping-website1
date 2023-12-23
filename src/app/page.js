import React from "react";
import Hero from './Components/Hero';
import HeaderMain from './Components/HeaderMain';
import Navbar from "./Components/Navbar";
import NewProducts from "./Components/NewProducts";
import Testimonial from "./Components/Testimonial";
import MobNavbar from "./Components/MobNavbar";

import Practice from "./Components/Practice";
import HeaderTop from './Components/HeaderTop'
const page = () => {
  return <>
  <HeaderTop />
        <HeaderMain />
        <Navbar />
        <Hero />
        <NewProducts />
        <Testimonial />
        <MobNavbar />
        <Practice />
        
  </>;
};

export default page;
