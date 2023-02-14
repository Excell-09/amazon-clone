import React from 'react';
import Product from './Product';

const ProductList = ({ products, overlap = false }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${overlap && 'md:-mt-56'} mx-auto`}>
      {products.map((item, i) => (
        <Product
          product={item}
          key={i}
        />
      ))}
    </div>
  );
};

export default ProductList;
