import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '80px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
       
        {/* Centrer les liens de navigation */}
        <div className="nav-links">
          <div className="collapse navbar-collapse d-flex justify-content-center align-items-center">
            <div className="navbar-nav d-flex justify-content-between align-items-center w-100">
              <img src="logo.png" alt="Logo" className="logo" />
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              <Link to="/vente" className="nav-link ml-3">Vente</Link>
              <Link to="/contact" className="nav-link ml-3">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
