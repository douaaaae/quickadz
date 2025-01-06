import React from 'react'
import { createStore } from 'redux';
import Annonces from './Reducers/AnnoncesReducer';
const Store=createStore(Annonces) ;
export default Store;
