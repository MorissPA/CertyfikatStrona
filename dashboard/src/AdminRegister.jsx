import React, { useState } from 'react';
import axios from 'axios';

const AdminRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        username,
        password,
      });

      // Tutaj sprawdź, czy odpowiedź jest zgodna z oczekiwaną odpowiedzią z backendu.
      if (response.status === 201) {
        console.log('Administrator został zarejestrowany');
        // Tutaj możesz dodać przekierowanie na stronę logowania / pulpit nawigacyjny itp.
      }
    } catch (err) {
      // Sprawdzamy, czy błąd ma szczegółowe informacje
      const errorMessage = err.response && err.response.data ? err.response.data.error : 'Wystąpił błąd podczas rejestracji. Proszę spróbować ponownie.';
      setError(errorMessage);
    }
  };

  return (
    <div className="admin-register">
      <h2>Rejestracja Administratora</h2>
      <form onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="username">Nazwa użytkownika</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default AdminRegister;
