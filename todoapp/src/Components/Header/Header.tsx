import React from 'react'
import { HeaderProps } from 'Assets/Models/HeaderProps'
import { useTranslation } from 'react-i18next'
import Menu from './Menu/Menu'
import './style/style.css'
import Notifications from './Notifications/Notifications'

const Header = (props: HeaderProps) => {
	const { t } = useTranslation()
	return (
		<div className='header__container'>
			<div className='header__container__content'>
				<Menu />
				<div className='header__container__content__title'>{t(`pages.${props.title}`)}</div>
				<Notifications />
			</div>
		</div>
	)
}

export default Header
