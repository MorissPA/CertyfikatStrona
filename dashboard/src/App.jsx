import React from 'react';
import Login from './Login';
import AdminPanel from './AdminPanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Inne trasy mogą być dodane poniżej */}
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
