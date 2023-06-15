import React from 'react';
import HouseList from './HouseList';
import {BiBed ,BiBath ,BiArea } from "react-icons/bi"; 

const House = ({house}) => {
  const {image , type , country , address , bedrooms , bathrooms , surface , price} = house;
  return(
    <div className='bg-white p-5 shadow-1 rounded-lg rounded-tl-[70px] w-full 
                      max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={image} /> 

      <div className='flex mb-4 gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full px-3 text-white'>{type}</div>
        <div className='bg-violet-500 rounded-full px-3 text-white'>{country}</div>
      </div>

      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>

      <div className='flex gap-x-3 my-4'>
         <div className='flex gap-x-1 items-center text-gray-600'>
           <div className='text-[20px]'><BiBed /></div>
           <div>{bedrooms}</div>
         </div>

         <div className='flex gap-x-1 items-center text-gray-600'>
           <div className='text-[20px]'><BiBath /></div>
           <div>{bathrooms}</div>
         </div>

         <div className='flex gap-x-1 items-center text-gray-600'>
           <div className='text-[20px]'><BiArea /></div>
           <div>{surface}</div>
         </div>
      </div>
      
      <div className='text-lg font-semibold text-violet-600 mb-4'>$ {price}</div>
    </div>
  )
};

export default House;
