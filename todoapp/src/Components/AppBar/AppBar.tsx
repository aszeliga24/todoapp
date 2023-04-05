import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './style/style.css'
import { Tooltip, IconButton } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import { stylesVars } from 'Config/styles'
import { useTranslation } from 'react-i18next'

const AppBar = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const location = useLocation().pathname.split('/')[1]
	const activeIconStyle = {
		color: stylesVars.colorPrimary,
		transform: 'scale(1.5)',
	}
	const iconStyle = {
		transform: 'scale(1)',
	}

	return (
		<div className='app-bar'>
			<Tooltip
				title={t('pages.homepage')}
				placement='top'
			>
				<IconButton
					onClick={() => {
						navigate('/home')
					}}
				>
					<HomeRoundedIcon
						sx={location === 'home' ? activeIconStyle : iconStyle}
					/>
				</IconButton>
			</Tooltip>
			<Tooltip
				title={t('pages.calendar')}
				placement='top'
			>
				<IconButton
					onClick={() => {
						navigate('/calendar')
					}}
				>
					<CalendarMonthRoundedIcon
						sx={location === 'calendar' ? activeIconStyle : iconStyle}
					/>
				</IconButton>
			</Tooltip>
			<Tooltip
				title={t('buttons.createTask')}
				placement='top'
			>
				<IconButton
					onClick={() => {
						navigate('/task/create')
					}}
					sx={{
						display: 'inline-block',
					}}
				>
					<AddCircleRoundedIcon className='app-bar__icon--create-task' />
				</IconButton>
			</Tooltip>
			<Tooltip
				title={t('pages.comments')}
				placement='top'
			>
				<IconButton
					onClick={() => {
						navigate('/comments')
					}}
				>
					<ChatBubbleOutlineRoundedIcon
						sx={location === 'comments' ? activeIconStyle : iconStyle}
					/>
				</IconButton>
			</Tooltip>
			<Tooltip
				title={t('pages.profile')}
				placement='top'
			>
				<IconButton
					onClick={() => {
						navigate('/profile')
					}}
				>
					<PersonOutlineRoundedIcon
						sx={location === 'profile' ? activeIconStyle : iconStyle}
					/>
				</IconButton>
			</Tooltip>
		</div>
	)
}

export default AppBar
