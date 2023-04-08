import React from 'react'
import './style/style.css'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { LinearProgress } from '@mui/material'

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
						{tasks.filter((task: any) => task.status === 'active').length}{' '}
						{t('home.progress.allTasksCounter')}
					</div>
					<div className='progress-summery__container__progress-bar'>
						{(tasks.filter((task: any) => task.status === 'done').length /
							tasks.length) *
							100 ===
							100 ||
						tasks.filter((task: any) => task.status === 'active')
							.length === 0 ? (
							<div className='progress-summery__container__progress-bar__done'>
								{t('home.progress.done')}
							</div>
						) : (
							<LinearProgress
								variant='determinate'
								value={
									(tasks.filter((task: any) => task.status === 'done')
										.length /
										tasks.length) *
									100
								}
							/>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default ProgressSummary
