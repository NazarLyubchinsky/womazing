import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Context } from './utils/Context';
import './styles/index.scss'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter scrollBehavior="smooth">
		<Context>
			<ScrollToTop />
			<App />
		</Context>
	</BrowserRouter>
);

