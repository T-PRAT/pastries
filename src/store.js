import { configureStore } from '@reduxjs/toolkit';
import { pastriesApi } from './services/pastries';

export const store = configureStore({
	reducer: {
		[pastriesApi.reducerPath]: pastriesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pastriesApi.middleware),
});
