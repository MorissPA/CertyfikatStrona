import React from 'react';
import { Link } from 'react-router-dom';

const Product2 = () => {
  return (
    <div className="border p-5 rounded-md text-center hover:shadow-md">
      <h3 className="text-xl mb-3">Kurs 2</h3>

      <Link to="/offer/2" className="text-blue-500 hover:underline">
        Zobacz szczegóły
      </Link>
    </div>
  );
};

export default Product2;
