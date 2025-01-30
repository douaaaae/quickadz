import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAnnonce } from '../Action/AnnoncesActions';
import { getFilteredAnnonces } from '../Action/selectors';
import Footer1 from './Footer2';
import './style4.css';
import Navbar from './NavAdmin';

export default function ListeAnnonces2() {
  const dispatch = useDispatch();
  const filteredAnnonces = useSelector(getFilteredAnnonces);

  const handleDelete = (id) => {
    dispatch(deleteAnnonce(id));
  };

  return (
    <>
      <Navbar />
      <h2 className='h22'>Welcome Back, Mr.Karrem!</h2>
      <p className='p22'>You can delete The ads.</p>
      <div className="product-container1">
        {filteredAnnonces.length > 0 ? (
          filteredAnnonces.map((annonce) => (
            <div key={annonce.id} className="product-card1">
              <div className="image1">
                <img src={annonce.photos[0]} alt={annonce.titre}/>
              </div>
              <div className="description1">
                <h3>{annonce.titre}</h3>
                <p>Prix: {annonce.prix} €</p>
                <p>Date : {annonce.datePoster}</p>
                <button onClick={() => handleDelete(annonce.id)} className="delete-button">
                  Supprimer
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune annonce trouvée.</p>
        )}
      </div>
      <Footer1 />
    </>
  );
}