import { configureStore } from '@reduxjs/toolkit';
import { gameApi } from './services/game';
import { pastriesApi } from './services/pastries';

export const store = configureStore({
	reducer: {
		[gameApi.reducerPath]: gameApi.reducer,
		[pastriesApi.reducerPath]: pastriesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(gameApi.middleware, pastriesApi.middleware),
});
