import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {} from "react-icons/fa";
import { Link } from "react-scroll";

export const Logout = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    // <div className=" w-full h-[80px] flex  bg-[#f2f2f2] text-gray-300">
         <div className="  flex justify-around bg-[#f2f2f2] items-center ">
        <img src={Logo} alt="log" className="   h-[60px] flex-  w-[380px] "></img>
        <div className=" flex"><a href="/">Log Out</a></div>
  {/* </div> */}
    </div>
  );
};

export default Logout;
