import React from 'react';
import Button from '../ui/button/Button';

function Hulu() {
  return (
    <div className="flex justify-center flex-col sm:flex-row max-w-xl items-center space-x-8 px-2 pt-4 pb-8 my-10 border bg-white mx-4 rounded-xl shadow-2xl space-y-4">
        <div className="font-bold text-4xl">hulu</div>
        <div><Button link={""} className="px-16 -ml-10 !bg-blue-600 text-white !py-2 !rounded-lg !shadow-2xl !text-sm !font-[400]">Read case study</Button></div>
    </div>
  );
}

export default Hulu;