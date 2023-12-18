import React, { useEffect, useState } from 'react'
import { supabase } from '../createClient'
import { FaArrowLeft } from 'react-icons/fa';
import {Link} from 'react-router-dom';


const H_Read = () => {
    const [haikus,setHaikus] = useState([]);


    useEffect(()=>{
        fetchHaiku()
    }, [])

    async function fetchHaiku(){
        try{
        const{data} = await supabase
        .from('haikus')
        .select('*')
        setHaikus(data)
        console.log(haikus)
        } catch(e){
            console.error('Error fetching haikus:', e)
        }

    }
  return (
    <div className='w-full h-full'>
        <div className='flex overflow-auto gap-3 px-6 py-6 flex-col items-center justify-start h-[600px] w-full'>
            <Link to='/' className='w-full flex justify-start text-2 hover:text-0'>
                <FaArrowLeft size={25}/>
            </Link>
            {
                haikus.map((haiku,index)=>(
                    <div key={index} className='w-full bg-4 rounded-md  gap-2 cursor-pointer transition-all hover:brightness-110 flex flex-col items-start justify-center px-4 py-2'>
                        <h1 className='font-bold text-2xl text-2'>{index+1}. {haiku.title} </h1>
                        <h2 className='text-2'>{haiku.ichi}</h2>
                        <h2 className='text-2'>{haiku.ni}</h2>
                        <h2 className='text-2'>{haiku.san}</h2>
                    </div>
                ))
            }
            
            
        </div>
    </div>
  )
}

export default H_Read
