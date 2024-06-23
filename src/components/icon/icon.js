import styled from 'styled-components'




const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={ `fa ${id}` } aria-hidden="true"></i>
	</div>
)

export const Icon = styled(IconContainer)`
	font-size: ${({ size = "24px" }) => size};
	margin: ${({ margin = "0" }) => margin};
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

