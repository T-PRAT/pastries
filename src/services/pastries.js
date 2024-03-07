import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const pastriesApi = createApi({
	reducerPath: 'pastriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/', credentials: 'include' }),
	tagTypes: ['Pastries'],
	endpoints: (builder) => ({
		getPastries: builder.query({
			query: () => `pastries`,
			providesTags: ['Pastries'],
		}),
		addPastry: builder.mutation({
			query: (pastry) => ({
				url: `pastry`,
				method: 'POST',
				body: pastry,
			}),
			onQueryStarted: async (arg, { queryFulfilled }) => {
				const { data } = await queryFulfilled;
				toast.success(`Pastry ${data.name} added successfully!`);
			},
		}),
		updatePastry: builder.mutation({
			query: (pastry) => ({
				url: `pastry/${pastry.id}`,
				method: 'PUT',
				body: pastry,
			}),
			onQueryStarted: async (arg, { queryFulfilled }) => {
				const { data } = await queryFulfilled;
				toast.success(`Pastry ${data.name} updated successfully!`);
			},
		}),
		deletePastry: builder.mutation({
			query: (id) => ({
				url: `pastry/${id}`,
				method: 'DELETE',
			}),
			invalidateTags: ['Pastries'],
		}),
	}),
})

export const { useGetPastriesQuery, useDeletePastryMutation, useAddPastryMutation, useUpdatePastryMutation } = pastriesApi

