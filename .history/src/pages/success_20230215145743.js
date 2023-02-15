import Header from '@/components/Header';
import React from 'react';

const success = () => {
  const userDocRef = doc(db, 'users', userId); // userId adalah ID dari user yang ingin diambil orderHistory-nya

// Dapatkan referensi sub-koleksi orderHistory dari dokumen user
const orderHistoryCollectionRef = collection(userDocRef, 'orderHistory');

// Buat query untuk mengambil semua dokumen dari sub-koleksi orderHistory
const querySnapshot = await getDocs(orderHistoryCollectionRef);

// Loop melalui semua dokumen yang ditemukan
querySnapshot.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
});
  return (
    <div>
      <Header />
      <main>testing success</main>
    </div>
  );
};

export default success;
