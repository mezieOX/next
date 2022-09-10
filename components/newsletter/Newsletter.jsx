import React from 'react'

function Newsletter() {
  return (
      <div>
          <div>
              <h3>Next.js is getting better every day — don't miss out on all the action.</h3>
              <p>Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.</p>
          </div>
          <div>
              <div>
                  <input type="text" placeholder=' you@domin.com' />
                  <Button link={""}>subscribe</Button>
              </div>
          </div>
    </div>
  )
}

export default Newsletter