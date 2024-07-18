import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Product1Description from './Product1Description';
import Product2Description from './Product2Description';
import Product3Description from './Product3Description';

const products = [
  {
    _id: '1',
    description: <Product1Description />,
  },
  {
    _id: '2',
    description: <Product2Description />,
  },
  {
    _id: '3',
    description: <Product3Description />,
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product._id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <div className="mb-3">
        {product.description}
      </div>
      <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Skontaktuj się z nami po więcej informacji
      </Link>
    </div>
  );
};

export default ProductDetail;
