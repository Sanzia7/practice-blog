import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { Icon } from '../../../../components'
import styled from 'styled-components'

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const navigate = useNavigate()

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/')
					})
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		)
	}

	return (
		<div className={className}>
			<div className="published_at">
				<Icon id="fa-calendar-o" margin="0 10px 0 0" size="20px" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="24px"
					margin="0 10px 0 0"
					onClick={() => onPostRemove(id)}
				/>
			</div>
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	margin: ${({ margin }) => margin};

	& .published_at {
		display: flex;
		font-size: 18px;
		align-items: center;
	}

	& .buttons {
		display: flex;
		align-items: center;
		// gap: 5px;
	}
`

// & i {
// 	position: relative;
// 	top: -3px;
// 	font-size: 18px;
// }
