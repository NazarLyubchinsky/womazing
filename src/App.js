import { Suspense } from "react";

// lang
import './utils/i18n'
import Preloader from "./components/Preloader/Preloader";
import AppRoutes from "./components/Routes/Routes";

function App() {
	return (
		<Suspense fallback={<Preloader />}>
			<AppRoutes />
		</Suspense>
	);
}

export default App;
