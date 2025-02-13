import React from 'react';
import data from "../assets/data.json";

const Work = () => {
  return (
    <>
       <div id="work" className='flex flex-col py-6 md:grid grid-cols-4 gap-y-6  place-content-center place-items-center mx-60'>
       {data.projects.map((i) => (
              <div key={i.title} className="workItem border-2 flex flex-col items-center gap-2 rounded-md w-60 text-center p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
                <img className='h-[10rem] w-[20rem]' src={i.imgSrc} alt={i.title}/>
             
                  <h3 className='font-bold'>{i.title}</h3>
                  <p className=''>{i.description}</p>
                  <a className='bg-blue text-white p-1 px-2 rounded-md' target={"blank"} href={i.URL}>
                    View Demo
                  </a>
              
              </div>
             
            ))}
       </div>
    </>
  )
}

export default Work
