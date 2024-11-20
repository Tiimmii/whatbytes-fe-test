import React from 'react'
import icon from './images/whatbytes_icon.png'
import profile_pic from './images/profile_picture.jpg'

const page = () => {
  return (
    <main className='background min-h-screen flex flex-col text-sm sm:text-base'>
      <nav className='border-b-2'>
        <div>
          <img src={icon} alt='whatbytes icon'/>
          <h1>WhatBytes</h1>
        </div>
        <div>
          <img src={profile_pic} alt='profile picture'/>
          <p>Rahil Siddique</p>
        </div>
      </nav>
    </main>
  )
}

export default page
