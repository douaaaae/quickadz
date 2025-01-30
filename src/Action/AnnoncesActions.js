export const setCategoryFilter = (categorie) => ({
    type: 'SET_CATEGORY_FILTER',
    payload: categorie,
  });
  
  export const setCityFilter = (ville) => ({
    type: 'SET_CITY_FILTER',
    payload: ville,
  });
  
  export const addAnnonce = (annonce) => ({
    type: 'ADD_ANNONCE',
    payload: annonce,
  });
  
  export const deleteAnnonce = (id) => ({
    type: 'DELETE_ANNONCE',
    payload: id,
  });
  