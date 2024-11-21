import React from 'react'

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Testbox from './components/Testbox';
import Image from 'next/image';
import Syllabus from './components/Syllabus';
import SyllabusAnalysis from './components/Syllabus';

const page = () => {
  return (
    <div className='main background min-h-screen flex flex-col text-sm sm:text-base'>
      <Navbar/>
      <Sidebar/>
      <main className='ml-[18rem] mt-8'>
        <p className='text-customText font-medium'>Skill Test</p>
        <div className='flex flex-wrap flex-row gap-4'>
          <div className='flex flex-col gap-5 lg:w-[65%] md:w-[100%]'>
            <Testbox>
              <Image 
                src="/images/HTML_5.png" 
                alt='HTML5 icon' 
                width={40} 
                height={40}

              />
              <div className='flex flex-col sm:text-center lg:text-left'>
                  <p className='font-bold'>Hyper Text Markup Language</p>
                  <span className='text-customText'>Questions: 08 | Duration: 15mins | Submitted on 5 June 2021</span>
              </div>
              <button className='update pl-6 pr-6 text-white rounded-lg font-medium border-2 border-gray-800'>
                  Update
              </button>
            </Testbox>
            <Testbox>
              <p className='font-bold min-w-full'>Quick Statistics</p>
              <div className='min-w-full flex justify-evenly'>
                <div className='flex gap-4 items-center'>
                  <Image 
                    src="/images/trophy.png" 
                    alt='trophy image' 
                    width={50} 
                    height={40}

                  />
                  <div>
                    <p className='font-bold text-[18px]'>1</p>
                    <span className='quick-stats uppercase text-[16px]'>Your Rank</span>
                  </div>
                </div>
                <div className='w-[2px] h-[6rem] bg-customBorder'></div>
                <div className='flex gap-4 items-center'>
                  <Image 
                    src="/images/checkbook.png" 
                    alt='checkbook image' 
                    width={50} 
                    height={40}

                  />
                  <div>
                    <p className='font-bold text-[18px]'>30%</p>
                    <span className='quick-stats uppercase text-[16px]'>Percentile</span>
                  </div>
                </div>
                <div className='w-[2px] h-[6rem] bg-customBorder'></div>
                <div className='flex gap-4 items-center'>
                  <Image 
                    src="/images/tick.png" 
                    alt='tick image' 
                    width={50} 
                    height={40}

                  />
                  <div>
                    <p className='font-bold text-[18px]'>10 / 15</p>
                    <span className='quick-stats uppercase text-[16px]'>Correct Answers</span>
                  </div>
                </div>
              </div>
            </Testbox>
          </div>
          <div className='flex flex-col gap-5 lg:w-[33%] md:w-[100%]'>
            <SyllabusAnalysis/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
