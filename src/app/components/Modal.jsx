import React from 'react'
import Image from 'next/image';

const UpdateScoresModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

  return (
    <div className='update-scores flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-black/80 to-black/80 my-0'>
        <div className='flex flex-col p-5 bg-white rounded-lg gap-6'>
        <div className='flex items-center justify-between mb-5'>
            <p className='font-bold text-[20px]'>Update Scores</p>
            <Image 
                    src="/images/HTML_5.png" 
                    alt='HTML5 icon' 
                    width={40} 
                    height={40}

            />
        </div>
        <div className='flex justify-between gap-7'>
            <div className='flex gap-3 items-center'>
                <label className='update rounded-[100%] text-white w-7 my-auto text-center font-medium'>1</label>
                <p>Update your <span className='font-bold'>Rank</span></p>
            </div>
            <input type='number' className='border-[1px] border-blue-600 rounded-md pt-2 pb-2 pl-3 font-bold'></input>
        </div>
        <div className='flex justify-between gap-7'>
            <div className='flex gap-3 items-center'>
                <label className='update rounded-[100%] text-white w-7 my-auto text-center font-medium'>2</label>
                <p>Update your <span className='font-bold'>Percentile</span></p>
            </div>
            <input type='number' className='border-[1px] border-blue-600 rounded-md pt-2 pb-2 pl-3 font-bold'></input>
        </div>
        <div className='flex justify-between gap-7'>
            <div className='flex gap-3 items-center'>
                <label className='update rounded-[100%] text-white w-7 my-auto text-center font-medium'>3</label>
                <p>Update your <span className='font-bold'>Current Score (out of 15)</span></p>
            </div>
            <input type='number' className='border-[1px] border-blue-600 rounded-md pt-2 pb-2 pl-3 font-bold'></input>
        </div>
        <div className='flex w-full justify-end gap-3'>
            <button className='cancel rounded-lg px-3 py-2 font-bold' onClick={onClose}>cancel</button>
            <button className='update update px-7 py-2 rounded-lg text-white font-medium border-[2px] border-gray-800'>save &rarr;</button>
        </div>
        </div>
    </div>
  )
}

export default UpdateScoresModal
