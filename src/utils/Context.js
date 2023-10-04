import React, { createContext, useEffect, useState } from "react"
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const CustomContext = createContext();

export const Context = (props) => {
	const { t } = useTranslation();

	const [user, setUser] = useState({ login: "" });
	const [loginError, setLoginError] = useState(null);
	const [registerError, setRegisterError] = useState(null);

	const [shop, setShop] = useState([]);
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState('');
	const [status, setStatus] = useState('all');
	const [product, setProduct] = useState({});

	const [size, setSize] = useState('');
	const [color, setColor] = useState('');

	


	const navigate = useNavigate();

	 const API_BASE_URL = "http://localhost:8080";


	const handleApiError = (error, isRegistrationError) => {
		console.error("API Error:", error);
		if (error.response) {
			if (error.response.status === 401) {
				navigate('/login');
			} else {
				// Handle other API errors
				console.error("API Response Error:", error.response.data);
				if (isRegistrationError) {
					setRegisterError(error.response.data);
				} else {
					setLoginError(t("login.loginError"));
				}
			}
		} else {
			// Handle network or other unexpected errors
			console.error("Network Error:", error.message);
			if (isRegistrationError) {
				setRegisterError("Network Error: Unable to connect to the server.");
			} else {
				setLoginError("Network Error: Unable to connect to the server.");
			}
		}
	};


	// Register user
	const registerUser = async (data) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/register`, { ...data, orders: [] });
			const userData = response.data.user;
			localStorage.setItem('user', JSON.stringify(userData));
			setUser(userData);
			navigate('/');
		} catch (error) {
			handleApiError(error, true);
		}
	};


	// Login user
	const loginUser = async (data) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/login`, data);
			const userData = response.data.user;
			localStorage.setItem('user', JSON.stringify(userData));
			setUser(userData);
			navigate('/');
		} catch (error) {
			handleApiError(error, false);
		}
	};


	// LogOutUser user
	const logOutUser = () => {
		localStorage.removeItem('user');
		setUser({ login: '' })
	};


	useEffect(() => {
		// Lazy loading of data when starting the component
		if (shop.length === 0) {
			fetchData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [shop]);


	const fetchData = async () => {
		if (localStorage.getItem('user') !== null) {
			setUser(JSON.parse(localStorage.getItem('user')));
		}
		try {
			const response = await axios(`${API_BASE_URL}/clothes`);
			const data = response.data;
			setShop(data);
		} catch (error) {
			handleApiError(error);
		}
	};

	const value = {
		user,
		setUser,

		logOutUser,
		loginUser,
		loginError,
		setLoginError,
		registerUser,
		registerError,
		setRegisterError,

		shop,

		page,
		setPage,

		status,
		setStatus,

		product,
		setProduct,

		sort,
		setSort,

		size,
		setSize,
		color,
		setColor

		
	};



	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
};