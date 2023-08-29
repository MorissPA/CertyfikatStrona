import React, { useState } from 'react';
import Login from './Login';
import AdminRegister from './AdminRegister';  // Upewnij się, że importujesz AdminRegister

function App() {


  return (
    <div>
      <Login />
      <AdminRegister />
    </div>
  );
}

export default App;
