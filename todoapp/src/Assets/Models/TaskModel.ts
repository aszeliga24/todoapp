import { Dayjs } from 'dayjs'

export type TaskModel = {
	title: string
	description: string
	category: string
	status: 'active' | 'done'
	date: {
		added: Dayjs
		startTime?: string
		endTime?: string
	}
}
