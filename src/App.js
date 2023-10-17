import { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";
import Brands from "./pages/Brands/Brands";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// lang
import './utils/i18n'
import Product from "./pages/Product/Product";
import Preloader from "./components/Preloader/Preloader";
import Basket from "./pages/Basket/Basket";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import { useContext } from "react";
import { CustomContext } from "./utils/Context";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Order from "./pages/Order/Order";
import AppRoutes from "./components/Routes/Routes";

function App() {
	// const { user } = useContext(CustomContext)
	return (
		<Suspense fallback={<Preloader />}>
			<AppRoutes />
		</Suspense>
	);
}

export default App;
