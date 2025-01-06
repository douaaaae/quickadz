import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredAnnonces } from './Selector';
import CardAnnonces from './CardAnnonces';

const ListeAnnonces = () => {
  const annonces = useSelector((state) => state.annonces);
  const filters = useSelector((state) => state.filters);

  const filteredAnnonces = getFilteredAnnonces(annonces, filters);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {filteredAnnonces.map((annonce) => (
        <CardAnnonces key={annonce.id} annonce={annonce} />
      ))}
    </div>
  );
};

export default ListeAnnonces;
