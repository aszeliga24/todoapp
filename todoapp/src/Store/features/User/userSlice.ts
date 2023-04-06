import { createSlice } from '@reduxjs/toolkit'
import { UserSliceModel } from 'Assets/Models/UserSliceModel'

const initialState: UserSliceModel = {
	tasks: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.tasks.push(action.payload)
		},
	},
})
