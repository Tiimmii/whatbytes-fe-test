import React from 'react'


const Testbox = ({children}) => {
  return (
    <div className='flex flex-wrap gap-2 border-[1px] border-customBorder rounded-md iems-center justify-evenly p-6 w-full'>
      {children}
    </div>
  )
}

export default Testbox
