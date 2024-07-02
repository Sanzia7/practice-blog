
import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Authorization, Registration, Users } from './pages';
import styled from 'styled-components';

const BlogColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	min-height: 100vh;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`

const Page = styled.div`
	padding: 120px 0;
`

export const Blog = () => {
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
					<Route path='/post/:postId' element={<div>Статья</div>} />
					<Route path='*' element={<div>Ошибка</div>} />
				</Routes>
			</Page>

			<Footer />
		</BlogColumn>
	);
};




// min-hight: 100%;
//npx json-server --watch src/db.json --port 3005

