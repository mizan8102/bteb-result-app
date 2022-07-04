import React from 'react';
import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='w-full h-[90vh] text-white bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 md:flex'>
        <div>
          <h1>Developed By </h1>
          <p>
           Mizanur Rahman. <span className="blue">Student </span> of <span className="blue"> Feni </span>  
           Polytechnic Institute.
          </p>
        </div>
        <div className='flex justify-center w-full py-16'>
            <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Developers;