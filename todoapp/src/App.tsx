import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from 'Pages/Landing/Landing'
import Home from 'Pages/Home/Home'
import PageNotFound from 'Pages/PageNotFound/PageNotFound'
import Calendar from 'Pages/Calendar/Calendar'
import Comments from 'Pages/Comments/Comments'
import Profile from 'Pages/Profile/Profile'
import Tasks from 'Pages/Tasks/Tasks'
import Detail from 'Pages/Tasks/Detail/Detail'
import CreateTask from 'Pages/Tasks/CreateTask/CreateTask'
import CustomAlert from 'Components/CustomAlert/CustomAlert'

const App = () => {
	return (
		<>
			<CustomAlert />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/calendar' element={<Calendar />} />
				<Route path='/tasks'>
					<Route path='' element={<Tasks />} />
					<Route path=':period' element={<Tasks />} />
					<Route path='create' element={<CreateTask />} />
					<Route path='detail/:title' element={<Detail />} />
				</Route>
				<Route path='/comments' element={<Comments />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</>
	)
}

export default App
