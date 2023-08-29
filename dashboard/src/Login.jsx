import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);  // <--- Dodano stan błędu

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      // Teraz zalogowany - przekieruj na stronę administratora
      // np. history.push('/admin-panel');
    } catch (err) {
      // Błąd logowania
      setError('Błąd logowania, spróbuj ponownie.');  // <--- Dodano obsługę błędu
    }
  };

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
      {error && <p className="error">{error}</p>}  {/* <--- Wyświetl komunikat o błędzie */}
      <button type="submit">Zaloguj się</button>
    </form>
  );
};

export default Login;
