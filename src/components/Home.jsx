import React from 'react';
import { motion } from "framer-motion";
import Typewriter  from 'typewriter-effect';
import { BsArrowUpRight } from "react-icons/bs";


const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (

    <>
  
     {/* mobile view */}
     <div id="home"  className='md:hidden flex flex-col items-center bg-pink'>
        <section>
              <div>
                   <motion.h1 {...animations.h1}>
                       <h1 className='font-bold text-4xl mb-4'>Hi, I Am <br /> Ayasha Devikar</h1> 
                   </motion.h1>

                <div className='flex flex-col gap-y-4'>
                   <Typewriter 
                      options={{
                         strings: ["A Developer", "A Designer", "A Creator"],
                         autoStart: true,
                         loop: true,
                         cursor: "",
                         wrapperClassName: "typewriterpara",
                      }}
                   />

                   <div className='flex gap-x-4'>
                        <a href='mailto:ayashadevikar8@gmail.com' className='bg-light-orange rounded-md p-2 px-4 text-white'>Hire Me</a>
                        <a href="#work" className='flex' >
                            Projects <BsArrowUpRight />
                        </a>
                        
                   </div>

                  
                   <div>
                        <span>ayashadevikar8@gmail.com</span>
                   </div>

                 </div>
              </div>
        </section>

        <section>
             <img className=' w-[40vmax] object-contain h-[20vmax]' src={'../images/logo.jpg'} alt="Ayasha" />
         </section>
      
       
    </div>

    {/* laptop view */}
    <div id="home"  className='hidden md:flex justify-evenly items-center bg-pink'>
        <section>
              <div>
                   <motion.h1 {...animations.h1}>
                       <h1 className='font-bold text-4xl mb-4'>Hi, I Am <br /> Ayasha Devikar</h1> 
                   </motion.h1>

                <div className='flex flex-col gap-y-4'>
                   <Typewriter 
                      options={{
                         strings: ["A Developer", "A Designer", "A Creator"],
                         autoStart: true,
                         loop: true,
                         cursor: "",
                         wrapperClassName: "typewriterpara",
                      }}
                   />

                   <div className='flex gap-x-4'>
                        <a href='mailto:ayashadevikar8@gmail.com' className='bg-light-orange rounded-md p-2 px-4 text-white'>Hire Me</a>
                      <a href="#work" className='flex' >
                            Projects <BsArrowUpRight />
                        </a>
                        
                   </div>

                  
                   <div>
                        <span>ayashadevikar8@gmail.com</span>
                   </div>

                 </div>
              </div>
        </section>

        <section>
             <img className=' w-[40vmax] object-contain h-[20vmax]' src="./images/logo.jpg" alt="Ayasha" />
         </section>
      
       
    </div>
    </>
  )
}

export default Home
