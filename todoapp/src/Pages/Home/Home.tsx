import React from 'react'
import Header from 'Components/Header/Header'
import AppBar from 'Components/AppBar/AppBar'
import ProgressSummary from 'Components/ProgressSummary/ProgressSummary'

const Home = () => {
	return (
		<div className='homepage__container'>
			<Header title='homepage' />
			<ProgressSummary />
			<AppBar />
		</div>
	)
}

export default Home
