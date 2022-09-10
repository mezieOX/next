import Image from 'next/image'
import React from 'react'
import Button from '../ui/button/Button'

function Learn() {
  return (
      <div className='border-t text-center shadow-inner p-8'>
          <div className='pb-16 pt-8'>
              <h4 className='md:text-lg text-sm font-[600] capitalize'>Learn Next.js</h4>
              <p className='md:text-[15px] text-xs lg:text-[18px] font-[500] text-gray-700'>Learn Next.js step-by-step and earn points &#x2B50;.</p>
          </div>
      <div className="relative h-96 rounded-lg border shadow-xl w-full"><Image src="/images/vercel/learn.png" layout="fill" className='rounded-lg bg-no-repeat' objectFit='cover' /></div>
      <div className="my-20 text-white text-center">
          <Button link={""} className="px-14 py-3 !font-[400] !shadow-xl">Get Started</Button>
          </div>
    </div>
  )
}

export default Learn