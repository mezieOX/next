import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function Layout({children}) {
  return (
      <div>
          <div className='flex flex-col'><Header /></div>
          <div classame="flex-grow">{children}</div>
          <div><Footer /></div>
    </div>
  )
}

export default Layout