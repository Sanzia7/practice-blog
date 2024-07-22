
// export const deleteComment = async(commentId) =>
// 	fetch(`http://localhost:3005/comments/${commentId}`, {
// 		method: 'DELETE',
// 	})

export const deleteComment = (commentId) =>
	fetch(`http://localhost:3005/comments/${commentId}`, {
		method: 'DELETE',
	})




