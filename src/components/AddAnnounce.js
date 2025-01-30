import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAnnonce } from '../Action/AnnoncesActions';
import './style3.css';
import Navbar from './MembreNav';
import Footer1 from './Footer2';
const AddAnnounce = () => {
  const dispatch = useDispatch();
  const [annonce, setAnnonce] = useState({
    titre: '',
    description: '',
    categorie: '',
    prix: '',
    ville: '',
    photos: [],
    datePoster : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnnonce({
      ...annonce,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file)); // Convert files to URLs
    setAnnonce({
      ...annonce,
      photos: fileURLs,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (annonce.titre && annonce.prix && annonce.ville) {
      dispatch(addAnnonce(annonce)); // Dispatch the action
      alert('Annonce ajoutée avec succès !');
      setAnnonce({
        titre: '',
        description: '',
        categorie: '',
        prix: '',
        ville: '',
        photos: [],
        datePoster: '',
      });
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  };

  return (
  <body className='bd'>
    <Navbar/>
    <div className="containerr22">
    <div className="form-containerr22">
      <h2 className='h2h2'>Ajouter une Annonce</h2>
      <form onSubmit={handleSubmit}>
        {/* Première ligne */}
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="titre">Titre:</label>
            <input
              type="text"
              name="titre"
              value={annonce.titre}
              onChange={handleChange}
              placeholder="Titre de l'annonce"
              required
            />
          </div>
          <div className='form-groupp1'>
          <label htmlFor="datePoster">Date Poster</label>
            <input type="text" name='datePoster' value={annonce.datePoster} onChange={handleChange} placeholder="La date de l'annonce"/>
          </div>    
        </div>

        {/* Deuxième ligne */}
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="categorie">Catégorie:</label>
            <select
              name="categorie"
              value={annonce.categorie}
              onChange={handleChange}
            >
              <option value="">Sélectionnez une catégorie</option>
              <option value="Frames">Frames</option>
              <option value="Furniture">Furniture</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>
          <div className="form-groupp1">
            <label htmlFor="prix">Prix (€):</label>
            <input
              type="number"
              name="prix"
              value={annonce.prix}
              onChange={handleChange}
              placeholder="Prix"
              required
            />
          </div>
        </div>

        {/* Troisième ligne */}
        <div className="form-row">
          <div className="form-groupp1">
            <label htmlFor="ville">Ville:</label>
            <select name="ville" value={annonce.ville} onChange={handleChange}>
              <option value="">Sélectionnez une ville</option>
              <option value="Rabat">Rabat</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Tanger">Tanger</option>
            </select>
          </div>
          <div className="form-groupp1">
            <label htmlFor="photos">Image(s):</label>
            <input
              type="file"
              name="photos"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="form-row">
        <div className="form-groupp1">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              value={annonce.description}
              onChange={handleChange}
              placeholder="Description de l'annonce"
            ></textarea>
          </div>
        </div>

        {/* Bouton */}
        <button type="submit" className="submit-button">
          Ajouter l'Annonce
        </button>
      </form>
    </div>
  </div> 
  <Footer1/>
  </body>
   
  );
};

export default AddAnnounce;