
import React from 'react';
import { useHistory } from 'react-router-dom';
import heroVid from '../assets/video.mp4';
const Home = () => {
    const history=useHistory();
    return ( 
        <div className='w-full h-[90vh] top-[90px]'>
      <video
        className='object-cover h-full w-full absolute -z-10'
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className='w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center'>
        <div>
             <h1>কারিগরি বোর্ড</h1>
        <h1 className='py-2'>
          <span className='blue'>ডিপ্লোমা</span> রেজাল্ট
        </h1>
        <p className='text-xl py-4'>
            ৪র্থ,৬ষ্ঠ সেমিস্টার
        </p>
        <div>
          <button onClick={()=>history.push('/result')} className='m-2'>রেজাল্ট দেখুন</button>
          {/* <button className='m-2'>FAQ</button> */}
        </div>
        <div>
            
        </div>
        </div>
       
      </div>
    </div>
     );
}
 
export default Home;