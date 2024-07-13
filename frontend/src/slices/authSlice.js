// @ desc   In Redux Toolkit, we create reducers using something called a slice.
// A slice is a collection of reducer logic and actions for a single feature of our app.

import { createSlice } from "@reduxjs/toolkit";

// Create initial state by check local storage. In this case, user info
const initialState = {
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}

// We will create a slice for our authentication that will only deal with the local storage of the user.
// We have one reducer that sets the user info in local storage and another that removes it.

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
})

export const { setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;