import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		// Add your reducers here
	},
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
