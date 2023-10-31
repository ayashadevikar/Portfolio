import React from 'react';
import { useState } from 'react';

const Header = () => {

  // adding the states 
const [isOpen, setIsOpen] = useState(false);

// //add the active class
const toggleActiveClass = () => {
  setIsOpen(!isOpen);
}

  return (
    <>
   
   
     {/* mobile view */}
     <div className='md:hidden flex justify-between  items-center mx-4 p-4'>
         
     <div className='p-2'>
          <button onClick={toggleActiveClass}>
     
              {isOpen ?   <i className="fa-solid fa-xmark"></i> : <i className="fas fa-bars hamburger-menu"></i>}
      
         </button >
       
  </div>

       {isOpen && (
       <div className='flex flex-col absolute top-12 border-2'>
           <a className='hover:text-light-orange' href="#home">Home</a>
           <a className='hover:text-light-orange' href="#work">Work</a>
           <a className='hover:text-light-orange' href="#experience">Experience</a>
           <a className='hover:text-light-orange' href="#contact">Contact</a>
      </div>
)}

</div>
       {/* laptop view */}
    <div className='bg-pink hidden md:flex justify-between px-64 sticky top-0 p-4'>
      <h2 className='font-bold'>Ayasha.</h2>

      <div className='flex gap-x-4'>
           <a className='hover:text-light-orange' href="#home">Home</a>
           <a className='hover:text-light-orange' href="#work">Work</a>
           <a className='hover:text-light-orange' href="#experience">Experience</a>
           <a className='hover:text-light-orange' href="#contact">Contact</a>
      </div>
     
        <a href="mailto:official.ayashadevikar8@gmail.com" alt="gmail">
          <button className='text-black hover:bg-black hover:text-white border-2 border-black px-2'>Email</button>
        </a>

        </div>
    </>
      
   
  )
}



export default Header
