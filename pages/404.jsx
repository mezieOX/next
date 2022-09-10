import React from 'react'
import Layout from '../components/layout/Layout'
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { IconButton } from '@material-ui/core'
import Link from 'next/link'

function PageNotFound() {
  return (
      <Layout>
      <div className='h-screen flex justify-center items-center flex-col w-full mt-10 lg:mt-20'>
        <div className='self-start'>
          <Link href="/">
                <IconButton>
            <ArrowBackIcon />
            </IconButton>
            </Link>
        </div>
              <div className='font-bold text-2xl capitalize py-10'> 404: page not found</div>
              <div className="my-10"><Link href="/"><a className='bg-gray-100 py-2 px-4 rounded hover:bg-gray-200 text-sm md:text-lg'>Home</a></Link></div>
          </div>
    </Layout>
  )
}

export default PageNotFound