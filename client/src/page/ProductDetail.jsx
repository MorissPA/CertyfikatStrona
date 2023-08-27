import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const ProductDetail = () => {
  const { id: productId } = useParams();
  console.log("Szukane ID:", productId);

  const productInfo = products.find(product => product.id === productId);
  
  if (!productInfo) return <div>Produkt nie został znaleziony</div>;

  const cleanDescription = DOMPurify.sanitize(productInfo.description);

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl border-b pb-3 mb-5">{productInfo.name}</h2>
      <img src={productInfo.imageUrl} alt={productInfo.name} className="w-full mb-5"/>
      <div 
        className="mb-3" 
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      ></div>
      <p className="mb-5">{productInfo.additionalInfo}</p>
      <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Skontaktuj się z nami po więcej informacji</Link>
    </div>
  );
};

export default ProductDetail;
