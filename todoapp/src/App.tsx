import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from 'Pages/Landing/Landing'
import Home from 'Pages/Home/Home'
import PageNotFound from 'Pages/PageNotFound/PageNotFound'

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
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</>
	)
}

export default App
