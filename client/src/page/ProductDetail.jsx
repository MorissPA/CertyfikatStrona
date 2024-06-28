import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!product) return <p>Product not found</p>;

  const cleanDescription = DOMPurify.sanitize(product.description);
  const cleanAdditionalInfo = DOMPurify.sanitize(product.additionalInfo); // Dodane

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl border-b pb-3 mb-5">{product.name}</h2>
     
      <div
        className="mb-3"
        dangerouslySetInnerHTML={{ __html: cleanDescription }}
      ></div>
      <div
        className="mb-3"
        dangerouslySetInnerHTML={{ __html: cleanAdditionalInfo }}  // Dodane
      ></div>
      <Link to="/contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Skontaktuj się z nami po więcej informacji
      </Link>
    </div>
  );
};

export default ProductDetail;
