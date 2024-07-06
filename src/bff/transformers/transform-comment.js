

export const transformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	authorId: dbComment.author_id,
	login: dbComment.login,
	publishedAt: dbComment.published_at,
	content: dbComment.content,
})
