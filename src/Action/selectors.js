export const getFilteredAnnonces = (state) => {
  const { annonces = [], filters = {} } = state.annonces; 

  return annonces.filter((annonce) => {
    const matchesCategorie = !filters.categorie || annonce.categorie === filters.categorie;
    const matchesVille = !filters.ville || annonce.ville === filters.ville;
    return matchesCategorie && matchesVille;
  });
};
