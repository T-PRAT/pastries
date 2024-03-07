import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from 'react-hot-toast'

export const pastriesApi = createApi({
	reducerPath: 'pastriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/', credentials: 'include' }),
	endpoints: (builder) => ({
		getPastries: builder.query({
			query: () => `pastries`,
		}),
		addPastry: builder.mutation({
			query: (pastry) => ({
				url: `pastry`,
				method: 'POST',
				body: pastry,
			}),
			onQueryStarted: async () => { toast.success(`Pastry added successfully!`) },
		}),
		updatePastry: builder.mutation({
			query: (pastry) => ({
				url: `pastry/${pastry.id}`,
				method: 'PUT',
				body: pastry,
			}),
			onQueryStarted: async () => { toast.success(`Pastry updated successfully!`) },
		}),
		deletePastry: builder.mutation({
			query: (id) => ({
				url: `pastry/${id}`,
				method: 'DELETE',
			}),
			onQueryStarted: async () => { toast.success(`Pastry deleted successfully!`) },
		}),
	}),
})

export const { useGetPastriesQuery, useDeletePastryMutation, useAddPastryMutation, useUpdatePastryMutation } = pastriesApi

