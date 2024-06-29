import { ACTION_TYPE } from '../actions'
import { ROLE_ID } from '../constants'

const initialUserState = {
	id: null,
	login: null,
	roleId: ROLE_ID.GUEST,
	session: null,
}


export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: 
			return {
				...state,
				...action.payload,
			}
		
		case ACTION_TYPE.LOGOUT: 
			return initialUserState
		
		default:
			return state
	}
}
