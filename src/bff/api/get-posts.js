//
import { transformPost } from '../transformers'


export const getPosts = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/posts?_title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedPosts) => loadedPosts.json())
		.then((loadedPosts) => ({
			posts: loadedPosts && loadedPosts.map(transformPost),
		}))

// export const getPosts = (page, limit) =>
// 	fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`)
// 		.then((loadedPosts) =>
// 			Promise.all([loadedPosts.json(), loadedPosts.headers.get(`Link`)]),
// 		)
// 		.then(([loadedPosts, links]) => ({
// 			posts: loadedPosts && loadedPosts.map(transformPost),
// 			links,
// 		}))


//

// export const getPosts = (page, limit) =>
// 	fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`)
// 		.then((loadedPosts) =>
// 			Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]),
// 		)
// 		.then(([loadedPosts, links]) => {
// 			console.log('Links:', links) // Логирование ссылок для проверки
// 			return loadedPosts
// 		})
//

//
// export const getPosts = async (page, limit) => {
// 	try {
// 		const response = await fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${per_page}`)
// 		if (!response.ok) {
// 			throw new Error(`HTTP error! status: ${response.status}`)
// 		}
// 		const [loadedPosts, links] = await Promise.all([response.json(), response.headers.get('Link')])
// 		return ({
// 			posts: loadedPosts && loadedPosts.map(transformPost),
// 			links,
// 		})
// 	} catch (error) {
// 		console.error('Error fetching posts:', error)
// 		return {
// 			posts: [],
// 			links: null,
// 		}
// 	}
// }
