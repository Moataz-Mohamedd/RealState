import React, { useContext, useState } from 'react';
import { RiWallet3Line , RiArrowDownSLine , RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import {HouseContext} from "./HouseContext";

const PriceRangeDropdown = () => {

  const {price , setPrice} = useContext(HouseContext);
  const [isOpen,setOpen] = useState(false);
  
  const prices =[
    {
      value : 'Price range (any)'
    } ,
    {
      value : '1000 - 140000'
    },
    {
      value : '140000 - 190000'
    },
    {
      value : '190000 - 230000'
    },
    {
      value : '230000 - 350000'
    },
    {
      value : '350000 - 600000'
    },
  ]

  return <Menu as='div' className='dropdown relative '  >
            <Menu.Button  onClick={()=>setOpen(!isOpen)} className='dropdown-btn w-full text-left'>
              <RiWallet3Line className='dropdown-icon-primary' />
              <div>
                <div className='text-[15px] font-medium leading-tight'>{price}</div>
                <div className='text-[13px]'>choose price range</div>
              </div>
                {
                  isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary' />
                  ):(
                  <RiArrowDownSLine className='dropdown-icon-secondary' />
                  )
                }
              
            </Menu.Button>

            <Menu.Items className="dropdown-menu">
              {prices.map((price , index) =>{
                  return(
                    <Menu.Item onClick={()=>setPrice(price.value)} className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                        {price.value}
                    </Menu.Item>
                  )
              })}
            </Menu.Items>

        </Menu>
};

export default PriceRangeDropdown;
