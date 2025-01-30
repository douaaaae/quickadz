import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryFilter, setCityFilter } from '../Action/AnnoncesActions';
import { getFilteredAnnonces } from '../Action/selectors';
import './style2.css';
import Footer1 from './Footer2';
import Navbar from './AdminNav';
import logo1 from '../images/Chair.jpeg';
import logo2 from '../images/phonecase.jpeg';
import logo3 from '../images/wh.jpeg';
const ListeAnnonces = () => {
  const dispatch = useDispatch();
  const filteredAnnonces = useSelector(getFilteredAnnonces);

  const handleCategoryChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  const handleCityChange = (e) => {
    dispatch(setCityFilter(e.target.value));
  };

  return (
    <div >

<div className='con1'>
  <Navbar  />
  <div className="DIC">
    <div className="masonry-grid">
      <div className="grid-item">
        <img src={logo1} alt="Frame" className='grid-image' />
        <div className="grid-overlay">
          <h3 className="grid-title">Inspiring Art</h3>
          <p className="grid-description">Discover unique pieces for your home.</p>
        </div>
      </div>
      <div className="grid-item">
        <img src={logo2} alt="Electronics" className='grid-image' />
        <div className="grid-overlay">
          <h3 className="grid-title">Latest Electronics</h3>
          <p className="grid-description">Upgrade your life with cutting-edge tech.</p>
        </div>
      </div>
      <div className="grid-item">
        <img src={logo3} alt="Furniture" className='grid-image' />
        <div className="grid-overlay">
          <h3 className="grid-title">Stylish Furniture</h3>
          <p className="grid-description">Transform your space with modern designs.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className='tabs-section'>
      <h1>/All Annonce</h1>
        <div className="tabs-container">
        <button className="tab active">Filter By</button>
        <select onChange={handleCategoryChange} className="tab">
          <option value="">Toutes les catégories</option>
          <option value="Furniture">Furniture</option>
          <option value="Frames">Frames</option>
          <option value="Electronics">Electronics</option>
        </select>
        <select onChange={handleCityChange} className="tab">
          <option value="">Toutes les villes</option>
          <option value="Rabat">Rabat</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Tanger">Tanger</option>
        </select>
        </div>
      </div>
      <div className="product-container">
        {filteredAnnonces.length > 0 ? (
          filteredAnnonces.map((annonce) => (
            <div key={annonce.id} className="product-card">
              <div className="image">
                <img src={annonce.photos[0]} alt={annonce.titre} />
              </div>
              <div className="description">
                <h3>{annonce.titre}</h3>
                <p>Prix: {annonce.prix} €</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune annonce trouvée.</p>
        )}
      </div>
    <Footer1/>
    </div>
  );
};

export default ListeAnnonces;