import { configureStore } from "@reduxjs/toolkit";
import homeDataReducer from '../features/diplay'
import InventryReducer from '../features/inventry'

export const store = configureStore({
 reducer: {
  homes: homeDataReducer,
  inventry: InventryReducer,  // fix spelling
},

})
