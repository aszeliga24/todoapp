import { createSlice } from '@reduxjs/toolkit'
import { CustomAlertProps } from 'Assets/Models/CustomAlertProps'

const initialState: CustomAlertProps = {
	isOpen: false,
	severity: 'info',
	message: '',
	variant: 'standard',
	anchor: {
		vertical: 'bottom',
		horizontal: 'center',
	},
}

export const customAlertSlice = createSlice({
	name: 'customAlert',
	initialState,
	reducers: {
		setCustomAlert: (state, action) => {
			state.isOpen = true
			state.severity = action.payload.severity
			state.message = action.payload.message
			state.variant = action.payload.variant
			state.anchor = action.payload.anchor
		},
		clearCustomAlert: (state) => {
			state.isOpen = false
		},
	},
})

export const { setCustomAlert, clearCustomAlert } = customAlertSlice.actions

export default customAlertSlice.reducer
