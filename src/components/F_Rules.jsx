import React, { useEffect, useState } from 'react'
import { supabase } from '../createClient'
import {Link} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';

const F_Rules = () => {

    const [rules,setRules] = useState([]);


    useEffect(()=>{
        fetchRules()
    }, [])

    async function fetchRules(){
        try{
        const{data} = await supabase
        .from('rules')
        .select('*')
        setRules(data)
        console.log(rules)
        } catch(e){
            console.error('Error fetching rules:', e)
        }

    }
  return (
    <div className='w-full h-full'>
        <div className='flex overflow-auto gap-3 px-6 py-6 flex-col items-center justify-start h-[600px] w-full'>
            <Link to='/' className='w-full flex justify-start text-2 hover:text-0'>
                <FaArrowLeft size={25}/>
            </Link>
            {
                rules.map((rule,index)=>(
                    <div key={index} className='w-full bg-4 rounded-md  gap-2 cursor-pointer transition-all hover:brightness-110 flex flex-col items-start justify-center px-4 py-2'>
                        <h1 className='font-bold text-2xl text-2'>{index+1}. {rule.title} </h1>
                        <p className='text-2 text-justify text-sm'> {rule.paragraph}</p>
                    </div>
                ))
            }
            
            
        </div>
    </div>
  )
}

export default F_Rules
