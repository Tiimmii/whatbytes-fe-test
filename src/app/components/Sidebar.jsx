import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar-container border-r-[1px] border-customBorder min-h-full xs:w-12 xs:hover:w-40 sm:w-12 sm:hover:w-40 md:w-40 lg:w-60 overflow-x-hidden transition duration-300 ease-in-out'>
      <div className='sidebar flex flex-col gap-2 font-medium text-[16px] pr-4'>
        <div className='flex items-center gap-5 hover:bg-customHover hover:text-blue-600 hover:rounded-tr-[4rem] hover:rounded-br-[4rem] pl-6 pt-6 pb-6'>
            <i className="fa-solid fa-chart-simple"></i> 
            <p >Dashboard</p>
        </div>
        <div className='flex items-center gap-5 hover:bg-customHover hover:text-blue-600 hover:rounded-tr-[4rem] hover:rounded-br-[4rem] pl-6 pt-6 pb-6'>
            <i className="fa-solid fa-award"></i>
            <p >Skill Test</p>
        </div>
        <div className='flex items-center gap-5 hover:bg-customHover hover:text-blue-600 hover:rounded-tr-[4rem] hover:rounded-br-[4rem] pl-6 pt-6 pb-6'>
            <i className="fa-regular fa-file"></i>
            <p >Intenship</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
