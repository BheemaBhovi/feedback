import { configureStore } from '@reduxjs/toolkit';
import ToggleButtonReducer from './toggle';



export const store = configureStore({
    reducer: {
        toggleButton: ToggleButtonReducer
    },
  });