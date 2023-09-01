import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    additionalInfo: '',
    imageUrl: '',
  });

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/products');
      setProducts(res.data);
    } catch (error) {
      console.error("Błąd podczas pobierania produktów:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/products', productData);
      console.log("Produkt dodany:", res.data);
      fetchProducts();
    } catch (error) {
      console.error("Błąd podczas dodawania produktu:", error);
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setProductData(product);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/api/products/${selectedProduct._id}`, productData);
      console.log("Produkt zaktualizowany:", res.data);
      fetchProducts();
    } catch (error) {
      console.error("Błąd podczas aktualizacji produktu:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
      console.log("Produkt usunięty:", res.data);
      fetchProducts();
    } catch (error) {
      console.error("Błąd podczas usuwania produktu:", error);
    }
  };

  return (
    <div className="admin-panel">
      <h1>Panel Admina</h1>
      <form onSubmit={selectedProduct ? handleUpdate : handleSubmit}>
        <label>
          Nazwa produktu:
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Opis produktu:
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Dodatkowe informacje:
          <input
            type="text"
            name="additionalInfo"
            value={productData.additionalInfo}
            onChange={handleChange}
          />
        </label>
        <label>
          URL obrazu:
          <input
            type="text"
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button type="submit">{selectedProduct ? "Zaktualizuj Produkt" : "Dodaj Produkt"}</button>
      </form>
      <h2>Lista Produktów</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name}
            <button onClick={() => handleEdit(product)}>Edytuj</button>
            <button onClick={() => handleDelete(product._id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
