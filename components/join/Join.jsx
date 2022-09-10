import Image from 'next/image';
import React from 'react';

function Join() {
  return (
    <div className='h-20 sm:items-start md:h-60 grid items-center md:items-center max-w-[700px] mx-auto'>
      <div className="flex flex-col md:flex-row items-start md:items-center lg:items-center justify-start border-2 md:border-4 border-gray-200 bg-gray-100 p-2 md:p-4 rounded-xl space-y-4 lg:space-y-0 md:space-x-4 mx-4 sm:mx-4 md:mx-8 md:mx-0">
        <div className='border'>
        new
        </div>
        <div className='text-[10px] sm:text-sm md:text-meduim lg:text-xl text-gray-500 font-[600]'>Join an online experience developers love. Next.js Conf →</div>
      </div>
    </div>
  );
}

export default Join;
