import React from 'react';
import Product from './Product';
import { products } from '../data/products';

const OfferPage = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl mb-6">Nasza oferta</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
