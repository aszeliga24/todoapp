import { Dayjs } from 'dayjs'

export type UserSliceModel = {
	tasks: {
		title: string
		description: string
		category: string
		status: 'active' | 'done'
		date: {
			added: Dayjs
			startTime?: string
			endTime?: string
		}
	}[]
}
