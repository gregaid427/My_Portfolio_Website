import React from "react";
import Logo from "../assets/logo.png";
import {link} from "react-router-dom"

const Reset = () => {
  
  return (
    <>  
      <div className=" flex flex-col  gap-10 bg-[#f2f2f2] my-auto w-full h-screen ">
      <div><img src={Logo} alt='logo' className="  mx-auto h-[65px]   w-[387px] mt-8"></img>
      <p className="text-1xl flex mx-auto justify-center">CURRENCY EXCHANGE RATES APP</p>
      </div>
        <div className=" p-10 rounded-md w-[400px]   mx-auto bg-[#f2f2f2]  border border-red-600 ">
       
          <form action="" className="flex flex-col w-full gap-5">
          <p className="text-1xl flex mx-auto justify-center">Recovery Email</p>
            <input 
              className="p-2 rounded-sm"
              type={"email"}
              placeholder="Email"
              name="title"
        
            ></input>
         

            <button className="text-white border-2 hover:bg-red-600 bg-red-600 hoverborder-pink-500 px-4 flex item-center  w-full py-3  rounded-sm ">
            <a href="/newPassword" className="text-1xl mx-auto justify-center" ><p className="text-1xl mx-auto justify-center">Submit</p></a>
            </button>
  
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
