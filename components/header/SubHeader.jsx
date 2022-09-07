import React from 'react'
import Image from "next/image"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function SubHeader() {
  return (
    <div className="flex h-full justify-between items-center w-full">
      <div className='relative w-14 md:w-20 h-full'>
        <Image src="/images/download (4).jpg" layout="fill" objectFit='contain'/>
      </div>
      <div>
        <h1 className='text-[10px] md:text-xs lg:text-lg font-[400] capitalize'>deploy <span className='font-[700] text-xs'>next.js</span> on vercel <span><ArrowRightAltIcon className="!text-lg"  /></span></h1>
      </div>
    </div>
  )
}

export default SubHeader