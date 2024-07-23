//этот прокси-эмулятор должен обеспечивать авторизацию и регистрацию пользователя и его текущую сессию

import {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
	updateUserRole,
	removeUser,
} from './operations'

export const server = {
	authorize,
	fetchRoles,
	fetchUsers,
	logout,
	register,
	updateUserRole,
	removeUser,
}



