import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const OfferPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3000/api/products'); 
      setProducts(result.data);
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="p-5">
      <h2 className="text-2xl mb-6">Nasza oferta</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product._id} product={product} /> 
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
