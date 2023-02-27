// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL_LOGIN, API_URL_REGISTER } from "../../common/Apis";

// Define a service using a base URL and expected endpoints
export const RtqApi = createApi({
	reducerPath: "RtqApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://forsaapis.mhouses.net/api/" }),
	endpoints: (builder) => ({
		// Auth
		login: builder.mutation({
			query: (data) => ({
				url: `${API_URL_LOGIN}`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),

		register: builder.mutation({
			query: (data) => ({
				url: `${API_URL_REGISTER}`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
		// Products
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation } = RtqApi;
