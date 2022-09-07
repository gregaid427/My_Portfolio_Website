import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Navbar from './Navbar'

import Rates from './Rates'

export const Home = () => {
  return (<>
 <div className="">
   <Navbar />
   <div className="md:grid md:grid-cols-1 bg-[#111f3d] max-w-[1100px] justify-center  h-screen  mx-auto " >
   <Rates />
 
   </div>
 </div>
  </> );
};

export default Home;
