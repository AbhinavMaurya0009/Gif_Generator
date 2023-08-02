import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const Random = () =>
{


  const{gif,loading,fetchData}=useGif();



function clickHandler(){
  fetchData();

}

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col item-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold mx-auto'>
       A Random GIF
      </h1>
      {
        loading?(<Spinner/>): (<img src={gif} width="500" height="300" className='ml-[130px]'/>)

      }


      <button onClick={clickHandler}
      className='bg-yellow-500 w-10/12 py-2 text-lg rounded-lg ml-[54px] mb-[20px]'>Genrate
      </button>

    </div>
  )

    }
export default Random