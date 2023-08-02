import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
 

const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';




const useGif = (tag) => {
  
    const[gif,setGif]=useState('');
    const [loading,setLoading]=useState(false);
  
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function fetchData(tag){
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data} = await axios.get(tag? tagMemeUrl:randomMemeUrl);
      const imageSource=data.data.images.downsized_large.url; 
      console.log(imageSource);
      setGif(imageSource);
      setLoading(false);
  
    }
  
    useEffect(()=>
      {
        fetchData();
      },[]
    )
 return {gif,loading ,fetchData}
   
    
  
}

export default useGif