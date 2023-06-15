import React, { Children } from 'react';
import { useState , useEffect , createContext } from 'react';
import {housesData} from "../data";
import { Provider } from 'react';
export const HouseContext  = createContext()

const HouseContextProvider = ({children}) => {

const [houses     , setHouses     ] = useState(housesData);
const [country    , setCountry    ] = useState('Location (any)');
const [countries  , setCountries  ] = useState([]);
const [property   , setProperty   ] = useState("Property type (any)");
const [properties , setProperties ] = useState([]);
const [price      , setPrice      ] = useState("Price range (any)");
const [loading    , setLoading    ] = useState(false);

useEffect(()=> {
  const allCountries =houses.map((house)=>{  
    return (house.country)
  })
 // Remove Duplicates
 const uniqueCountires = ['Location (any)' ,...new Set(allCountries)];
 setCountries (uniqueCountires);
},[])

useEffect(()=>{
  const allPropeties = houses.map((property) =>{
    return (property.type)
  })

   // Remove Duplicates
   const uniqueProperties = ['Property type (any)' ,...new Set(allPropeties)];
   setProperties(uniqueProperties)
},[])

const handleClick = () =>{

  setLoading(true);
  
  const isDefault = (str) =>{
    return str.split(' ').includes('(any)');
  }
  // get first value of price and parse it to number
  const minPrice = parseInt(price.split(" ")[0]);

  //get second value of price which is the maximum and prase it to number
   const maxPrice = parseInt(price.split(" ")[2]);
  
   const newHouses = housesData.filter((house)=>{
     const housePrice = parseInt(house.price);
     
     if( house.country === country  &&
         house.type    === property &&
         house.price   >=  minPrice &&
         house.price   <=  maxPrice
       )
       {
        return house;
       }

       if(isDefault(country) && isDefault(property) && isDefault(price))
       {
        return house;
       }

       if(!isDefault(country) && isDefault(property) && isDefault(price) && house.country === country )
       {
        return house;
       }

       if(isDefault(country) && !isDefault(property) && isDefault(price) && house.type === property)
       {
        return house;
       }

       if(isDefault(country) && isDefault(property) && !isDefault(price) )
       {
          if(housePrice >= minPrice && housePrice <= maxPrice) 
            {
              return house;
            }
       }

       if(!isDefault(country) && !isDefault(property) && isDefault(price))
       {
         if(house.country === country && house.type === property)
         {
          return house;
         }
       }

       if(!isDefault(country) && isDefault(property) && !isDefault(price))
       {
         if(house.country === country && housePrice >= minPrice && housePrice <= maxPrice )
         {
          return house;
         }
       }

       if(isDefault(country) && !isDefault(property) && !isDefault(price))
       {
         if(house.type === property && housePrice >= minPrice && housePrice<=maxPrice)
         {
           return house;
         }
       }
   })

    setTimeout(()=>{
      return (newHouses.length < 1 
      ? setHouses([]) 
      : setHouses(newHouses),setLoading(false) 
      )
    },300);
}

 return(
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
      loading,
    }}>
            {children}
    </HouseContext.Provider>
 )
};

export default HouseContextProvider;
