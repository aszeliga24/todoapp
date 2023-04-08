import { TaskModel } from 'Assets/Models/TaskModel'
import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { useTranslation } from 'react-i18next'

type Props = {
	task: TaskModel
}

const Task = (props: Props) => {
	const { task } = props
	const { t } = useTranslation()
	return (
		<div className='tasks__container__body__list__item'>
			<img
				src={require(`Assets/Images/Icons/TaskCategories/${task.category}.png`)}
				alt='task'
			/>
			<div className='tasks__container__body__list__item__info'>
				<div className='tasks__container__body__list__item__info__title'>
					{task.title}
				</div>
				<div className='tasks__container__body__list__item__info__date'>
					{task.date.added.format('DD/MM/YYYY')}
				</div>
			</div>
			<Tooltip title={t('tooltips.tasks.goToTask')}>
				<IconButton>
					<ArrowForwardIosRoundedIcon />
				</IconButton>
			</Tooltip>
		</div>
	)
}

export default Task
