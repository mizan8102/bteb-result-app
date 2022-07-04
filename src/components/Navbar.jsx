import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return ( 
        <div className='w-full h-[90px] bg-black'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
          <div>
            <h1 className='text-[#00d8ff]'><Link to={'/'}>BTEB RESULT</Link> </h1>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex text-white items-center'>
              <li><Link to={'/result'}>Result</Link> </li>
              <li><Link to={'/developers'} >Developers</Link> </li>
              {/* <li>Community</li>
              <li><Link to={'/about'}>About</Link> </li> */}
              {/* <button className='ml-4'>Use Defi</button> */}
            </ul>
          </div>
  
          {/* Hamburger menu */}
          <div onClick={handleNav} className='block md:hidden'>
              {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
            
            
          </div>
  
          {/* Mobile Menu */}
          <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
      'absolute left-[-100%]'}>
            <ul>
            <li className='text-2xl'><Link to={'/result'}>Result</Link> </li>
              <li className='text-2xl'><Link to={'/developers'} >Developers</Link> </li>
              {/* <li className='text-2xl'>Community</li>
              <li className='text-2xl'><Link to={'/about'}>About</Link> </li> */}
              {/* <li ><a href="#about">Platform</a></li>
              <li className='text-2xl'>Developers</li>
              <li className='text-2xl'>Community</li>
              <li className='text-2xl'>About</li> */}
              {/* <button className='m-8'>Use Defi</button> */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
export default Navbar;