import React from 'react'
import CreateProduct from "../../pages/CreateProduct/CreateProduct";
import Order from "../../pages/Order/Order";
import Basket from "../../pages/Basket/Basket";
import Checkout from "../../pages/Checkout/Checkout";
import Profile from "../../pages/Profile/Profile";
import AdminPanel from "../../pages/AdminPanel/AdminPanel";
import Product from "../../pages/Product/Product";
import Layout from "../../Layout/Layout";
import Brands from "../../pages/Brands/Brands";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Shop from "../../pages/Shop/Shop";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { Route, Routes } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';
import { useContext } from 'react';


const AppRoutes = () => {
	const { user } = useContext(CustomContext)

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{user.email !== 'admin@gmail.com' ? <Route path='/' element={<Home />} /> : ''}
				<Route path='contact' element={<Contact />} />
				<Route path='shop' element={<Shop />} />
				<Route path='product/:id' element={<Product />} />
				<Route path='brands' element={<Brands />} />
				<Route path='profile' element={<Profile />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				{user.login ?
					<>
						<Route path='cart' element={<Basket />} />
						<Route path='checkout' element={<Checkout />} />
						<Route path='order' element={<Order />} />
					</> : ''}
				{user.email === 'admin@gmail.com' ? <Route path='create' element={<CreateProduct />} /> : ''}
				{user.email === 'admin@gmail.com' ? <Route path='/*' element={<AdminPanel />} /> : ''}
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes