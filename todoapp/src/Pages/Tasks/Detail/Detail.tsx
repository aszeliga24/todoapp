import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { IconButton, Tooltip } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded'
import { useTranslation } from 'react-i18next'
import { stylesVars } from 'Config/styles'

import NotFound from './NotFound/NotFound'
import './style/style.css'
import * as userSlice from 'Store/features/User/userSlice'

const Detail = () => {
	const { title } = useParams()
	const navigate = useNavigate()
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const tasks = useSelector((state: any) => state.user.tasks)
	const task = tasks.find((task: any) => task.title === title)

	return task ? (
		<>
			<div className='task-details'>
				<div className='task-details__header'>
					<div className='task-details__header__btn'>
						<IconButton
							onClick={() => {
								navigate(-1)
							}}>
							<ArrowBackRoundedIcon />
						</IconButton>
					</div>
					<div className='task-details__header__title'>{t('pages.tasks.details')}</div>
				</div>
				<div className='task-details__container'>
					<div className='task-details__container__title'>{task.title}</div>
					<div className='task-details__container__date'>
						<Tooltip title={t('pages.tasks.goToCalendar')}>
							<IconButton>
								<CalendarMonthRoundedIcon style={{ color: stylesVars.colorPrimary }} />
							</IconButton>
						</Tooltip>
						{task.date.added.format('DD MMM') + `, ${t('pages.tasks.date')} ` + task.date.added.format('HH:MM')}
					</div>
					<div className='task-details__container__status'>
						{task.status === 'active' ? <div className='task-details__container__stasus__active'>{t('pages.tasks.active')}</div> : <div className='task-details__container__stasus__done'>{t('pages.tasks.done')}</div>}
						<Tooltip title={t('pages.tasks.changeStatus')}>
							<IconButton
								onClick={() => {
									dispatch(userSlice.changeTaskStatus(task.title))
								}}>
								<CheckCircleOutlineRoundedIcon />
							</IconButton>
						</Tooltip>
					</div>
				</div>
			</div>
		</>
	) : (
		<NotFound />
	)
}

export default Detail
