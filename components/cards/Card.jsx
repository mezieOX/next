import React from 'react';
import data from '../../Store/data';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Card() {
  return (
    <div className=''>
      <div  className='grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0 space-y-8 justify-center md:gap-8 space-x-0 items-center max-w-7xl mx-auto px-2 mb-10
      '>
        {data.card.map(({ title, text }) => (
          <div className='shadow p-3 border space-y-3 hover:shadow-2xl  md:last:shadow-none md:last:border-none hover:border-0 md:last:w-full ' key={title}>
            <h4 className='md:text-lg text-sm font-[600] capitalize'>{title}</h4>
                <p className='md:text-[15px] text-xs lg:text-[18px] font-[500] text-gray-700'>{text}</p>
                <div className='capitalize md:text-[15px] text-xs lg:text-[18px] font-[500] text-blue-500 sm:text-sm hover:underline md:last:hidden '>
                Documentation <span><ArrowRightAltIcon className="!text-lg"  /></span>
                    </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
