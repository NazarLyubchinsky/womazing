import React, { createContext, useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CustomContext = createContext();


export const Context = (props) => {
	const { t } = useTranslation();

	const [user, setUser] = useState({
		login: ""
	});
	const [loginError, setLoginError] = useState(null);
	const [registerError, setRegisterError] = useState(null);


	const [page, setPage] = useState(1);

	const [status, setStatus] = useState('all');

	const [product, setProduct] = useState({});


	const [shop, setShop] = useState([]);

	const navigate = useNavigate();

	const registerUser = (data) => {
		axios.post('http://localhost:8080/register', { ...data, orders: [] })
			.then((res) => {

				localStorage.setItem('user', JSON.stringify(res.data.user));
				setUser(res.data.user);
				navigate('/')
			}).catch((err) => {
				setRegisterError(err.response.data)
			})
	};

	const loginUser = (data) => {

		axios.post('http://localhost:8080/login', data)
			.then((res) => {
				const users = res.data.user;
				localStorage.setItem('user', JSON.stringify(users));
				setUser(users);
				navigate('/')
			})
			.catch((err) => setLoginError(t("login.loginError")));
	};


	useEffect(() => {
		if (localStorage.getItem('user') !== null) {
			setUser(JSON.parse(localStorage.getItem('user')))
		}

		axios('http://localhost:8080/clothes')
			.then(({ data }) => setShop(data))
	}, []);

	const logOutUser = () => {
		localStorage.removeItem('user');
		setUser({
			login: ''
		})
	};

	const value = {
		user,
		setUser,
		registerUser,
		logOutUser,
		loginUser,
		shop,
		page,
		setPage,
		setStatus,
		status,
		product,
		setProduct,
		loginError,
		setLoginError,
		registerError,
		setRegisterError
	};



	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
};