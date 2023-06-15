import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { housesData } from '../data';
import { BiArea, BiBath, BiBed } from 'react-icons/bi';

const PropertyDetails = () => {
  const {id} = useParams();


  const house = housesData.find((house)=> { 
    if(house.id === parseInt(id))
    {
      return house;
    }
  }) 


  return<section>
          <div className='container mx-auto min-h-[800px] mb-14'>

            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div>
                <h2 className='text-2xl font-semibold'>{house.name}</h2>
                <h3 className='text-lg mb-4'>{house.address}</h3>
              </div>
              <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm' >
                <div className='bg-green-500 rounded-full px-3 text-white'>{house.type}</div>
                <div className='bg-violet-500 rounded-full px-3 text-white'>{house.country}</div>
              </div>
              <div className='text-3xl font-semibold text-violet-600'>$ {house.price}</div>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
              <div className='max-w-[768px]'>
                <div className='mb-8'>
                  <img src={house.imageLg} />
                </div>
                <div className='flex gap-x-6 text-violet-800 mb-6'>
                  <div className='flex gap-x-2 items-center' >
                    <BiBed  color='#ff0000' className='text-2xl' />
                    <div>{house.bedrooms}</div>
                  </div>
                  <div className='flex gap-x-2 items-center' >
                    <BiBath className='text-2xl' />
                    <div>{house.bathrooms}</div>
                  </div>
                  <div className='flex gap-x-2 items-center' >
                    <BiArea className='text-2xl' />
                    <div>{house.surface}</div>
                  </div>
                </div>
                <div>{house.description}</div>
              </div>

              <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                <div className='flex items-center gap-x-4 mb-8'>
                  <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                    <img src={house.agent.image} alt='' />
                  </div>
                  <div>
                    <div className='font-bold text-lg'>{house.agent.name}</div>
                    <Link to='' className='text-violet-700 text-sm' >View Listings</Link>
                  </div>
                </div>
                <form className='flex flex-col gap-y-5'>
                  <input className='border border-gray-300 focus:border-violet-700 outline-none 
                                    rounded w-full px-4 h-14 text-sm ' type='text' placeholder='Name* ' />
                  <input className='border border-gray-300 focus:border-violet-700 outline-none 
                                    rounded w-full px-4 h-14 text-sm ' type='text' placeholder='Email*' />
                  <input className='border border-gray-300 focus:border-violet-700 outline-none 
                                    rounded w-full px-4 h-14 text-sm ' type='text' placeholder='Phone*' />
                  <textarea className='border border-gray-300 focus:border-violet-700 outline-none 
                                       resize-none rounded w-full p-4 h-36 text-sm text-gray-400 ' 
                                       type='text' placeholder='Message*' defaultValue='Hello i am interested in [Modern apartment]'>
                  </textarea>
                  <div className='flex gap-x-2'>
                    <button className='bg-violet-800 text-white p-4 w-full rounded text-xs hover:bg-violet-900 hover:shadow-lg  transition ' >Send message</button>
                    <button className='text-violet-700 hover:text-violet-500 border border-violet-700  hover:border-violet-300  transition w-full p-4 rounded text-xs  '>Call</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
  </section>
};

export default PropertyDetails;
