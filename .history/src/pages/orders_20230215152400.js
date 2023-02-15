import Header from '@/components/Header';
import { db } from 'firebase.confiq';
import { collection } from 'firebase/firestore';
import { getSession, useSession } from 'next-auth/react';
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

export async function getServerSideProps(context) {

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const session = getSession(context)


  if (!session) {
    return {
      props:{}
    }
  }

  const stipeOrders = await db.collection('users').doc(session.user.email).collection()
}