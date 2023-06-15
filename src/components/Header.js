import React from 'react';
import logo from "../assets/img/logo.svg";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <header className='py-6 mb-12 border '>
     <div className='container mx-auto  flex justify-between items-center'>
        <Link to="/"> <img src={logo} /> </Link>
    
       <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition'  to="">Log in</Link> 
          <Link className='rounded-lg bg-violet-700 px-4 py-3 text-white hover:bg-violet-800 duration-400 transition '  to="">Sign up</Link>
       </div>
     </div>
  </header>
  )
};

export default Header;
