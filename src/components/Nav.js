import React, { useEffect, useState } from 'react'
import "./Nav.css"
export default function Nav() {
   
   const [show,setShow] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll",() => {
         if(window.scrollY > 50){
            setShow(true);
         }else{
            setShow(false);
         }
      })

      return () => {
         window.removeEventListener("scroll", ()=> {

         })
      }
 
   },[])


  return (
   <nav className={`nav ${show && "nav__black"}`}>
      <img alt='netflix_logo' src='http://www.w3.org/2000/svg' className='nav__logo' onClick={() => window.location.reload()}/>
      <img alt='User logged' src='' className='nav__avatar' />
   </nav>
   )
}
