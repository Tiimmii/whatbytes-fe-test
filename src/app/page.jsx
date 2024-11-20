import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <main className='background min-h-screen flex flex-col text-sm sm:text-base'>
      <nav className='border-b-2 border-customBorder flex justify-between p-4'>
        <div className='flex items-center justify-center gap-2'>
          <Image 
          src="/images/whatbytes_icon.png" 
          alt='whatbytes icon' 
          width={40} 
          height={40}
          className='whatbytes-image'
          />
          <h1 className='capitalise font-bold md:text-1xl lg:text-2xl'>WhatBytes</h1>
        </div>
        <div className='flex items-center justify-center gap-2 border-2 border-customBorder p-1 rounded-md'>
          <Image 
          src="/images/profile_picture.jpg" 
          alt='profile picture' 
          width={30} 
          height={5}
          className='profile-image'
          />
          <p className='capitalise font-bold'>Rahil Siddique</p>
        </div>
      </nav>
    </main>
  )
}

export default page
