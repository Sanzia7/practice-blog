import { Icon } from '../../../../components'
import styled from 'styled-components'

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="published_at">
				<Icon
					id="fa-calendar-o"
					margin="0 10px 0 0"
					size="20px"
					onClick={() => {}}
				/>
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon
					id="fa-trash-o"
					size="24px"
					margin="0 10px 0 0"
					onClick={() => {}}
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
