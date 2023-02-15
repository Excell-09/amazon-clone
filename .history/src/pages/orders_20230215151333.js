import Header from '@/components/Header';
import { useSession } from 'next-auth/react';
import React from 'react';

const orders = () => {
  const {data:session} = useSession()
  return (
    <div>
      <Header   />

      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b-2 mb-3 pb-1 border-yellow-400'>Your Orders</h1>
        

      </main>
    </div>
  );
};

export default orders;
