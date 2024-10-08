import React from 'react';
import { loader } from '../assets';

const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 h-screen bg-black/70 flex items-center justify-center flex-col'>
        <img src={loader} alt="loader" className='w-[100px] h-[100px] objet-contain'/>
        <p className='text-white mt-[20px] font-epilogue font-bold text-[20px] text-center '>Transaction is in progress <br/> Please wait...</p>
    </div>
  )
}

export default Loader