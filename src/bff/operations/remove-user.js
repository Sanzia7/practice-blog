import { ROLE } from '../../constants'
import { deleteUser } from '../api'
import { sessions } from '../sessions'


export const removeUser = async (userSession, userId) => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			response: null,
		}
	}
	await deleteUser(userId)

	return {
		error: null,
		response: true,
	}
}
