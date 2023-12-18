import React, { useState, useEffect } from 'react';
import { FaBookOpen, FaRuler, FaLightbulb  , FaPen } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Home = () => {
    const [currentSeason, setCurrentSeason] = useState('');
    
    useEffect(() => {
        const getSeason = () => {
        const currentMonth = new Date().getMonth() + 1; // Months are zero-indexed, so we add 1

        if (currentMonth >= 3 && currentMonth <= 5) {
            setCurrentSeason('春 (Spring)');
        } else if (currentMonth >= 6 && currentMonth <= 8) {
            setCurrentSeason('夏 (Summer)');
        } else if (currentMonth >= 9 && currentMonth <= 11) {
            setCurrentSeason('秋 (Autumn)');
        } else {
            setCurrentSeason('冬 (Winter)');
        }
        };

    getSeason();
  }, []);
    
  return (
    <div className='w-full flex flex-wrap justify-center  gap-3 items-center'> 
        <h1 className='text-2 mt-10 mb-10 text-2xl font-bold'>Current Season: {currentSeason}</h1>
        <Link to='read' className='bg-3 hover:brightness-125 cursor-pointer flex transition items-center justify-center flex-col  rounded-md w-[42%] h-[170px]'>
            <FaBookOpen color='white' size={50}/>
            <h1 className='text-0  text-xl font-bold'>Read</h1>
            <p className='text-4 text-center font-semibold text-xs'>Read Haikus</p>
        </Link>
        <Link to='write' className='bg-3 hover:brightness-125 cursor-pointer flex transition items-center justify-center flex-col  rounded-md w-[42%] h-[170px]'>
            <FaPen color='white' size={50}/>
            <h1 className='text-0  text-xl font-bold'>Write</h1>
            <p className='text-4 text-center font-semibold text-xs'>Compose Haikus</p>
        </Link>
        <Link to='rules' className='bg-3 hover:brightness-125 cursor-pointer flex transition items-center justify-center flex-col  rounded-md w-[42%] h-[170px]'>
            <FaRuler color='white' size={50}/>
            <h1 className='text-0  text-xl font-bold'>Rules</h1>
            <p className='text-4 text-center font-semibold text-xs'>Fundanmental rules</p>
        </Link>
        <Link to='inspiration' className='bg-3 hover:brightness-125 cursor-pointer flex transition items-center justify-center flex-col  rounded-md w-[42%] h-[170px]'>
            <FaLightbulb  color='white' size={50}/>
            <h1 className='text-0  text-xl font-bold'>Inspiration</h1>
            <p className='text-4 text-center font-semibold text-xs'>Get more ideas</p>
        </Link>
        
        
    </div>
  )
}

export default Home
