import { useEffect, useState } from 'react'
import { useServerRequest } from '../../hooks'
import { TableRow, UserRow } from './user-components'
import { Content, H2 } from '../../components'
import { ROLE } from '../../constants'
import styled from 'styled-components'

const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([])
	const [roles, setRoles] = useState([])
	const [errorMessage, setErrorMessage] = useState(null)
	const [isUpdateUserList, setIsUpdateUserList] = useState(false)

	const requestServer = useServerRequest()

	useEffect(() => {
		Promise.all([
			requestServer('fetchUsers'),
			requestServer('fetchRoles'),
		]).then(([usersRes, rolesRes]) => {
			if (usersRes.error || rolesRes.error) {
				setErrorMessage(usersRes.error || rolesRes.error)
					return
			}
			setUsers(usersRes.response)
			setRoles(rolesRes.response)
		})
	}, [requestServer, isUpdateUserList])

	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setIsUpdateUserList(!isUpdateUserList)
		})
	}


	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Пользователи</H2>
				<div>
					<TableRow>
						<div className='login-column'>Логин</div>
						<div className='registered-at-column'>Дата регистрации</div>
						<div className='role-column'>Роль</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles.filter(
								({ id: roleId} ) => +roleId !== ROLE.GUEST
							)}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}

				</div>
			</Content>
		</div>
	)
}

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 10px auto;
	width: 570px;
	font-size: 18px;
`
