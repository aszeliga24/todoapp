import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './features/User/userSlice'
import { customAlertSlice } from './features/CustomAlert/CustomAlertSlice'

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		customAlert: customAlertSlice.reducer,
	},
	devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
