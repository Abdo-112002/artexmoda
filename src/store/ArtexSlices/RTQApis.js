// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
	API_URL,
	API_URL_LOGIN,
	API_URL_REGISTER,
	API_URL_GET_PRODUCTS,
} from "../../common/Apis";

// Define a service using a base URL and expected endpoints
export const RtqApi = createApi({
	reducerPath: "RtqApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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

		// Get Product
		getProduct: builder.query({
			query: (id) => ({
				url: `${API_URL_GET_PRODUCTS}`,
				method: "GET",
				params: {
					spreadsheetId: id,
				},
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			}),
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation, useGetProductQuery } =
	RtqApi;
