import Header from '@/components/Header';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItem, selectTotalItem } from '@/slice/cartSlice';
import ProductsCheckout from '@/components/ProductsCheckout';
import { signIn, useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { addDoc, collection } from 'firebase/firestore';
import { db } from 'firebase';

const stripePromise = loadStripe(process.env.stripe_public_key);

const checkout = () => {
  const items = useSelector(selectItem);
  const { data: session } = useSession();
  const totalItem = useSelector(selectTotalItem);
  let convertedPrice = useMemo(() => totalItem * 15000, [totalItem]);
  convertedPrice = convertedPrice.toLocaleString('id', {
    useGrouping: true,
    maximumFractionDigits: 3,
  });
  const createCheckout = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items,
      email: session.user.email,
    });

    addDoc(
      collection(db, 'users', checkoutSession.data.email, 'order', {
        product: checkoutSession.items,
        email: checkoutSession.email,
        id:checkoutSession
      })
    );

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto p-5 lg:space-x-3'>
        <div className='shadow-md bg-white mb-5 lg:w-[80%]'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            className='object-contain'
            alt=''
          />

          <div className='flex flex-col p-5 space-y-10'>
            {items.length !== 0 ? (
              items.length > 1 ? (
                <h1 className='text-3xl border-b pb-4'>Your Products</h1>
              ) : (
                <h1 className='text-3xl border-b pb-4'>Your Product</h1>
              )
            ) : (
              <h1 className='text-3xl border-b pb-4'>No Product</h1>
            )}
          </div>
          <div>
            {items.map((item, i) => (
              <ProductsCheckout
                key={i}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col bg-white p-3 shadow-md mb-5 lg:w-[20%]'>
          <h2 className='flex justify-between'>
            <p>Total :</p>
            <span className='font-bold'> ({items.length}) Items</span>
          </h2>

          <h2 className='flex justify-between whitespace-normal'>
            <p>subtotal : </p>
            <span className='font-bold text-red-500'>Rp {convertedPrice}</span>
          </h2>

          <button
            role={'link'}
            className={`button w-full ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'} mt-3 disabled:cursor-not-allowed`}
            onClick={session ? createCheckout : signIn}
            disabled={items.length < 1}>
            {session ? 'Process To Checkout' : 'Sign In For Checkout'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default checkout;
