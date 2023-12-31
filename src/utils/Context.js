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
	const [product, setProduct] = useState({});
	const [sort, setSort] = useState('');
	const [status, setStatus] = useState('all');

	const [page, setPage] = useState(1);

	const [size, setSize] = useState('');
	const [color, setColor] = useState('');

	const [isLoading, setIsLoading] = useState(true);

	const [cart, setCart] = useState([]);
	const [count, setCount] = useState(1)

	const getAllClothes = async () => {
		try {
			const response = await axios(`${API_BASE_URL}/clothes`);
			const data = response.data;
			setShop(data);
		} catch (error) {
			handleApiError(error);
		} finally {
			setIsLoading(false);
		}
	}




	// Add cart
	const addCart = (product) => {
		let idx = cart.findIndex(item => item.id === product.id && item.color === product.color && item.size === product.size);
		if (idx >= 0) {
			setCart(cart.map(item => {
				if (item.id === product.id && item.color === product.color && item.size === product.size) {
					return { ...item, count: +item.count + +product.count }
				} else {
					return item
				}
			}))
		} else {
			setCart([...cart, product]);
		}
	};


	// Update cart
	const updateCart = (id, color, size, count) => {
		setCart(cart.map(item => {
			if (item.id === id && item.color === color && item.size === size) {
				return { ...item, count: count }
			} else {
				return item
			}
		}))
	};


	// Delete cart
	const deleteCart = (id, color, size) => {
		setCart(cart.filter((item) => {
			return item.id !== id || item.color !== color || item.size !== size
		}))
	}

	const [ticket, setTicket] = useState([]);


	const navigate = useNavigate();
	const API_BASE_URL = "https://womazingserver.onrender.com";


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

	const [randomTicket, setRandomTicket] = useState(null);
	// Register user
	const registerUser = async (data) => {
		try {
			const response = await axios.post(`${API_BASE_URL}/register`, { ...data, orders: [] });
			const userData = response.data.user;
			localStorage.setItem('user', JSON.stringify(userData));
			setUser(userData);
			navigate('/');

			const getTicket = await axios.get(`${API_BASE_URL}/tickets`);
			const ticketsArray = getTicket.data;
			if (ticketsArray.length > 0) {
				const randomIndex = Math.floor(Math.random() * ticketsArray.length);
				const randomTicket = ticketsArray[randomIndex];
				setRandomTicket(randomTicket);
				localStorage.setItem('ticket', JSON.stringify(randomTicket));
			}
			localStorage.setItem('modalShownAfterRegistration', 'true');

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

		if (localStorage.getItem('cart') !== null) {
			setCart(JSON.parse(localStorage.getItem('cart')))
		}
		if (localStorage.getItem('ticket') !== null) {
			setRandomTicket(JSON.parse(localStorage.getItem('ticket')))
		}

		getAllClothes()
	};

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

	// LogOutUser user
	const logOutUser = () => {
		localStorage.removeItem('user');
		localStorage.removeItem('cart');
		localStorage.removeItem('ticket');
		setUser({ login: '' })
	};

	const value = {
		API_BASE_URL,
		user, setUser,

		logOutUser,
		loginUser,

		loginError, setLoginError,
		registerError, setRegisterError,
		registerUser,

		shop, setShop,

		page, setPage,

		status, setStatus,

		product, setProduct,

		sort, setSort,

		size, setSize, color, setColor,

		isLoading, setIsLoading,

		cart, setCart, addCart, deleteCart, updateCart,
		ticket, setTicket,

		getAllClothes,

		setCount, count,
		randomTicket

	};



	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
};