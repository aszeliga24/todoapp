export interface CustomAlertProps {
	isOpen: boolean
	severity: 'error' | 'warning' | 'info' | 'success'
	message: string
	variant: 'filled' | 'outlined' | 'standard'
	anchor?: {
		vertical: 'top' | 'bottom'
		horizontal: 'left' | 'center' | 'right'
	}
}
