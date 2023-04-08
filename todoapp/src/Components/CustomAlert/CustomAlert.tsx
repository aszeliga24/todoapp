import React from 'react'
import { Stack, Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import * as redux from 'react-redux'
import * as customAlertSlice from 'Store/features/CustomAlert/CustomAlertSlice'
import { useSelector } from 'react-redux'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant='filled'
			{...props}
		/>
	)
})

const CustomAlert = () => {
	const dispatch = redux.useDispatch()

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return
		}
		dispatch(customAlertSlice.clearCustomAlert())
	}

	return (
		<Stack
			spacing={2}
			sx={{
				width: '100vw',
				position: 'absolute',
				fontWeight: 200,
			}}
		>
			<Snackbar
				open={useSelector((state: any) => state.customAlert.isOpen)}
				autoHideDuration={6000}
				onClose={() => {
					handleClose()
				}}
				anchorOrigin={useSelector((state: any) => state.customAlert.anchor)}
			>
				<Alert
					severity={useSelector(
						(state: any) => state.customAlert.severity
					)}
					variant={useSelector((state: any) => state.customAlert.variant)}
					action={
						<IconButton
							size='small'
							aria-label='close'
							color='inherit'
							onClick={() => {
								handleClose()
							}}
						>
							<CloseIcon fontSize='small' />
						</IconButton>
					}
					sx={{
						marginBottom: '4rem',
					}}
				>
					{useSelector((state: any) => state.customAlert.message)}
				</Alert>
			</Snackbar>
		</Stack>
	)
}

export default CustomAlert
