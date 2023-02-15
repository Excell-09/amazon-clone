import Header from '@/components/Header';
import { async } from '@firebase/util';
import { useSession } from 'next-auth/react';
import React from 'react';

const orders = ({ orders }) => {
  const { data: session } = useSession();
  return (
    <div>
      <Header />

      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b-2 mb-3 pb-1 border-yellow-400'>Your Orders</h1>
        {session ? <h2>x order</h2> : <h2>Please Sign In to see your orders</h2>}
        <div className='mt-5 space-y-4'></div>
      </main>
    </div>
  );
};

export default orders;

export async function getServerSideProps