import React from 'react'
import './style/style.css'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const ProgressSummary = () => {
	const { t } = useTranslation()
	const tasks = useSelector((state: any) => state.user.tasks)
	console.log(tasks)
	return (
		<>
			<div className='progress-summery'>
				<div className='progress-summery__container'>
					<div className='progress-summery__container__title'>
						{t('home.progress.title')}
					</div>
					<div className='progress-summery__container__allTasksCounter'>
						{tasks.filter((task: any) => task.status === 'done').length}{' '}
						{t('home.progress.allTasksCounter')}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProgressSummary
