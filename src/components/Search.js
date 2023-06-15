import React, { useContext } from 'react';
import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";
import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';



const Search = () => {
  const {handleClick} = useContext(HouseContext)  
  return (
    <div className='flex flex-col px-[30px] py-[6] max-w-[1170px] mx-auto lg:flex-row  
                    justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1
                   bg-white lg:bg-transparent lg:backdrop-blur rounded-lg  items-center '>

      <CountryDropdown />
      <PropertyDropdown/>
      <PriceRangeDropdown/>

      <button onClick={()=>handleClick()} className='bg-violet-700 text-white rounded-xl hover:bg-violet-800 transition w-full
                         lg:max-w-[130px] h-[50px] flex justify-center items-center' >
          <RiSearch2Line/>
      </button>

    </div>
  )
};

export default Search;
