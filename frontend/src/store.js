import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

// @desc    Store is a place to hold all of our state. We can then dispatch actions to change that state. We can also subscribe to the store to get the current state.
// Use the configureStore function from Redux Toolkit to create our store
// We are passing in an object with a reducer property.
// We are also passing in a middleware property. Middleware is a way to extend Redux with custom functionality.
// We are also enabling the Redux DevTools extension

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;