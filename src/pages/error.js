import React from 'react'
import Logo from "../assets/logo.png";

export const Error = () => {
 
  return (
    <>  
      <div className=" flex flex-col  gap-10 bg-[#f2f2f2] my-auto w-full h-screen ">
      <div><img src={Logo} alt='logo' className="  mx-auto h-[65px]   w-[387px] mt-8"></img>
      <p className="text-1xl flex mx-auto justify-center">CURRENCY EXCHANGE RATES APP</p>
      </div>
       <div className='flex-col flex items-center justify-center  '  >
       <h1 className='text-4xl' >404 ERROR</h1>
       <h1 className='text-3xl' >Page Not Found</h1>
       </div>
  
      </div>
    </>
  );
}

export default Error;