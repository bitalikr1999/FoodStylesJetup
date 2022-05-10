import _ from 'lodash'
import { presenceCost, validate } from '@/shared/tools'

const constraints = {
	email: {
		presence: presenceCost,
		email: {
			message: '^Incorrect email',
		},
	},
	name: {
		presence: presenceCost,
	},
	password: {
		presence: presenceCost,
		length: { minimum: 6, message: 'Password length must be at least 6' },
	},
}

export const validateSignUp = <T>(data: T) => {
	return validate(data, constraints)
}
