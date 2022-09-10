import Link from 'next/link'
import React from 'react'
import Card from './Card'

function Cards() {
  return (
      <div className="sm:mt-[100px] lg:mt-[300px] sm:-mt-[50px] md:mt-[120px] xl:mt-[400px] 2xl:mt-[500px] px-4">
          <div className="text-center">
              <h3 className='font-bold text-[20px] lg:text-[45px] capitalize'>the web SDK</h3>
              <p className='text-sm md:text-xl text-gray-500  font-[600] my-5 lg:text-2xl'>Next.js has all the tools you need to make the Web. Faster.</p>
          </div>
          <div>
              <Card />
          </div>
          <div className='shadow p-3 border space-y-3 hover:shadow-2xl hover:border-0 m-2'>
              <div><h4 className='md:text-lg text-sm font-[600] capitalize'>and more</h4></div>
              <div>
                  <p className='md:text-[15px] text-xs lg:text-[18px] font-[500] text-gray-700'>Support for environment variables, preview mode, custom head tags, automatic polyfills, and more.</p>
              </div>
          </div>
    </div>
  )
}

export default Cards