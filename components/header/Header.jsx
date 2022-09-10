import Image from 'next/image';
import React from 'react';
import SubHeader from './SubHeader';
import { Menu } from '@headlessui/react';
import Button from '../ui/button/Button';
import Link from 'next/link';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function Header() {
  return (
    <div className="fixed w-full top-0 z-40 bg-white sm:h-40 mb-2 shadow-md">
      <div className="flex flex-col">
        <div className="order-1">
          <div className="bg-white relative lg:flex items-center justify-between h-20 text-black max-w-7xl mx-auto px-4">
            <div className="relative w-14 md:w-20 h-[90%] md:h-1/2">
              <Image
                src="/images/images.jpg"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            <div className="mt-5 lg:mt-0 hidden md:block">
              <nav>
                <ul className="hidden sm:flex items-center space-x-8 capitalize text-lg xl:text-xl text-gray-500 ">
                  <li>
                    <Link href="">
                      <a>showcase</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>docs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>analytics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>examples</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>enterprise</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:flex space-x-8 items-center">
              <Button
                link={''}
                className="!bg-transparent border text-xl px-3 py-2 font-normal text-gray-500 hidden xl:inline-flex  hidden"
              >
                feedback
              </Button>
              <Button
                link={''}
                className="!bg-blue-600 text-sm sm:text-meduim md:text-xl lg:px-5 font-[400] md:font-[600] text-white rounded-xl sm:rounded-lg absolute lg:static top-4 md:top-1 lg:top-2 right-16 md:right-20 md:right-4 lg:right-3 px-3 py-2 sm:px-2.5 sm:py-1.5 lg:py-3"
              >
                learn
              </Button>
              <div className="hidden md:flex lg:static absolute top-16 right-4">
                <Image
                  src="/images/download.png"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <Menu>
                <div className="md:hidden absolute z-40 top-2 right-2 md:right-6 border border-purple-500 rounded-xl">
                  <Menu.Button>
                    <IconButton>
                      <MenuIcon className="lg:!text-3xl" />
                    </IconButton>
                  </Menu.Button>
                </div>
                <div>
                  <Menu.Items className="h-[367px] bg-white shadow-inner absolute w-full left-0 font-[500] text-gray-500 pt-2 pb-2 capitalize px-8 flex flex-col h-full justify-between">
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            learn
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            showcase
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            docs
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            blog
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            analytics
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            commerce
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            examples
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link href="/learn">
                          <a className={`${active && 'text-blue-600'}`}>
                            enterprise
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="mx-auto max-w-7xl text-white h-10 md:h-14 lg:h-18 flex items-center px-4">
            <SubHeader />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
