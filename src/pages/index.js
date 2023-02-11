import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductList from '@/components/ProductList';

export default function Home({ products }) {
  const firstProducts = products.slice(0, 4);
  const secondProducts = products.slice(5, products.length);
  return (
    <>
      <Head>
        <title>Amazon CLone</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Header />
      <main className='relative max-w-screen-2xl mx-auto'>
        <Banner />
        <ProductList
          products={firstProducts}
          overlap
        />
        <img
          className='md:col-span-full'
          src={'https://links.papareact.com/dyz'}
          alt='promo'
        />
        <ProductList products={secondProducts} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
  return {
    props: {
      products: products,
    },
  };
}
