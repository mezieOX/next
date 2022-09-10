import Image from 'next/image'
import React from 'react'
import Button from '../ui/button/Button'

function Creative() {
  return (
      <div>
          <div>
              <h4>Whos Using Next.js</h4>
              <p>Were honored some of the most talented creatives out there build with Next.js</p>
          </div>
          <div>
              <Image src="/images/" width={120} height={120} />
              <Image src="/images/" width={120} height={120} />
              <Image src="/images/" width={120} height={120} />
              <Image src="/images/" width={120} height={120} />
              <Image src="/images/" width={120} height={120} />
              <Image src="/images/" width={120} height={120} />
              <Image src="/images/" width={120} height={120} />
          </div>
          <Button link={""}>View showcase</Button>
    </div>
  )
}

export default Creative