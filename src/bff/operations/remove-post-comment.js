import { deleteComment, deletePost, getComments } from '../api'
import { sessions } from '../sessions'
import { ROLE } from '../../constants'

export const removePostComment = async (hash, id, commentId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR]
	const access = await sessions.access(hash, accessRoles)
	if (!access) {
		return {
			error: 'Доступ запрещён',
			response: null,
		}
	}

	await deletePost(id)
	const comments = await getComments(commentId)
	await Promise.all(comments.map(({ commentId }) => deleteComment(commentId)))

	return {
		error: null,
		response: true,
	}
}
