
import React from 'react';
import FormComponent from './FormComponent'
// import heroVid from '../assets/video.mp4';
import gify from '../assets/video.gif';

const ResultComponent = () => {
    return ( 
        <div className='w-full h-[90vh] top-[90px] transition duration-150 ease-in-out'>
      <img  className='object-cover h-full w-full absolute -z-10'
        src={gify}
        alt=""
        />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <FormComponent />
       </div>
    </div>
     );
}
 
export default ResultComponent;