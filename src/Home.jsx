import React from 'react';
import './App.css'; // Assurez-vous d'importer votre fichier de styles CSS si nécessaire
import { Link } from "react-router-dom";

function Carte() {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="..." className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button> {/* Utilisez un bouton à la place d'un lien */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carte;