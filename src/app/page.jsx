import React from 'react'

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const page = () => {
  return (
    <main className='main background min-h-screen flex flex-col text-sm sm:text-base'>
      <Navbar/>
      <Sidebar/>
    </main>
  )
}

export default page
