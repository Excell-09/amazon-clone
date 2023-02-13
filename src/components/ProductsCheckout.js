import Image from 'next/image';
import React, { useMemo } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsPlus, BsTrash } from 'react-icons/bs';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '@/slice/cartSlice';

const ProductsCheckout = ({ item }) => {
  let { rate } = item.rating;
  const convertedPrice = useMemo(() => item.price * 15000, [item.price]);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  const handleRemoveToCart = (id) => {
    dispatch(removeToCart({ id }));
  };

  rate = Math.round(rate);
  return (
    <div className='grid grid-cols-10 bg-white p-2 px-4'>
      <Image
        src={item.image}
        alt={item.title}
        width={200}
        height={200}
        className='object-contain m-auto'
        loading='lazy'
      />

      <div className='col-span-8 mx-5'>
        <h4 className='font-bold text-lg line-clamp-1'>{item.title}</h4>
        <div className='flex'>
          {Array(rate)
            .fill()
            .map((_, i) => (
              <AiFillStar
                key={i}
                className='text-yellow-500'
              />
            ))}
        </div>
        <p className='text-md my-2 line-clamp-2 sm:line-clamp-3'>{item.description}</p>
        <Currency
          quantity={convertedPrice}
          currency={'IDR'}
        />
      </div>
      <div className='flex flex-col m-auto space-y-3 justify-self-end justify-between'>
        <BsPlus
          className='text-2xl cursor-pointer'
          onClick={handleAddToCart}
        />
        <BsTrash
          className='text-2xl cursor-pointer'
          onClick={handleRemoveToCart}
        />
      </div>
    </div>
  );
};

export default ProductsCheckout;
