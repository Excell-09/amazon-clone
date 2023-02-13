import Header from '@/components/Header';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItem, selectTotalItem } from '@/slice/cartSlice';
import ProductsCheckout from '@/components/ProductsCheckout';
import Currency from 'react-currency-formatter';
import { signIn, useSession } from 'next-auth/react';

const checkout = () => {
  const items = useSelector(selectItem);
  const { data: session } = useSession();
  const totalItem = useSelector(selectTotalItem);
  const convertedPrice = useMemo(() => totalItem * 15000, [totalItem]);

  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto p-5 lg:space-x-3'>
        <div className='shadow-md bg-white mb-5'>
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

        <div className='flex flex-col bg-white p-3 shadow-md mb-5'>
          <h2 className='flex justify-between'>
            Total
            <span className='font-bold'> ({items.length}) Items</span>
          </h2>

          <h2 className='flex justify-between whitespace-normal'>
            subtotal :
            <span className='font-bold text-red-500'>
              <Currency
                quantity={convertedPrice}
                currency={'idr'}
              />
            </span>
          </h2>

          <button
            className={`button w-full ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'} mt-3`}
            onClick={session ? () => {} : signIn}>
            {session ? 'Proceed To Checkout' : 'Sign In For Checkout'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default checkout;
