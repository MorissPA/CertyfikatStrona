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
    <div className="min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat bg-fixed bg-[url('./image/komp1.jpg')]">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default OfferPage;
