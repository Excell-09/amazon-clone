import Header from '@/components/Header';
import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItem } from '@/slice/cartSlice';
import ProductsCheckout from '@/components/ProductsCheckout';
import Currency from 'react-currency-formatter';
import { signIn, useSession } from 'next-auth/react';

const checkout = () => {
  const items = useSelector(selectItem);
  const { data: session } = useSession();
  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            className='object-contain'
          />

          <div className='flex flex-col p-5 space-y-10 bg-white'>
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
        <div>
          <h2>
            subtotal ({items.length}) items
            <span className='font-bold'>
              <Currency />
            </span>
          </h2>
          {session ? (
            <button className='button'>CheckOut</button>
          ) : (
            <button
              className='button'
              onClick={signIn}>
              Sign In
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
