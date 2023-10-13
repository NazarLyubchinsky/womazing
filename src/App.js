import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

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

function App() {
	const { user } = useContext(CustomContext)
	return (
		<Suspense fallback={<Preloader />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* <Route path="" element={<Home />} /> */}
					{user.email !== 'admin@gmail.com' ? <Route path='/' element={<Home />} /> : ''}
					<Route path='contact' element={<Contact />} />
					<Route path='shop' element={<Shop />} />
					<Route path='product/:id' element={<Product />} />
					<Route path='brands' element={<Brands />} />
					<Route path='cart' element={<Basket />} />
					<Route path='checkout' element={<Checkout />} />
					<Route path='order' element={<Order />} />
					<Route path='profile' element={<Profile />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					{/* {user.email === 'admin@gmail.com' ? <Route path='admin/*' element={<AdminPanel />} /> : ''} */}
					{/* {user.email === 'admin@gmail.com' ? <Route path='clothes' element={<AdminPanel />} /> : ''} */}
					{user.email === 'admin@gmail.com' ? <Route path='create' element={<CreateProduct/>} /> : ''}
					{user.email === 'admin@gmail.com' ? <Route path='/*' element={<AdminPanel />} /> : ''}
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
