import Header from '@/components/Header';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const success = () => {
  return (
    <div className=' min-h-screen'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
        <div>
          <div>
            <AiFillCheckCircle className='text-green-500 h-10' />
            <h1>Thank you, Your order</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default success;
