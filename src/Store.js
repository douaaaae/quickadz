import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/authSlice';
import Annonces from './Reducers/AnnoncesReducer';
const store = configureStore({
    reducer: {
        auth: authReducer,        // Handles authentication and role management
        annonces: Annonces, // Handles announcements or related data
    },
});

export default store;
