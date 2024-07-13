import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users';

// @desc    We want to work with our user data and we need to create some endpoints to work with the backend. 
// We bring in the apiSlice and then use the injectEndpoints method to create our endpoints.
// We are using the mutation method to create a login endpoint.
// We are passing in a query object that contains the url, method, and body of the request.
export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url:  `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url:  `${USERS_URL}`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url:  `${USERS_URL}/profile`,
                method: 'PUT',
                body: data
            })
        }),
    })
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation} = usersApiSlice;