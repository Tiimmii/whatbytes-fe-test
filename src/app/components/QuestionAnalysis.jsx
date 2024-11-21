import React from 'react'


const QuestionAnalysis = ({correctAnswers}) => {
  return (
    <div className='flex flex-col gap-5 border-[1px] border-customBorder rounded-md items-center w-full justify-center p-5'>
      <div className='flex justify-between w-full'>
        <p className='font-bold'>Question Analysis</p>
        <span className='font-bold text-blue-600'>{correctAnswers}/15</span>
      </div>
      <p className='text-customText font-medium text-[14px]'><span className='font-bold'>You Scored {correctAnswers} questions correct out of 15.
      </span> However it still needs some improvements
      </p>
    </div>
  )
}

export default QuestionAnalysis
