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
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState(null);

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

  const resetForm = () => {
    setProductData({
      name: '',
      description: '',
      additionalInfo: '',
      imageUrl: '',
    });
    setSelectedProduct(null);
  };

  const showAlert = (message, type = 'success') => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage(null);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/products', productData);
      showAlert("Produkt dodany pomyślnie.");
      fetchProducts();
      resetForm();
    } catch (error) {
      showAlert("Błąd podczas dodawania produktu.", 'error');
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
      showAlert("Produkt zaktualizowany pomyślnie.");
      fetchProducts();
      resetForm();
    } catch (error) {
      showAlert("Błąd podczas aktualizacji produktu.", 'error');
      console.error("Błąd podczas aktualizacji produktu:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
      showAlert("Produkt usunięty pomyślnie.");
      fetchProducts();
      resetForm(); 
    } catch (error) {
      showAlert("Błąd podczas usuwania produktu.", 'error');
      console.error("Błąd podczas usuwania produktu:", error);
    }
  };
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const openDeleteModal = (id) => {
    setShowDeleteModal(true);
    setProductIdToDelete(id);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setProductIdToDelete(null);
  };

  const confirmDelete = async () => {
    handleDelete(productIdToDelete);
    closeDeleteModal();
  };

  return (
    <div className="admin-panel flex flex-col items-center justify-center min-h-screen bg-gray-200">
 {alertMessage && (
  <div className={`fixed top-0 right-50 text-white py-2 px-4 rounded ${alertType === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
    {alertMessage}
  </div>
)}

{showDeleteModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <p>Czy na pewno chcesz usunąć ten produkt?</p>
            <div className="flex justify-end mt-2">
              <button onClick={closeDeleteModal} className="bg-gray-300 hover:bg-gray-400 text-white py-1 px-4 rounded mr-2">Anuluj</button>
              <button onClick={confirmDelete} className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded">Usuń</button>
            </div>
          </div>
        </div>
      )}
  <h1 className="text-3xl font-semibold mb-5">Panel Admina</h1>
  <form
    className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg"
    onSubmit={selectedProduct ? handleUpdate : handleSubmit}
  >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Nazwa produktu:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="name"
        value={productData.name}
        onChange={handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Opis produktu:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="description"
        value={productData.description}
        onChange={handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Dodatkowe informacje:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="additionalInfo"
        value={productData.additionalInfo}
        onChange={handleChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        URL obrazu:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="imageUrl"
        value={productData.imageUrl}
        onChange={handleChange}
      />
    </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      {selectedProduct ? "Zaktualizuj Produkt" : "Dodaj Produkt"}
    </button>
  </form>
  <h2 className="text-2xl font-semibold mt-5 mb-3">Lista Produktów</h2>
  <ul className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg">
        {products.map((product) => (
          <li key={product._id} className="flex justify-between items-center border-b py-2">
            {product.name}
            <div>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:shadow-outline"
            onClick={() => handleEdit(product)}
          >
            Edytuj
          </button>
          <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={() => openDeleteModal(product._id)}
              >
                Usuń
              </button>
            </div>
          </li>
        ))}
      </ul>
</div>

  );
};

export default AdminPanel;
