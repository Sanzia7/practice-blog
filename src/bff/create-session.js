import { removeComment } from './session'
import { ROLE_ID } from '../constants'

export const createSession = (roleId) => {
	const session = {
		//удаялем при выходе пользователя каждый метод/key-каждое свойство объекта session, которые он использовал во время сессии:
		logout() {
				Object.keys(session).forEach((key) => {
						delete session[key]
				})
		}
	}

	switch (roleId) {
		case ROLE_ID.ADMIN: {
			session.removeComment = removeComment
			break
		}

		case ROLE_ID.MODERATOr: {
			session.removeComment = removeComment
			break
		}

		case ROLE_ID.READER: {
			
			break
		}
			default: //ничего не делать
	}

	return session
}
