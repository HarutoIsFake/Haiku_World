import React, { useState, useEffect } from 'react';
import { FaTh, FaHeart, FaUser, FaTools, FaHome, FaChevronDown, FaSearch, FaChevronUp   } from 'react-icons/fa';
import Home from './components/Home';
import F_Rules from './components/F_Rules';
import H_Write from './components/H_Write';
import {Routes,Route,Link} from 'react-router-dom'
import H_Read from './components/H_Read';
import H_Inspiration from './components/H_Inspiration';


function App() {
  



  return (
    <div className='bg-whito flex h-screen w-screen items-center justify-center'>
      <div className='relative overflow-hidden w-[414px] rounded-2xl bg-5 py-4 h-[696px] flex flex-col justify-start items-center'>
        <nav className='justify-between  px-4 items-center flex top-0 w-full h-[7%]'>
          <Link to='/' className='text-3xl hover:text-2 cursor-pointer font-bold text-0'>Haikus World</Link>
          <div className=' cursor-pointer'>
            <FaSearch color='white' size={25}></FaSearch>
            <h1>hello</h1>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='rules' element={<F_Rules/>}></Route>
          <Route path='read' element={<H_Read/>}></Route>
          <Route path='write' element={<H_Write/>}></Route>
          <Route path='inspiration' element={<H_Inspiration/>}></Route>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;