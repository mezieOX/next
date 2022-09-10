import Image from 'next/image'
import React from 'react'

function Learn() {
  return (
      <div>
          <div>
              <h4>Learn Next.js</h4>
              <p>Learn Next.js step-by-step and earn points</p>
          </div>
          <div className="relative"><Image src="/images/learn.avif" layout="fill" /></div>
    </div>
  )
}

export default Learn