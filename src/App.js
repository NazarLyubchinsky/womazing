import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Brands from "./pages/Brands/Brands";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Shop/Shop";
import './styles/index.scss'

// lang
import './i18n'

function App() {
	return (
		<Suspense fallback={'loading..'}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/brands' element={<Brands />} />
					<Route path='/cart' element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
