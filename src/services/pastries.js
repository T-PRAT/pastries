import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pastriesApi = createApi({
	reducerPath: 'pastriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
	endpoints: (builder) => ({
		getPastriesList: builder.query({
			query: () => `game/pastries`,
		}),
		getRandomPastries: builder.query({
			query: (quantity) => `game/win-pastries/${quantity}`,
		}),
	}),
})

export const { useGetPastriesListQuery, useGetRandomPastriesQuery } = pastriesApi
