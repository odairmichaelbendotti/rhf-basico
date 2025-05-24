import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button type="submit" className="submit-button">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default App;