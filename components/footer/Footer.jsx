import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-100 p-8">
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
        <div className='space-y-4'>
          <p className='text-black text-sm font-base '>General resources</p>
          <nav>
            <ul className='text-gray-500 text-xs space-y-4'>
              <li>Docs</li>
              <li>Learn</li>
              <li>Showcase</li>
              <li>Blog</li>
              <li>Analytics</li>
              <li>Next.js Conf</li>
              <li>Live</li>
            </ul>
          </nav>
        </div>

        <div className='space-y-4'>
          <p className='text-black font-base text-sm'>More</p>
          <nav>
            <ul className='text-gray-500 space-y-4 text-xs'>
              <li>Commerce</li>
              <li>Contact Sales</li>
              <li>Showcase</li>
              <li>GitHub</li>
              <li> Releases</li>
              <li>Telemetry</li>
            </ul>
          </nav>
        </div>
       
        <div className='space-y-4'>
          <p className='text-black font-base text-sm'>About Vercel</p>
          <nav>
            <ul className='text-gray-500 space-y-4 text-xs'>
              <li>Next.js + Vercel</li>
              <li>Open Source Software</li>
              <li>Showcase</li>
              <li>GitHub</li>
              <li>Twitter</li>
            </ul>
          </nav>
        </div>
        <div className='space-y-4'>
          <p className='text-black font-base text-sm'>Legal</p>
          <nav>
            <ul className='text-gray-500 space-y-4 text-xs'>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </div>
          </div>
          <div className="my-10">
              <div className=""><Image src="/images/download (4).jpg" width={100} height={50} /></div>
              <div className='text-xs text-gray-500 my-10'>Copyright &copy; 2022 Vercel, Inc. All rights reserved.</div>
          </div>
    </div>
  );
}

export default Footer;
