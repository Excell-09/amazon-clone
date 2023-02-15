import Header from '@/components/Header';
import { db } from 'firebase.confiq';
import { collection, doc, getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const orders = () => {
  const { data: session } = useSession();
  const [values, setValues] = useState();

  async function getHistoryOrders(fn) {
    const userDocRef = doc(db, 'users', session?.user?.email); // userId adalah ID dari user yang ingin diambil orderHistory-nya

    const orderHistoryCollectionRef = collection(userDocRef, 'orderHistory');

    const querySnapshot = await getDocs(orderHistoryCollectionRef);

    querySnapshot.forEach((doc) => fn(doc));
  }

  useEffect(() => {
    getHistoryOrders((res) => setValues(res));
  }, []);

  console.log(values);

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
