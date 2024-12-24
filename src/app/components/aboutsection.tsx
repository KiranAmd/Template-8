import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoCreditCard } from "react-icons/go";
import { LuSprout } from "react-icons/lu";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-center mb-12">
        What Makes Our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-inter text-[#007580] flex items-center justify-center pt-5">
            <FaTruckFast className="text-[#007580] mr-1 w-5 h-5 text-left" />
            Next day as standard
          </h3>
          <p className="text-[16px] font-inter text-[rgb(0,117,128)]  mt-4 text-left">
            Order before 3pm and get <br></br>
             your order the next day as<br></br>
            standard
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-inter text-[#007580] flex items-center justify-center pt-5">
            <FaRegCheckCircle className="text-[#007580] mr-2" />
            Made by true artisans
          </h3>
          <p className="text-[16px] font-inter text-[#007580] mt-4 text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-inter  text-[#007580] flex items-center justify-evenly pt-5">
            <GoCreditCard className="text-[#007580]  " />
            Unbeatable prices
          </h3>
          <p className="text-[16px] font-inter text-[#007580] mt-4 text-left">
            For our materials and<br></br>
            quality you won’t find better<br></br>
            prices anywhere
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <h3 className="text-[20px] font-inter text-[#007580] flex items-center justify-center pt-5">
            <LuSprout className="text-[#007580] mr-2 h-7 w-7" />
            Recycled packaging
          </h3>
          <p className="text-[16px] font-inter text-[#007580] mt-4">
            We use 100% recycled material to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
