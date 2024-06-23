import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';


const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`

const StyledButton = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: 100px;
	height: 32px;
	border: 1px solid darkblue;
	border-radius: 3px;
	box-shadow: 0px 1px 5px gray;
	background-color: #def7dc;

		&:hover{
		background-color: #f7e1e4;
		color: darkmagenta;
	}
`

const StyledBackward = styled.div`
	&:hover{
		cursor: pointer;
		color: darkmagenta;
	}
`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate()


	return (
		<div className={className}>
			<RightAligned>
				<StyledButton to="/login">Войти</StyledButton>
			</RightAligned>
			<RightAligned>
				<StyledBackward onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0"  />
				</StyledBackward>

				<Link to="/post">
					<Icon id="fa-file-text-o"  margin="10px 0 0 16px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 16px" />
				</Link>
			</RightAligned>

		</div>
	)
}

export const ControlPanel = styled(ControlPanelContainer)`
`




