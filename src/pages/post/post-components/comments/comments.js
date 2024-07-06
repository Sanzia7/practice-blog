import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCommentAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { selectUserId } from '../../../../selectors'
import { Icon } from '../../../../components'
import { Comment } from './comment-components'
import styled from 'styled-components'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const userId = useSelector(selectUserId)

	const onNewCommentAdd = (userId, postId, content ) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content))
		setNewComment('')
	}

	return (
		<div className={className}>
			<div className="new-comment">
				<textarea
					name="comment"
					value={newComment}
					placeholder="Коментрий..."
					onChange={({ target }) => setNewComment(target.value)}
				></textarea>
				<Icon
					id="fa-paper-plane-o"
					size="18px"
					margin="0 0 0 10px"
					onClick={() => onNewCommentAdd(userId, postId, newComment)}
				/>
			</div>

			<div className="comments">
				{comments.map(({ postId, id, author, content, publishedAt }) => (
					<Comment
						key={id}
						postId={postId}
						id={id}
						author={author}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	)
}


export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
		color: darkblue;
	}

	& .new-comment textarea {
		width: 550px;
		height: 120px;
		font-size: 18px;
		resize: none;
		border: 1px solid darkblue;
	}
`
