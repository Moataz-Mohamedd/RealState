import React from 'react';
import image from "../assets/img/house-banner.png";
import Search from "./Search";
const Banner = () => {
  return(
    <section className='h-full  max-h-[640px] mb-8 xl:mb-24 ' >
        <div className='flex flex-col md:flex-row'>
          <div className='lg:ml-8 xl:ml-[140px] flex flex-col justify-center lg:items-start text-center lg:text-left flex-1 px-4 lg:px-0  '>
            <h1 className='text-4xl lg:text-[58px] mb-6 font-semibold leading-none '><span className='text-violet-900 '>Rent</span> Your Dream House With Us.</h1>
            <p className='  mb-8 '> Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. 
             </p>
          </div>
          <div className='hidden  flex-1 lg:flex   justify-end items-end'>
            <img src={image} />
          </div>
        </div>
        <Search/>
    </section>
  )
};

export default Banner;
