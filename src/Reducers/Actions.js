export const setNameFilter = (name) => ({
    type: 'SET_NAME_FILTER',
    payload: name,
  });
  
  export const setPriceFilter = (min, max) => ({
    type: 'SET_PRICE_FILTER',
    payload: { min, max },
  });