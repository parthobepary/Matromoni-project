import apiSlice from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        register: builder.mutation({
            query: data => ({
                url: "/admin/auth/registeradmin",
                method: "POST",
                body: data,
            }),
        }),
        login: builder.mutation({
            query: data => ({
                url: "/member/auth/login",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
