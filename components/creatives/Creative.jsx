import Image from 'next/image'
import React from 'react'
import Button from '../ui/button/Button'

function Creative() {
  return (
      <div className='px-4 flex flex-col'>
          <div className='text-center'>
        <h3 className='font-bold text-[20px] lg:text-[45px] capitalize'>Who&#39;s Using Next.js</h3>
        <p className='text-sm md:text-xl text-gray-500  font-[600] my-5 lg:text-2xl'>We&#39;re honored some of the most talented creatives out there build with Next.js</p>
          </div>
          <div className='space-y-20 shadow md:flex md:items-center md:justify-center relative'>
            <div className="relative w-full h-48 md:-mr-[80px]">
          <Image src="/images/vercel/hulu.png" layout="fill" className="rounded" />
          </div>
            <div className="relative z-[10] md:-mr-10  w-full h-48 shadow-xl">
          <Image src="/images/vercel/twitch.jpg" layout="fill" className="rounded" />
          </div>
          <div className="relative  z-[12] md:-ml-10 w-full h-48 shadow-xl">
          <Image src="/images/vercel/nike.jpg" layout="fill" className="rounded" />
          </div>
            <div className="relative md:w-[300px] w-full z-40 md:absolute h-48 shadow-xl md:-mr-32">
          <Image src="/images/vercel/notion.png" layout="fill" className="rounded" />
        </div>
        <div className="relative md:hidden  w-full h-48 shadow-xl">
          <Image src="/images/vercel/showcases-02.jpg" layout="fill" className="rounded" />
          </div>
            <div className="relative z-[0] md:-ml-10  w-full h-48 shadow-xl">
          <Image src="/images/vercel/tiktok.png" layout="fill" className="rounded" />
        </div>
      </div>
      <div className="my-20 md:hidden z-[0] md:-mr-10 text-white text-center">
          <Button link={""} className="px-16 py-3 !font-[400] !shadow-xl">View showcase</Button>
          </div>
      </div>
  )
}

export default Creative