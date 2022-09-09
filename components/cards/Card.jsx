import React from 'react';
import data from '../../Store/data';

function Card() {
  return (
    <div className=''>
      <div  className='grid md:grid-cols-2 lg:grid-cols-3 space-y-8 justify-center md:space-x-8 space-x-0 items-center max-w-7xl mx-auto px-4 mb-10 
      '>
        {data.card.map(({ title, text }) => (
          <div className='shadow p-8 border space-y-3 hover:shadow-2xl hover:border-0 ' key={title}>
            <h4 className='md:text-lg text-sm font-[600]'>{title}</h4>
                <p className='md:text-[15px] text-[13px] lg:text-[18px] font-[500] text-gray-700'>{text}</p>
                <div className='capitalize md:text-[15px] text-[13px] lg:text-[18px] font-[500] text-blue-500 hover:underline'>
                Documentation →
                    </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
