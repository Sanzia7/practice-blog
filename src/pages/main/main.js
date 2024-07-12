import { useEffect, useState } from 'react'
import { useServerRequest } from '../../hooks'
import { Pagination, PostCard } from './mian-components'
import { PAGINATION_LIMIT } from '../../constants'
// import { getLastLinks } from './utils'
import styled from 'styled-components'

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	// const [lastPage, setLastPage] = useState(1)
	const requestServer = useServerRequest()

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(
			({ response: { posts, links } }) => {
				setPosts(posts)
				//console.log(setLastPage(getLastLinks(links)))
				// setLastPage(getLastLinks(links))
			},
		)
	}, [requestServer, page])

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						imageUrl={imageUrl}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
					/>
				))}
			</div>

			<Pagination
					page={page}
					// lastPage={lastPage}
					setPage={setPage}
				/>
		</div>
	)
}

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`
//
// 	{/* {lastPage === 1  && ( */}
// 				// <Pagination
// 					// page={page}
// 					// lastPage={lastPage}
// 					// setPage={setPage}
// 				// />
// 			// )}
