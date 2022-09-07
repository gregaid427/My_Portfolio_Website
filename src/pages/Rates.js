import React, { useState } from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchExchangeAction,fetchCediRate
} from "../redux/slices/exchangeSlice";


export const Rates = () => {
  const [base, setBase] = useState("USD");
  const [quote, setQuote] = useState("GHS");
  const dispatch = useDispatch();
  const exchange = useSelector(state => state?.exchange);

let payload = {
  "base" : base,
  "quote" : quote
}
 

useEffect(() => {
        
  dispatch(fetchExchangeAction(payload)) 
   
  } ,[] )


  const { loading, rate, error , cediRate } = exchange;
  return (



    <div
      name="about"
      className="w-full col-span-1 sm:h-screen py-20 bg-[#193166] text-gray-300 grid  "
    >
      <div className="flex flex-col  justify-center items-center w-full h-full ">
        <div className=" text-black  md:px-auto sm:px-5 gap-8 ">
          <div>
            {" "}
            <p className="text-center text-white ">Rate As @ {rate?.time_last_update_utc}</p>
          </div>
          <div className="  shadow-xl border my-5  md:p-3 sm:p-2 w-full  items-center justify-center mx-auto bg-gray-50 flex  ">
            <h2 className="md:text-6xl sm:text-3xl "> {loading ? (
            <h2 className="md:text-6xl sm:text-3xl font-light ">loading...</h2>
          ) : error ? (
            <h2>{error?.message}</h2>
          ) : rate?.conversion_rate}</h2>
          </div>
          <div className="flex md:flex-row sm:flex-col gap-3 ">
          <div className="w-full" >
              {" "}
              <p className="text-center text-white ">Base Currency</p>
              <select  onChange={(e) => setBase(e.target.value)} className="w-full p-1 text-center text-2xl ">
              <option className=" p-1  " value="USD">
                  United States Dollar
                </option>
             
              <option value="GHS">Ghana Cedi </option>
              
                <option value="GBP">British Pound </option>
                <option value="EUR">Euro </option>
                <option value="JPY">Japanese Yen </option>
                <option value="NZD">New Zealand Dollar </option>
                <option value="AUD">Australian Dollar </option>
                <option value="ZAR">South African Rand </option>
                <option value="CNY">Chineese Yuan </option>
                <option value="MXN">Mexican Peso </option>
              </select>
            </div>
           <HiArrowNarrowRight className=" md:flex items-center text-[50px] my-auto text-white   sm:hidden "></HiArrowNarrowRight>
            <div className="w-full ">
              {" "}
              <p className="text-center text-white">Quote Currency</p>
              <select onChange={(e) => setQuote(e.target.value)} className="w-full text-center p-1 text-2xl"> 
              <option value="GHS">Ghana Cedi </option>
              
              <option className=" p-1  " value="USD">
                  United States Dollar
                </option>
             
               
                <option value="GBP">British Pound </option>
                <option value="EUR">Euro </option>
                <option value="JPY">Japanese Yen </option>
                <option value="NZD">New Zealand Dollar </option>
                <option value="AUD">Australian Dollar </option>
                <option value="ZAR">South African Rand </option>
                <option value="CNY">Chineese Yuan </option>
                <option value="MXN">Mexican Peso </option>
              </select>
            </div>
          </div>
        
            <button onClick={(e) => dispatch(fetchExchangeAction(payload))} className=" rounded-[50px] shadow-xl border my-5 text-2xl  px-5 py-1   items-center justify-center mx-auto mt-20 bg-slate-100 hover:bg-gray-300 flex  ">Check Rate</button>
         
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Rates;
