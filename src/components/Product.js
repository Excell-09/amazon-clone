import React, { useMemo } from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/slice/cartSlice';

const Product = ({ product }) => {
  const { id, image, title, description, category, rating } = product;
  let { rate } = rating;
  let { price } = product;
  const dispatch = useDispatch();

  let convertedPrice = useMemo(() => price * 15000, [price]);
  convertedPrice = convertedPrice.toLocaleString('id', {
    useGrouping: true,
    maximumFractionDigits: 3,
  });
  rate = Math.round(rate);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className='relative flex flex-col m-3 bg-white z-30 p-6 md:p-9'>
      <p className='top-2 right-2 text-sm absolute italic text-gray-400'>{category}</p>
      <Image
        src={image}
        alt='title'
        width={130}
        height={130}
        className='object-contain block mx-auto aspect-square mb-2'
      />
      <h4 className='my-3 font-semibold mt-auto line-clamp-1'>{title}</h4>
      <div className='flex items-center'>
        {Array(rate)
          .fill()
          .map((_, i) => {
            return (
              <AiFillStar
                key={i}
                className='text-[16px] text-yellow-500'
              />
            );
          })}
      </div>

      <p className='my-2 line-clamp-2'>{description}</p>
      <div className='mb-5 text-red-500 font-semibold text-xl'>Rp {convertedPrice}</div>

      <button
        className='button'
        onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
