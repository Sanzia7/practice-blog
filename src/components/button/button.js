import styled from 'styled-components'


const ButtonContainer = ({children, className, width, ...props}) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}


export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: ${({width = ' 100%'}) => width};
	height: 32px;
	border: 1px solid darkblue;
	border-radius: 3px;
	box-shadow: 1px 1px 4px gray;
	background-color: #fdffb8;
	color: darkblue;


		&:hover{
		background-color: #b8ffff;
		color: darkmagenta;
`
