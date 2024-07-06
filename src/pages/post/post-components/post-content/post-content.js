import styled from 'styled-components'
import { H2, Icon } from '../../../../components'

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className='special-panel'>
				<div className='published_at'>
					<Icon
						id="fa-calendar-o"
						margin="0 7px 4px 5px"
						size="18px"
						onClick={() => {}}
					/>
					{publishedAt}
				</div>
				<div className='btns'>
					<Icon
						id="fa-pencil-square-o"
						margin="0 0 0 10px"
						onClick={() => {}}
					/>
					<Icon
						id="fa-trash-o"
						margin="-2px 0 0 0"
						onClick={() => {}}
					/>
				</div>
			</div>
			<div className='post-text'>{content}</div>
		</div>
	)
}


export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 5px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
		font-size: 18px;
	}

	& .published_at {
		display: flex;
		font-size: 18px;
	}

	& .btns {
		display: flex;
		align-items: center;
		margin-right: 10px
		font-size: 18px;
		gap: 12px;
	}

	& .post-text {
		font-size: 17px;
	}


`



	// & i {
	// 	position: relative;
	// 	top: -3px;
	// 	font-size: 18px;
	// }
