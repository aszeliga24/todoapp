export type UserSliceModel = {
	tasks: {
		title: string
		description: string
		category: string
		status: 'active' | 'done'
		date: {
			added: string
			startTime: string
			endTime: string
		}
	}[]
}
