import Link from 'next/link'
import React from 'react'
import Card from './Card'

function Cards() {
  return (
      <div className="sm:mt-[100px] lg:mt-[300px] -mt-[50px] md:mt-[120px] xl:mt-[400px] 2xl:mt-[500px]">
          <div className="text-center">
              <h3 className='font-bold text-[20px] lg:text-[45px] capitalize'>the web SDK</h3>
              <p className='text-[11px] md:text-xl  font-[600] text-gray-500 my-5 lg:text-2xl'>Next.js has all the tools you need to make the Web. Faster.</p>
          </div>
          <div>
              <Card />
          </div>
          <div className="shadow md:shadow-0 py-8 pr-0 border md:border-0 space-y-3 hover:shadow-2xl md:hover:shadow-none hover:border-0 w-[90%] md:w-full md:w-auto mx-auto md:max-w-5xl">
          <div className='md:text-[15px] text-[13px] lg:text-[18px] font-[500] text-gray-700 '><span className="font-bold text-sm ">And more: </span>Support for  
              <Link href=""><a className='text-blue-500 hover:underline'> environment variables,</a></Link>
            <Link href=""><a className='text-blue-500 hover:underline'> preview mode,</a></Link>
              <Link href=""><a className='text-blue-500 hover:underline'> custom head tags, </a></Link>
              <Link href=""><a className='text-blue-500 hover:underline'> automatic polyfills,  </a></Link>
              and more.
              </div>
              </div>
    </div>
  )
}

export default Cards