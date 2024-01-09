import React from 'react';
import {AiFillGithub, AiOutlineArrowUp} from "react-icons/ai";

const Footer = () => {
  return (
<>
   {/* // mobile view */}
   <footer className='md:hidden flex flex-col gap-y-2 items-center bg-black text-white min-h-[100px] p-2'>
   
      <div className='flex flex-col gap-y-2'>
           <h2>Ayasha Devikar</h2>
           <p className='w-24 text-center'>Motivation is temporary, but discipline last forever.</p>
      </div>

   {/* <div className='border-x-[1px] border-white h-12'></div> */}
   <aside className='flex gap-x-8 items-center'>
     <div className='flex flex-col gap-y-4'>
         <h2>Social Media</h2>

         <article>
            <a href="https://github.com/ayashadevikar" target={"blank"}>
               <AiFillGithub />
            </a>

            {/* <a href="https://github.com/ayashadevikar" target={"blank"}>
               <AiFillGithub />
            </a> */}
         </article>

     </div>
         <a href="#home">
          <AiOutlineArrowUp />
         </a>
   </aside>
   
</footer>



   {/* // laptop view */}
     <footer className='hidden md:flex justify-evenly items-center bg-black text-white min-h-[100px]'>
          <div className='border-x-[1px] border-white h-12'></div>
          <div>
                <h2>Ayasha Devikar</h2>
                <p>Motivation is temporary, but discipline last forever.</p>
          </div>

          <div className='border-x-[1px] border-white h-12'></div>
          <aside className='flex gap-x-8 items-center'>
            <div className='flex flex-col gap-y-4'>
                <h2>Social Media</h2>

                <article>
                   <a href="https://github.com/ayashadevikar" target={"blank"}>
                      <AiFillGithub />
                   </a>

                  
                </article>

            </div>
                <a href="#home">
                 <AiOutlineArrowUp />
                </a>
          </aside>
          
     </footer>
     </>
  )
}

export default Footer
