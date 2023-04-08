import React from 'react'
import './style/style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type Props = {
	periodTime: string
}

const Tasks = (props: Props) => {
	const { periodTime } = props
	const { t } = useTranslation()
	return (
		<div className='tasks'>
			<div className='tasks__container'>
				<div className='tasks__container__header'>
					<div className='tasks__container__header__title'>
						{periodTime === 'today'
							? t('home.tasks.today')
							: t('home.tasks.upcoming')}
					</div>
					<Link to='/tasks/today'>{t('home.tasks.seeAll')}</Link>
				</div>
			</div>
		</div>
	)
}

export default Tasks
