import React, { useState } from 'react'
import { IconButton, TextField, Button } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import dayjs from 'dayjs'
import { UserSliceModel } from 'Assets/Models/UserSliceModel'
import { useDispatch } from 'react-redux'
import * as userSlice from 'Store/features/User/userSlice'
import * as customAlertSlice from 'Store/features/CustomAlert/CustomAlertSlice'
import { CustomAlertProps as Props } from 'Assets/Models/CustomAlertProps'

import './style/style.css'

type category = {
	name: string
	selected: boolean
}

const CreateTask = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [categories, setCategories] = useState<category[]>([
		{
			name: 'design',
			selected: false,
		},
		{
			name: 'development',
			selected: false,
		},
		{
			name: 'management',
			selected: false,
		},
	])
	const [taskData, setTaskData] = useState<UserSliceModel['tasks'][0]>({
		title: '',
		description: '',
		category: '',
		status: 'active',
		date: {
			added: dayjs(),
			startTime: '',
			endTime: '',
		},
	})

	const checkIfTitleIsFilled = () => {
		if (taskData.title.length > 0) {
			return true
		} else {
			console.log('title not created')
			return false
		}
	}
	const checkIfDescriptionIsFilled = () => {
		console.log(taskData.description)
		if (taskData.description.length > 0) {
			return true
		} else {
			console.log('desc not created')
			return false
		}
	}
	const checkIfCategoryIsSelected = () => {
		if (taskData.category.length > 0) {
			return true
		} else {
			console.log('cat not created')
			return false
		}
	}
	const checkIfDateIsFilled = () => {
		if (taskData.date.added) {
			return true
		} else {
			console.log('date not created')
			return false
		}
	}

	const handleTaskCreation = () => {
		if (
			checkIfTitleIsFilled() &&
			checkIfDescriptionIsFilled() &&
			checkIfCategoryIsSelected() &&
			checkIfDateIsFilled()
		) {
			dispatch(userSlice.addTask(taskData))
			navigate(-1)
			const props: Props = {
				isOpen: true,
				severity: 'info',
				variant: 'standard',
				message: `${t('taskCreation.alerts.added')}`,
				anchor: { vertical: 'bottom', horizontal: 'center' },
			}
			dispatch(customAlertSlice.setCustomAlert(props))
		} else {
			console.log('task')
		}
	}

	return (
		<div className='task-create'>
			<div className='task-create__header'>
				<div className='task-create__header__btn'>
					<IconButton
						onClick={() => {
							navigate(-1)
						}}
					>
						<ArrowBackRoundedIcon />
					</IconButton>
				</div>
				<div className='task-create__header__title'>
					{t('pages.tasks.create')}
				</div>
			</div>
			<div className='task-create__form-container'>
				<div className='task-create__form-container__group'>
					<div className='task-create__form-container__group__label'>
						{t('taskCreation.name')}
					</div>
					<TextField
						variant='outlined'
						fullWidth
						label={t('taskCreation.placeholders.name')}
						onChange={(e) => {
							setTaskData({
								...taskData,
								title: e.target.value,
							})
						}}
					/>
				</div>
				<div className='task-create__form-container__group'>
					<div className='task-create__form-container__group__label'>
						{t('taskCreation.category')}
					</div>
					<div className='task-create__form-container__group__categories'>
						{categories.map((category, index) => {
							return (
								<Button
									key={index}
									variant={
										category.selected ? 'contained' : 'outlined'
									}
									onClick={() => {
										const newCategories = categories.map((cat, i) => {
											if (i === index) {
												setTaskData({
													...taskData,
													category: cat.name,
												})
												return {
													...cat,
													selected: !cat.selected,
												}
											} else {
												return {
													...cat,
													selected: false,
												}
											}
										})
										setCategories(newCategories)
									}}
									className='task-create__form-container__group__categories__btn'
								>
									{category.name}
								</Button>
							)
						})}
					</div>
				</div>
				<div className='task-create__form-container__group'>
					<div className='task-create__form-container__group__label'>
						{t('taskCreation.date')}
					</div>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							sx={{ width: '100%' }}
							slots={{ openPickerIcon: CalendarMonthRoundedIcon }}
							format='DD/MM/YYYY'
							views={['day', 'month', 'year']}
							value={taskData.date.added}
							onChange={(newValue) => {
								newValue &&
									setTaskData({
										...taskData,
										date: {
											...taskData.date,
											added: newValue,
										},
									})
							}}
						/>
					</LocalizationProvider>
					<div className='task-create__form-container__group__body2'>
						<div className='task-create__form-container__group__body2__el'>
							<div className='task-create__form-container__group__body2__el__label'>
								{t('taskCreation.startTime')}
							</div>
							<TimePicker defaultValue={dayjs()} />
						</div>
						<div className='task-create__form-container__group__body2__el'>
							<div className='task-create__form-container__group__body2__el__label'>
								{t('taskCreation.endTime')}
							</div>
							<TimePicker defaultValue={dayjs().endOf('day')} />
						</div>
					</div>
				</div>
				<div className='task-create__form-container__group'>
					<div className='task-create__form-container__group__label'>
						{t('taskCreation.description')}
					</div>
					<TextField
						variant='outlined'
						fullWidth
						multiline
						minRows={2}
						label={t('taskCreation.placeholders.description')}
						value={taskData.description}
						onChange={(e) => {
							setTaskData({
								...taskData,
								description: e.target.value,
							})
						}}
					/>
				</div>
				<div className='task-create__form-container__group'>
					<Button
						variant='contained'
						color='primary'
						fullWidth
						style={{
							marginBottom: '1rem',
						}}
						onClick={() => {
							handleTaskCreation()
						}}
					>
						{t('buttons.createTask')}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CreateTask
