import React from 'react';
import vg from "../assets/vg.png";

const Contact = () => {
  return (
    <>
    <div className='grid grid-cols-2 bg-pink'>
        <form className='flex flex-col items-center justify-center gap-y-4'>
             <h2 className='text-center uppercase text-3xl font-light'>Contact Me</h2>
             <input className='p-2 w-72' type="text" placeholder='Your Name' required />
             <input className='w-72 p-2' type="email" placeholder='Your Email' required  />
             <input className='w-72 p-2' type="text" placeholder='Your Message' required />
        
              <button type="submit" className='bg-orange text-white p-2 px-32'>Send</button>
        </form>

        <div className='grid place-items-center bg-dark-blue'>
            <img className='w-[70%] h-[70%]  object-contain' src={vg} alt="Graphics" />
        </div>

        </div> 
    </>
  )
}

export default Contact
