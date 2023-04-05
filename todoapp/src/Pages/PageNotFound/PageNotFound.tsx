import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
	const navigate = useNavigate()
	return (
		<div>
			404 page not found
			<button onClick={() => navigate(-1)}>Go to previous page</button>
		</div>
	)
}

export default PageNotFound
