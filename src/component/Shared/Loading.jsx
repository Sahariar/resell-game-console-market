import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col rounded shadow-md min-h-screen bg-primary text-primary-content">
        <div className="rounded-t">
            <div className="w-80 min-h-screen mx-auto my-12 flex justify-center items-center">
            <h2 className='text-5xl flex'>L<span>
            <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 508 508"
      version="1.1"
      viewBox="0 0 508 508"
      xmlSpace="preserve"
      className='h-12 w-12 animate-spin fill-accent'
    >
      <path
        
        d="M508 254c0 134-103.6 243.6-235.2 253.2-6.4.4-12.4.8-18.8.8s-12.8-.4-18.8-.8C103.6 497.6 0 388 0 254 0 113.6 113.6 0 254 0s254 113.6 254 254z"
      ></path>
      <path
        fill="#Eff"
        d="M422.4 176L332 85.6c-3.6-3.6-8.8-5.6-14-5.6H190c-5.2 0-10.4 2-14 5.6L85.6 176c-3.6 3.6-5.6 8.8-5.6 14v128c0 5.2 2 10.4 5.6 14l90.4 90.4c3.6 3.6 8.8 5.6 14 5.6h128c5.2 0 10.4-2 14-5.6l90.4-90.4c3.6-3.6 5.6-8.8 5.6-14V190c0-5.2-2-10-5.6-14z"
      ></path>
      <circle cx="254" cy="254" r="162.4" fill="#FFF"></circle>
      <circle cx="254" cy="254" r="82.8" fill="#E2E"></circle>
      <circle cx="254" cy="254" r="64.8" fill="#444"></circle>
    </svg>
                </span> <span className='animate-pulse'>a</span>din <span className='animate-bounce'>g</span> </h2>
            </div>
            
        </div>
        
    </div>
    );
};

export default Loading;