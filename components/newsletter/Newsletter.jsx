import React from 'react';
import Button from '../ui/button/Button';
import MessageIcon from '@material-ui/icons/Message';

function Newsletter() {
  return (
    <div className="flex items-center flex-col justify-center text-center">
      <div>
        <h3 className="font-bold text-[20px] lg:text-[45px] px-16">
          Next.js is getting better every day — dont miss out on all the action.
        </h3>
        <p className="text-sm md:text-xl text-gray-500  font-[600] my-5 lg:text-2xl px-9">
          Join the Next.js newsletter and stay updated on new releases and
          features, guides, and case studies.
        </p>
      </div>
      <div>
        <div>
          <div className="border border-gray-400 rounded p-2 border flex items-center">
            <MessageIcon className="!text-gray-500 bg-white !text-base mr-1" />
            <input
              type="text"
              className="border-none outline-none flex-grow placeholder:text-sm placeholder:text-base"
              placeholder=" you@domin.com"
            />
          </div>
          <div className=" my-5 text-white text-center">
            <Button link={''} className="px-14 py-3 !font-[400] !shadow-xl">
              View showcase
            </Button>
          </div>
        </div>
          </div>
          <div className="mb-10 sm:hidden"></div>
    </div>
  );
}

export default Newsletter;
