import React from 'react'
import Header from 'Components/Header/Header'
import AppBar from 'Components/AppBar/AppBar'
import ProgressSummary from 'Components/ProgressSummary/ProgressSummary'
import Tasks from 'Components/Tasks/Tasks'

const Home = () => {
	return (
		<div className='homepage__container'>
			<Header title='homepage' />
			<ProgressSummary />
			<Tasks periodTime='today' />
			<AppBar />
		</div>
	)
}

export default Home
