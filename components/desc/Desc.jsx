import React from 'react';
import Button from '../ui/button/Button';

function Desc() {
  return (
    <div className='h-[500px] sm:h-[500px] md:h-[400px] flex flex-col items-center justify-start text-center my-10 px-4 max-w-7xl mx-auto'>
          <h2 className='text-black font-bold text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl 2xl:max-w-9xl leading-[50px] sm:leading-[80px] md:leading-[90px] lg:leading-[100px] xl:leading-tight '>The React Framework for Production</h2>
          <p className='text-sm md:text-xl  font-[600] my-5 lg:text-2xl'>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
          <div className='flex flex-col sm:flex-row items-center justify-center sm:space-x-10 lg:my-20 space-y-4 lg:space-x-20'>
              <Button link={"start Learning"}   className="!bg-blue-600 !font-[400] lg:!text-3xl !text-white py-4 flex items-center sm:!text-2xl !shadow-xl px-10 !rounded-lg text-sm">Start Learning</Button>
              <Button link={"Documentation"} className="!bg-transparent !font-[400] lg:!text-3xl sm:!text-2xl !text-gray-500 py-4 flex items-center !shadow-xl border border-gray-100 !rounded-lg text-sm px-10 sm:-mt-5" >Documentation</Button>
          </div>
          <div className='flex my-10 items-center justify-center py-auto lg:space-x-8 space-x-2 mt-[20px]'>
              <div className='lg:!text-[30px] capitalize'>License: <span className='uppercase'>mit</span></div>
              <div className=''><div className="px-[10px] py-[10px] !bg-transparent shadow-none sm:text:[22px] text-[15px] text-blue-600 lg:!text-[30px] sm:text:[20px]   hover:bg-blue-100 hover:shadow-none">GitHub</div></div>
          </div>
    </div>
  );
}

export default Desc;
