import React, { useEffect } from 'react'
import instance from '../API/axios';

export default function Row({isLargeLow , title, id , fetchUrl}) {
   useEffect(() => {
      fetchMovieData();
   },[])

   const fetchMovieData = async ( ) => {
      const request = await instance.get(fetchUrl)
      console.log(request);
   }

   return (
    <div>
      
    </div>
  )
}
