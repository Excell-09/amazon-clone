import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const success = () => {
  const router = useRouter();
  return (
    <div className=' min-h-screen'>
      <Header />
      <main className='max-w-screen-lg mx-auto'>
        <div className='p-10 bg-white'>
          <div className='flex items-center space-x-2 mb-5'>
            <AiFillCheckCircle className='text-green-500 h-10 text- md:text-4xl' />
            <h1 className='text-3xl'>Thank you, Your order has been confirmed</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
          <button
            onClick={() => router.push('/orders')}
            className='button mt-8 w-full'>
            Continue Shopping
          </button>
        </div>
      </main>
    </div>
  );
};

export default success;
