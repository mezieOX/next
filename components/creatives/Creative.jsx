import Image from 'next/image'
import React from 'react'
import Button from '../ui/button/Button'

function Creative() {
  return (
      <div className='px-4 flex flex-col'>
          <div className='text-center'>
        <h3 className='font-bold text-[20px] lg:text-[45px] capitalize'>Who's Using Next.js</h3>
        <p className='text-sm md:text-xl text-gray-500  font-[600] my-5 lg:text-2xl'>We're honored some of the most talented creatives out there build with Next.js</p>
          </div>
          <div className='space-y-10 shadow-xl'>
            <div className="relative w-full h-40">
          <Image src="/images/vercel/hulu.png" layout="fill" className="rounded" />
          </div>
            <div className="relative w-full h-40 shadow-xl">
          <Image src="/images/vercel/twitch.jpg" layout="fill" className="rounded" />
          </div>
          <div className="relative w-full h-40 shadow-xl">
          <Image src="/images/vercel/nike.jpg" layout="fill" className="rounded" />
          </div>
            <div className="relative w-full h-40 shadow-xl">
          <Image src="/images/vercel/notion.png" layout="fill" className="rounded" />
        </div>
        <div className="relative w-full h-40 shadow-xl">
          <Image src="/images/vercel/showcases-02.jpg" layout="fill" className="rounded" />
          </div>
            <div className="relative w-full h-40 shadow-xl">
          <Image src="/images/vercel/tiktok.png" layout="fill" className="rounded" />
        </div>
      </div>
      <div className="my-20 text-white text-center">
          <Button link={""} className="px-14 py-3 !font-[400] !shadow-xl">View showcase</Button>
          </div>
      </div>
  )
}

export default Creative