import Image from 'next/image';
import React from 'react';
import SubHeader from './SubHeader';cd nex
import Button from "../ui/button/Button"
import Link from "next/link"
import MenuIcon from "@material-ui/icons/Menu"

function Header() {
  return (
    <div className="">
      <div className="flex flex-col flex-wrap">
        <div className='order-1'>
          <div className="bg-white relative lg:flex items-center justify-between h-10 sm:h-12 md:h14 lg:h-20  text-black max-w-7xl mx-auto px-4">
            <div className='relative w-14 md:w-20 h-1/2'>
              <Image src="/images/images.jpg" layout="fill" objectFit='contain' />
              </div>
            <div className='mt-5 lg:mt-0 hidden md:block'>
              <nav>
                <ul className='flex items-center space-x-8 capitalize text-lg xl:text-xl text-gray-500 '>
                  <li>
                    <Link href=""><a>showcase</a></Link>
                  </li>
                  <li>
                    <Link href=""><a>docs</a></Link>
                  </li>
                  <li>
                    <Link href=""><a>blog</a></Link>
                  </li>
                  <li>
                    <Link href=""><a>analytics</a></Link>
                  </li>
                  <li>
                    <Link href=""><a>examples</a></Link>
                  </li>
                  <li>
                    <Link href=""><a>enterprise</a></Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:flex space-x-8 items-center hidden">
              <Button link={""} className="bg-transparent border text-xl px-3 py-2 font-normal text-gray-500 hidden lg:inline-flex">feedback</Button>
              <Button link={""} className="bg-blue-600 text-xl px-5 font-[600] text-white rounded-lg absolute lg:static top-2 right-2">learn</Button>
              <div className='lg:static absolute top-20 right-4'>
                <Image src="/images/download.png" width={30} height={30} className="rounded-full" />
              </div>
            </div>
            <div className="md:hidden absolute top-2 right-6">
                <MenuIcon className="lg:!text-3xl" />
                </div>
        </div>
        </div>
        <div className='bg-black'>
          <div className="mx-auto max-w-7xl text-white h-10 md:h-14 lg:h-18 flex items-center px-4">
            <SubHeader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
