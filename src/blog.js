
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Authorization, Post, Registration, Users } from './pages';
import styled from 'styled-components';


const BlogColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100vh;
	min-height: 100%;
	margin: 0 auto;
	background-color: #f8eee9;
`

const Page = styled.div`
	padding: 120px 0 20px;
`

export const Blog = () => {
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData')

		if (!currentUserDataJSON) {
			return
		}

		const currentUserData = JSON.parse(currentUserDataJSON)

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			})
		)
	}, [dispatch])

	return (
		<BlogColumn>
			<Header />

			<Page>
				<Routes>
					<Route path='/' element={<div>Главная Страница</div>} />
					<Route path='/login' element={<Authorization />} />
					<Route path='/register' element={<Registration />} />
					<Route path='/users' element={<Users />} />
					<Route path='/post' element={<div>Новая Статья</div>} />
					<Route path='/post/:id' element={<Post />} />
					<Route path='*' element={<div>Ошибка</div>} />
				</Routes>
			</Page>

			<Footer />
		</BlogColumn>
	);
};




// min-hight: 100%;
//npx json-server --watch src/db.json --port 3005

