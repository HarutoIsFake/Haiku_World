import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FiMoreHorizontal, FiMoreVertical } from 'react-icons/fi';
import { FaTimes, FaPlus, FaArrowLeft } from 'react-icons/fa';
import { supabase } from '../createClient'


const H_Write = () => {

  const [isInputOpen,setIsInputOpen] = useState(false);
  const [haikus,setHaikus] = useState([]);

  useEffect(()=>{
        fetchHaiku()
    }, [])

    async function fetchHaiku(){
        try{
        const{data} = await supabase
        .from('written_haiku')
        .select('*')
        setHaikus(data)
        console.log(haikus)
        } catch(e){
            console.error('Error fetching haikus:', e)
        }

    }

   /*const [title,setTitle] = useState("");
  const [ichi,setIchi] = useState("");
  const [ni,setNi] = useState("");
  const [san,setSan] = useState("");
  
  
  const [haikus,setHaikus] = useState([]);
  const [haiku,setHaiku] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault(); // Make sure to include this line
    haiku.title = title;
    haiku.ichi = ichi;
    haiku.ni = ni;
    haiku.san = san;
  
    // Add logic to add data to Supabase here
    try {
      const { data, error } = await supabase
        .from('written_haikus')
        .insert([haiku]);
      setHaiku({});
      if (error) {
        console.error('Error adding data to Supabase:', error.message);
      } else {
        console.log('Data added successfully:', data);
      }
    } catch (error) {
      console.error('Error adding data to Supabase:', error.message);
    }
  };*/


    const [title, setTitle] = useState('');
    const [ichi, setIchi] = useState('');
    const [ni, setNi] = useState('');
    const [san, setSan] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showSuccessfulAlert, setShowSuccessfulAlert] = useState(false);
  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title.trim() === '' || ichi.trim() === '' || ni.trim() === '' || san.trim() === '') {
        // If any input is empty, prevent submission
        setShowAlert(true);
        return;
      }
  
      // Add logic to add data to Supabase here
      try {
        const { data, error } = await supabase
          .from('haikus') // Replace 'your-table-name' with the actual table name
          .insert([{ title: title, ichi:ichi, ni: ni, san: san }]); // Replace 'column_name' with the actual column name
          
          
          setTitle('')
          setIchi('')
          setNi('')
          setSan('')
          setShowSuccessfulAlert(true)
        if (error) {
          console.error('Error adding data to Supabase:', error.message);
        } else {
          console.log('Data added successfully:', data);
          fetchHaiku()
        }
      } catch (error) {
        console.error('Error adding data to Supabase:', error.message);
      }
    };
  
    const CustomAlert = ({ message, onClose }) => (
      <div className='w-screen bg-5 absolute bg-opacity-50 top-[-60%] h-screen flex justify-center items-center'>
        <div className="w-full flex gap-3 flex-col items-center bg-3 py-4 px-6 ">
          <p className='text-2 text-2xl font-bold'>{message}</p>
          <button className='bg-2 text-5' onClick={onClose}>Close</button>
        </div>
      </div>
    );
    const closeAlert = () => {
      setShowAlert(false);
    };
    const SuccessfulAlert = ({ message, onClose }) => (
      <div className='w-screen bg-5 absolute bg-opacity-50 top-[-60%] h-screen flex justify-center items-center'>
        <div className="w-full flex gap-3 flex-col items-center bg-2 py-4 px-6 ">
          <p className='text-4 text-2xl font-bold'>{message}</p>
          <Link to='/read' className='bg-4 py-3 rounded-md px-6 text-2' onClick={onClose}>Close</Link>
        </div>
      </div>
    );
    const closeSuccessfulAlert = () => {
      setShowSuccessfulAlert(false);
    };
  return (
    <div className='relative h-full flex justify-center items-start w-full '>
      <div className='flex overflow-hidden gap-3 px-6 py-6 flex-col items-center justify-start h-[600px] w-full'>
            <Link to='/' className='w-full  flex justify-start text-2 hover:text-0'>
                <FaArrowLeft size={25}/>
            </Link>
            <div className={`  flex  flex-col bg-2 bg-opacity-40 backdrop-blur-md rounded-md px-4 py-4 justify-start items-center gap-4`}>
              <h1 className='text-2xl font-bold mb-4 mt-6 text-2'>Composing your Emotions</h1>
              <form className='w-full items-center flex justify-center' >
                <label className='text-xl font-bold text-2 flex justify-between gap-2 items-center'>
                  Title:
                  <input className='w-[80%] text-4 outline-none px-4 py-2 rounded-md' type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </label>
              </form>
              <form className='w-full items-center flex justify-center' >
                <label className='text-xl font-bold text-2 flex justify-between gap-2 items-center'>
                  Ichi:
                  <input className='w-[80%] text-4  outline-none px-4 py-2 rounded-md' type="text" value={ichi} onChange={(e) => {setIchi(e.target.value)}}/>
                </label>
              </form>
              <form className='w-full items-center flex justify-center' >
                <label className='text-xl font-bold text-2 flex justify-between gap-2 items-center'>
                  Ni:
                  <input className='w-[80%] text-4  outline-none px-4 py-2 rounded-md' type="text" value={ni} onChange={(e) => {setNi(e.target.value)}}/>
                </label>
              </form>
              <form className='w-full items-center flex justify-center' >
                <label className='text-xl font-bold text-2 flex justify-between gap-2 items-center'>
                  San:
                  <input className='w-[80%] text-4  outline-none px-4 py-2 rounded-md' type="text" value={san} onChange={(e) => {setSan(e.target.value)}}/>
                </label>
              </form>
            
              <div className='w-full  mt-6 flex gap-2 justify-between'>
                <button 
                  onClick={()=> setIsInputOpen(false)} 
                  className='bg-3 text-2 w-[30%] px-6 py-4 '>Cancle</button>
                <button 
                  onClick={(e)=>handleSubmit(e)}
                  className='bg-2 text-4 w-[65%] px-6 py-4 '>Publish</button>
              </div>
              {showAlert && <CustomAlert message="Please fill in all the fields" onClose={closeAlert} />}
              {showSuccessfulAlert && <SuccessfulAlert message="Your Haiku was save Successfully!" onClose={closeSuccessfulAlert} />}
            </div>
      </div>
      
    </div>

    
  )
}

export default H_Write
