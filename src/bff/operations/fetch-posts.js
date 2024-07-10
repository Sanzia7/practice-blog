
import { getComments, getPosts } from '../api'
import { getCommentsCount } from '../utils'


export const fetchPosts = async (hash) => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()])
	// const posts = await getPosts()
	// const comments = await getComments()

	return {
		error: null,
		response: posts.map((post) => ({
			...post,
			commentsCount: getCommentsCount(comments, post.id),
		})),
	}
}
