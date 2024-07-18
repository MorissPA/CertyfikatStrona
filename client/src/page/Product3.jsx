import React from 'react';
import { Link } from 'react-router-dom';


const Product3 = () => {
  return (
    <div className="border p-5 rounded-md text-center hover:shadow-md">
      <h3 className="text-xl mb-3">Obsługa programów Microsoft Office</h3>

      <Link to="/offer/3" className="text-blue-500 hover:underline">
        Zobacz szczegóły
      </Link>
    </div>
  );
};

export default Product3;
