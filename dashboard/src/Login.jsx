import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Użycie useNavigate

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
      navigate('/admin-panel');  // przekierowanie do panelu admina
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        setError(err.response.data.message); // Ustaw błąd na podstawie odpowiedzi serwera
      } else {
        setError('Błąd logowania, spróbuj ponownie.');
      }
    }
  };

  useEffect(() => {
    // resetuj pole hasła po błędzie
    if (error) {
      setFormData({ ...formData, password: '' });
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nazwa użytkownika"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {loading && <p>Logowanie...</p>}
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>Zaloguj się</button>
    </form>
  );
};

export default Login;
