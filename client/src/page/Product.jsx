import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';


const Product = ({ product }) => {
  const cleanDescription = DOMPurify.sanitize(product.description);
  
  return (
    <div className="border p-5 rounded-md text-center hover:shadow-md">
      <h3 className="text-xl mb-3">{product.name}</h3>
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: cleanDescription }}></div>

      <Link to={`/offer/${product._id}`}>Zobacz szczegóły</Link>


    </div>
  );
};

export default Product;
