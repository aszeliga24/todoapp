import React, { useState } from 'react'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Badge, IconButton, Drawer, Box, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Notifications = () => {
	const { t } = useTranslation()
	const [drawerOpen, setDrawerOpen] = useState(false)
	return (
		<div>
			<div className='header__container__content__notifications'>
				<Tooltip title={t('tooltips.header.notifications')}>
					<IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
						<Badge
							color='primary'
							variant='dot'
							overlap='circular'
						>
							<NotificationsNoneRoundedIcon />
						</Badge>
					</IconButton>
				</Tooltip>
			</div>
			<Drawer
				anchor='right'
				open={drawerOpen}
				onClose={() => setDrawerOpen(!drawerOpen)}
			>
				<Box
					sx={{
						width: '80vw',
						height: '100%',
						backgroundColor: 'white',
					}}
				>
					<div className='menu__container'>
						<div className='menu__container__header'>
							<IconButton>
								<ArrowBackRoundedIcon
									sx={{
										transform: 'scale(-1.5)',
									}}
									onClick={() => setDrawerOpen(!drawerOpen)}
								/>
							</IconButton>
							<span>{t('pages.notification')}</span>
						</div>
					</div>
				</Box>
			</Drawer>
		</div>
	)
}

export default Notifications
