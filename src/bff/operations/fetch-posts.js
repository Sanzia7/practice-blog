import { getComments, getPosts } from '../api'
import { getCommentsCount } from '../utils'


export const fetchPosts = async (searchPhrase, page, limit) => {
	const [{ posts }, comments] = await Promise.all([
		getPosts(searchPhrase, page, limit),
		getComments(),
	])

	return {
		error: null,
		response: {
			posts: posts.map((post) => ({
				...post,
				commentsCount: getCommentsCount(comments, post.id),
			})),
		},
	}
}

//
// export const fetchPosts = async (searchPhrase, page, limit) => {
// 	const [{ posts, links }, comments] = await Promise.all([
// 		getPosts(searchPhrase, page, limit),
// 		getComments(),
// 	])
// 	// const posts = await getPosts()
// 	// const comments = await getComments()
//
// 	console.log(links)
// 	return {
// 		error: null,
// 		response: {
// 			posts: posts.map((post) => ({
// 				...post,
// 				commentsCount: getCommentsCount(comments, post.id),
// 			})),
// 			links,
// 		},
//  	}
// }

// export const fetchPosts = async (page, per_page) => {
// 	try {
// 		console.log(`Fetching posts for page: ${page}, per_page: ${per_page}`)
// 		const [posts, comments] = await Promise.all([
// 			getPosts(page, per_page),
// 			getComments(),
// 		])
//
// 		console.log('Posts:', posts)
// 		console.log('Comments:', comments)
//
// 		if (!Array.isArray(posts)) {
// 			throw new Error('Expected an array of posts')
// 		}
//
// 		return {
// 			error: null,
// 			response: posts.map((post) => ({
// 				...post,
// 				commentsCount: getCommentsCount(comments, post.id),
// 			})),
// 		}
// 	} catch (error) {
// 		console.error('Error fetching posts:', error)
// 		return {
// 			error: error.message,
// 			response: [],
// 		}
// 	}
// }
