import React from 'react';

function Desc() {
  return (
    <div className='h-[500px] sm:h-[500px] md:h-[400px] flex flex-col items-center justify-start text-center my-10 px-4 max-w-7xl mx-auto'>
          <h2 className='text-black font-bold text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] max-w-lg sm:max-w-xl md:max-w-4xl lg:max-w-7xl xl:max-w-9xl leading-[50px] sm:leading-[80px] md:leading-[90px] lg:leading-[100px] xl:leading-tight '>The React Framework for Production</h2>
          <p className='text-[11px] md:text-xl  font-[600] text-gray-500 my-5 lg:text-2xl'>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>
    </div>
  );
}

export default Desc;
