import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// @desc    In order to make async requests from our slice, we need to use something called createAsyncThunk.
// This can be a bit confusing but Redux handles this behind the scenes.
const baseQuery = fetchBaseQuery({ baseUrl: ''});

// We are using the createApi function from Redux Toolkit to create our API slice instead of createSlice, 
// because it includes the middleware that we need to make requests to our server.
// We are passing in a baseQuery object that will be used to make our requests. 
// We are also passing in an endpoints object that will hold all of our endpoints.
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
});