import Header from '@/components/Header';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const success = () => {
  return (
    <div className=' min-h-screen'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
        <div className='p-10 bg-white'>
          <div className='flex items-center space-x-2 mb-5'>
            <AiFillCheckCircle className='text-green-500 h-10' />
            <h1 className='text-3xl'>Thank you, Your order has been confirmed</h1>
          </div>
          <div>
            
          </div>

        </div>
      </main>
    </div>
  );
};

export default success;
