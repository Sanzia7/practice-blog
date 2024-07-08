import styled from 'styled-components'


const IconContainer = ({ className, id, onClick,...props }) => (
	<div className={className} onClick={onClick} {...props}>
		<i className={ `fa ${id}` } aria-hidden="true"></i>
	</div>
)

export const Icon = styled(IconContainer)`
	font-size: ${({ size = "22px" }) => size};
	margin: ${({ margin = "0" }) => margin};
	color: ${({ disabled }) => disabled ? 'lightblue' : 'darkblue'};

		&:hover{
		cursor: ${({onClick}) => (onClick ? 'pointer' : 'default')};
		color: darkmagenta;
	}
`


//variants:

// const IconContainer = ({ className, id, size, margin }) => (
// 	<div className={className}
// 		style={{ fontSize: size, margin: margin }}>
//     <i className={`fa ${id}`} aria-hidden="true"></i>
// 	</div>
// )
//
// export const Icon = styled(IconContainer)`
// 	display: inline-block;
// `



//
//
// const IconContainer = ({ className, id }) => (
// 	<div className={className}>
// 		<i className={`fa ${id}`} aria-hidden="true"></i>
// 	</div>
// )
//
// export const Icon = styled(IconContainer)`
// 	i {font-size: ${({ size }) => size };
//         margin: ${({ margin }) => margin};}
// 	display: inline-block;
// `

