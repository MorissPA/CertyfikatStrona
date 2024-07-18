import React from 'react';
import { Link } from 'react-router-dom';


const Product1 = () => {
  return (
    <div className="border p-5 rounded-md text-center hover:shadow-md">
      <h3 className="text-xl mb-3">Obsługa programów LibreOffice</h3>
      <p>Poznaj bezpłatną alternatywę dla pakietu Microsoft Office i naucz się wykorzystywać narzędzia LibreOffice do tworzenia profesjonalnych dokumentów i prezentacji.</p>

      <Link to="/offer/1" className="text-blue-500 hover:underline">
        Zobacz szczegóły
      </Link>
    </div>
  );
};

export default Product1;
