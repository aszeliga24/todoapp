import React from 'react'
import './style/style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Task from './Task/Task'
import { TaskModel } from 'Assets/Models/TaskModel'
import dayjs from 'dayjs'

type Props = {
	periodTime: string
}

const Tasks = (props: Props) => {
	const { periodTime } = props
	const { t } = useTranslation()
	const tasks = useSelector((state: any) => state.user.tasks)
	return (
		<div className='tasks'>
			<div className='tasks__container'>
				<div className='tasks__container__header'>
					<div className='tasks__container__header__title'>{periodTime === 'today' ? t('home.tasks.today') : t('home.tasks.upcoming')}</div>
					<Link to='/tasks/all'>{t('home.tasks.seeAll')}</Link>
				</div>
				<div className='tasks__container__body'>
					<div className='tasks__container__body__list'>
						{tasks
							.filter((task: TaskModel) => task.date.added.format('DD/MM/YYYY') === dayjs().format('DD/MM/YYYY'))
							.map((task: TaskModel) => {
								return <Task task={task} />
							})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tasks
