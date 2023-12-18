import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const H_Inspiration = () => {
  return (
    <div className='w-full h-full'>
        <div className='flex overflow-auto gap-3 px-6 py-6 flex-col items-center justify-start h-[600px] w-full'>
            <Link to='/' className='w-full flex justify-start text-2 hover:text-0'>
                <FaArrowLeft size={25}/>
            </Link>
            <h1 className='text-2'>
                This Feature is not Supported Because you are damn Cute!!!
            </h1>
            <p className='text-2'>just kidding, I am not in mood to add this feature. Btw, Thanks!!!</p>
            
        </div>
    </div>
  )
}

export default H_Inspiration
