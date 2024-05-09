import React from 'react';
import './App.css';

const Contact = () => {
    const ficheContact = {
        telephone: {
            portable: "+33 6 XX XX XX XX",
            
        },
        email: "votre.email@example.com",
        adresse: {
            rue: "Numéro et nom de la rue",
            codePostal: "Code postal",
            ville: "Ville",
            region: "Province ou région",
            pays: "France"
        }
    };

    return (
        <div className="contact-center">
            <div className="contact-container">
                <div className="image">
                    <img src="florent.jpeg" alt="Photo" className="photo" />
                </div>
                <h2>FLORENT TORRES</h2>
                
                <p><strong>Téléphone :</strong></p>
                <ul>
                    <li>Portable : {ficheContact.telephone.portable}</li>
                    <li>Fixe : {ficheContact.telephone.fixe}</li>
                </ul>
                <p><strong>Adresse email :</strong> {ficheContact.email}</p>
                <p><strong>Adresse postale :</strong></p>
                <p>{ficheContact.adresse.rue}</p>
                <p>{ficheContact.adresse.codePostal} {ficheContact.adresse.ville}</p>
                <p>{ficheContact.adresse.region}</p>
                <p>{ficheContact.adresse.pays}</p>
            </div>
        </div>
    );
}

export default Contact;
