import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from 'Pages/Landing/Landing'
import Home from 'Pages/Home/Home'
import PageNotFound from 'Pages/PageNotFound/PageNotFound'
import Calendar from 'Pages/Calendar/Calendar'
import Comments from 'Pages/Comments/Comments'
import Profile from 'Pages/Profile/Profile'

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Landing />}
				/>
				<Route
					path='/home'
					element={<Home />}
				/>
				<Route
					path='/calendar'
					element={<Calendar />}
				/>
				<Route
					path='/comments'
					element={<Comments />}
				/>
				<Route
					path='/profile'
					element={<Profile />}
				/>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</>
	)
}

export default App
