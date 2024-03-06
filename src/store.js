import { configureStore } from '@reduxjs/toolkit';
import { gameApi } from './services/game';

export const store = configureStore({
	reducer: {
		[gameApi.reducerPath]: gameApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(gameApi.middleware),
});
