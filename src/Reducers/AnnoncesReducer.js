const INITIAL_STATE={
    annonces: [
        { id: 1, title: 'Annonce 1', price: 100, imageUrl: 'https://via.placeholder.com/300' },
        { id: 2, title: 'Annonce 2', price: 200, imageUrl: 'https://via.placeholder.com/300' },
        { id: 3, title: 'Annonce 3', price: 150, imageUrl: 'https://via.placeholder.com/300' },
      ],
      filters: {
        name: '', // Filtre par nom
        minPrice: 0, // Filtre par prix minimum
        maxPrice: Infinity, // Filtre par prix maximum
      }
}
const annoncesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'SET_NAME_FILTER':
        return {
          ...state,
          filters: {
            ...state.filters,
            name: action.payload,
          },
        };
      case 'SET_PRICE_FILTER':
        return {
          ...state,
          filters: {
            ...state.filters,
            minPrice: action.payload.min,
            maxPrice: action.payload.max,
          },
        };
      default:
        return state;
    }
  };
  export default annoncesReducer;