import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './sass/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import './headerandfooter.css';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Header />
		<main>
			<Router />
		</main>
		<Footer />
	</React.StrictMode>
);
