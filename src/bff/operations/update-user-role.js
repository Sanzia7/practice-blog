import { ROLE } from '../../constants'
import { setUserRole } from '../api'
import { sessions } from '../sessions'


export const updateUserRole = async (userSession, userId, newRoleId) => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			response: null,
		}
	}
	await setUserRole(userId, newRoleId)

	return {
		error: null,
		response: true,
	}
}
