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

import './style/style.css'

type category = {
	name: string
	selected: boolean
}

const CreateTask = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
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
			added: dayjs().format('MM/DD/YYYY'),
			startTime: '',
			endTime: '',
		},
	})

	const handleDateChange = (newValue: string) => {
		setTaskData({
			...taskData,
			date: {
				...taskData.date,
				added: newValue,
			},
		})
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
							onChange={(newValue) => {
								newValue && handleDateChange(newValue)
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
					>
						{t('buttons.createTask')}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CreateTask
