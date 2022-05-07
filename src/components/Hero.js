import React from 'react'
import banner2 from "../assets/banner-2.svg"

function Hero() {
  return (
    <div className='bg-discord_blue pb-8 md:pb-0'>
       <div className='p-7 py-9 h-screen md:flex relative'>
           <div className='flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center'>
               <h1 className='text-5xl text-white font-bold '>Imagine a Place</h1>
               <h2 className='text-white text-lg font-medium lg:max-w-3xl w-full'>...where you can belong to a school club, a gaming group, or a worldwide art community.
                    Where just you and a handful of friends can spend time together.
                    A place that makes it easy to talk every day and hang out more often.
                </h2>
                <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
                    <button className='bg-white rounded-full w-60 font-medium flex items-center justify-center p-4 text-lg hover:shadow-2xl'>Download for windows</button>
                    <button className='bg-black text-white rounded-full w-72 font-medium flex items-center justify-center p-4 text-lg hover:shadow-2xl'>Open in Browser</button>
                </div>
           </div>
           <div className='flex-grow'>
               <img src={banner2} alt='banner-2' className='hidden md:inline absolute'/>
           </div>
       </div>
    </div>
  )
}

export default Hero