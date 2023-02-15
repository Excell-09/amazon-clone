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
            <AiFillCheckCircle className='text-green-500'/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default success;
