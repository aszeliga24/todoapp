import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Drawer, Box, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Menu = () => {
	const { t } = useTranslation()
	const [drawerOpen, setDrawerOpen] = useState(false)
	return (
		<>
			<div className='header__container__content__menu'>
				{drawerOpen ? (
					<IconButton>
						<MenuOpenRoundedIcon
							sx={{
								transform: 'scale(1.5)',
							}}
							onClick={() => setDrawerOpen(!drawerOpen)}
						/>
					</IconButton>
				) : (
					<IconButton>
						<MenuRoundedIcon
							sx={{
								transform: 'scale(1.5)',
							}}
							onClick={() => setDrawerOpen(!drawerOpen)}
						/>
					</IconButton>
				)}
			</div>
			<Drawer
				anchor='left'
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
							<span>{t('pages.menu')}</span>
							<IconButton>
								<ArrowBackRoundedIcon
									sx={{
										transform: 'scale(1.5)',
									}}
									onClick={() => setDrawerOpen(!drawerOpen)}
								/>
							</IconButton>
						</div>
					</div>
				</Box>
			</Drawer>
		</>
	)
}

export default Menu
