import React from 'react'

const Header = () => {
  return (
    <>
       
    <div className='bg-pink flex justify-between px-64 sticky top-0'>
      <h2 className='font-bold'>Ayasha.</h2>

      <div className='flex gap-x-4'>
           <a className='hover:text-light-orange' href="#home">Home</a>
           <a className='hover:text-light-orange' href="#">Work</a>
           <a className='hover:text-light-orange' href="#">Experience</a>
           <a className='hover:text-light-orange' href="#">Contact</a>
      </div>

      <a href="mailto:official.ayashadevikar8@gmail.com">
          <button className='text-black hover:bg-black hover:text-white border-2 border-black px-2'>Email</button>
        </a>

        </div>
    </>
      
   
  )
}



export default Header
