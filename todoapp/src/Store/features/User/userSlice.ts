import { createSlice } from '@reduxjs/toolkit'
import { UserSliceModel } from 'Assets/Models/UserSliceModel'

const initialState: UserSliceModel = {
	firstTimeVisiting:
		localStorage.getItem('firstTimeVisiting') &&
		localStorage.getItem('firstTimeVisiting') === 'true'
			? true
			: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		clearUserData: () => localStorage.setItem('firstTimeVisiting', 'true'),
	},
})
