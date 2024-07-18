import React from 'react';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';

const OfferPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-cover bg-center bg-no-repeat bg-fixed bg-[url('./image/komp1.jpg')]">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-extrabold text-blue-900 mb-44">
          Nasze praktyczne zajęcia są prowadzone rzetelnie, innowacyjnie i dostosowane do indywidualnych potrzeb oraz posiadanych umiejętności uczestników. Prowadzą je doświadczeni, cierpliwi i życzliwi nauczyciele. Jeśli poszukujesz miejsca, gdzie zdobędziesz konkretne umiejętności, skontaktuj się z nami, aby dowiedzieć się więcej i dołączyć do rozwijającej się społeczności firmy CERTYFIKAT.
        </h1>
        <h2 className="text-xl font-bold text-blue-900 mb-12">Przedstawiamy propozycję kilku kursów z naszej oferty:</h2>

        <div className="bg-white p-6 rounded-lg shadow-lg border-blue-900">
          <div className="grid grid-cols-3 gap-4 text-blue-900 font-bold border-blue-900">
            <Product1 />
            <Product2 />
            <Product3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
