import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    return formData.username.length > 0 && formData.password.length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError('Pola nie mogą być puste.');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setLoading(false);
      navigate('/admin-panel');
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('Błąd logowania, spróbuj ponownie.');
      }
    }
  };

  useEffect(() => {
   
    if (error) {
      setFormData({ ...formData, password: '' });
    }
  }, [error]);

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-200">
  <form className="bg-white p-5 rounded-lg shadow-md w-full max-w-lg flex flex-col items-center" onSubmit={handleSubmit}>
    <div className="mb-4 w-full">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Nazwa użytkownika"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
    </div>
    <div className="mb-4 w-full">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="Hasło"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
    </div>
    {loading && <p className="text-blue-500">Logowanie...</p>}
    {error && <p className="text-red-500 mb-4">{error}</p>}
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      type="submit"
      disabled={loading}
    >
      Zaloguj się
    </button>
  </form>
</div>


  );
};

export default Login;
