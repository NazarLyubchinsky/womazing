import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = () => {
	const location = useLocation()
	return (
		<>
			{
				location.pathname !== '/login' &&
					location.pathname !== '/register'
					? <Header /> : ''
			}
			<main>
				<Outlet />
			</main>
			{
				location.pathname === '/'
					|| location.pathname === "/contact"
					|| location.pathname === "/shop"
					|| location.pathname === "/shop/"
					|| location.pathname === "/brands"
					|| location.pathname === "/cart"
					? <Footer /> : ''
			}
		</>
	)
}

export default Layout