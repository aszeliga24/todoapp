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
		changeTaskStatus: (state, action) => {
			const title = action.payload
			const taskIndex = state.tasks.findIndex((task) => task.title === title)
			if (taskIndex >= 0) state.tasks[taskIndex].status === 'active' ? (state.tasks[taskIndex].status = 'done') : (state.tasks[taskIndex].status = 'active')
		},
	},
})

export const { addTask, changeTaskStatus } = userSlice.actions
