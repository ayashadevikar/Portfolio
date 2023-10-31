import React from 'react';

import { useState } from 'react';
import toast from "react-hot-toast";

const Contact = () => {
 
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, message);
         toast.success("Message Sent");
   }

  return (
    <>
    <div id="contact" className='flex flex-col gap-y-1  md:grid grid-cols-2 bg-pink'>
        <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-y-4'>
             <h2 className='text-center uppercase text-3xl font-light'>Contact Me</h2>
             <input className='p-2 w-72' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' required />
             <input className='w-72 p-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required  />
             <input className='w-72 p-2' type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required />
        
              <button type="submit" className='bg-orange text-white p-2 px-32'>Send</button>
        </form>

        <div className='grid place-items-center bg-dark-blue'>
            <img className='w-[70%] h-[70%]  object-contain' src='./images/vg.png' alt="Graphics" />
        </div>

        </div> 
    </>
  )
}

export default Contact
