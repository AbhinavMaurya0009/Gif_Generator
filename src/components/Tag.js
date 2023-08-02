import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const Tag = () => {
 
  const[tag,setTag]=useState('love');
 
  const {gif,loading , fetchData}=useGif(tag);
function clickHandler(){
  fetchData(tag);

}
function changeHandler(event){
  setTag (event.target.value)
}

  return (
    <div className='w-1/2  rounded-lg border border-black
    flex flex-col item-center gap-y-5 mt-[15px] bg-blue-600'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold mx-auto'>
       A Random GIF
      </h1>
      {
        loading?(<Spinner/>): (<img src={gif} width="500" height="300" className='ml-[130px]'/>)

      }
      <input 
        className='w-10/12 py-2 text-lg rounded-lg ml-[54px] mb-[3px]'
        onChange={ changeHandler}
        value={tag}
      />


      <button onClick={clickHandler}
      className='bg-yellow-500 w-10/12 py-2 text-lg rounded-lg ml-[54px] mb-[20px]'>Genrate
      </button>

    </div>
  )
}

export default Tag