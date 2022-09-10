import Image from 'next/image';
import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Join() {
  return (
    <div className='h-20 sm:items-start sm:-mt-[70px]  md:h-60 grid items-center md:items-center max-w-[700px] mx-auto'>
      <div className="flex flex-col md:flex-row items-start md:items-center lg:items-center justify-start border-2 md:border-4 border-gray-200 bg-gray-100 p-2 md:p-4 rounded-xl space-y-4 lg:space-y-0 md:space-x-4 mx-4 sm:mx-4 md:mx-8 md:mx-0">
        <div className='border bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 rounded-lg py-1 px-2 text-white uppercase text-xs font-[600]'>
        new
        </div>
        <div className='text-xs sm:text-sm md:text-meduim lg:text-xl font-[600] font-[400]'>Join an online experience developers love. Next.js Conf <ArrowRightAltIcon className="!text-lg"  /></div>
      </div>
    </div>
  );
}

export default Join;
