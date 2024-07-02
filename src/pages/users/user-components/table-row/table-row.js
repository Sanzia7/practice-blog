import styled from 'styled-components'


const TableRowContainer = ({ className, children }) => (
    <div className={className}>
		{children}
    </div>
)


export const TableRow = styled(TableRowContainer)`
	display: flex;
	padding: 10px;
	border: ${({border}) => (border ? '1px solid #477dce' : 'none')};


	& > div {
		display: flex;
	}

	& .login-column {
		width: 172px;
	}

	& .registered-at-column {
		width: 213px;
	}

	& .role-column {
		width: auto;
	}
`


// const TableRowContainer = (props) => {
// 	return <div {...props} />
// }

// const TableRowContainer = ({ className, children }) => {
// 	return (
//     <div className={className}>
// 		{children}
//     </div>
// 	)
// }
// ${({border}) => (border ? 'border: 1px solid #477dce;' : '')}
