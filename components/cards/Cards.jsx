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
    </div>
  )
}

export default Cards