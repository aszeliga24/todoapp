import React from 'react'
import { Button, Typography, Box } from '@mui/material'
import './style/style.css'
import { useTranslation } from 'react-i18next'
import { stylesVars } from 'Config/styles'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	return (
		<Box
			flexDirection={'column'}
			className='landing-page__container'
		>
			<Box
				flexDirection={'column'}
				className='landing-page__container__image'
			>
				<Box
					component='img'
					alt='Landing Page Background'
					src='https://ik.imagekit.io/knf4z27bi/data-science/DriveGrowth_IfmZn6ytJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665734389687'
					width={'80%'}
					maxWidth={'400px'}
					height={'auto'}
				/>
			</Box>
			<Box
				flexDirection={'column'}
				landing-page__container__image
				className='landing-page__container__content'
			>
				<Box
					flexDirection={'column'}
					className='landing-page__container__content__text'
				>
					<Typography
						variant='h5'
						className='landing-page__container__content__text__header'
						sx={{ fontWeight: 700, wordSpacing: 4 }}
					>
						{t('landing.title')}
					</Typography>
					<Typography
						variant='body1'
						className='landing-page__container__content__text__description'
					>
						{t('landing.description')}
					</Typography>
				</Box>
				<Box flexDirection={'column'}>
					<Button
						variant='contained'
						fullWidth
						sx={{
							padding: '.75rem 0',
							borderRadius: stylesVars.borderRadius,
						}}
						onClick={() => navigate('home')}
					>
						{t('buttons.start')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Landing
