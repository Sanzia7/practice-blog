
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
	padding: 120px 0;
`
const H2 = styled.h2`
	text-align: center;
`

const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>

export const Blog = () => {
	return (
		<>
			<Header />
			<Footer  />
			<Content>
				<H2>Контент страницы</H2>
				<br />
				<i className="fa fa-camera-retro fa-2x"></i>
				<Routes>
					<Route path='/' element={<div>Главная Страница</div>} />
					<Route path='/login' element={<div>Авторизация</div>} />
					<Route path='/register' element={<div>Регистрация</div>} />
					<Route path='/users' element={<div>Пользователи</div>} />
					<Route path='/post' element={<div>Новая Статья</div>} />
					<Route path='/post/:postId' element={<div>Статья</div>} />
					<Route path='*' element={<div>Ошибка</div>} />
				</Routes>

			</Content>
		</>
	);
};
