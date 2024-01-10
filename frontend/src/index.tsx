import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './sass/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import './headerandfooter.css';
import { CyberProvider } from './provider/CyberProvider';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CyberProvider>
			<Header />
			<main>
				<Router />
			</main>
			<Footer />
		</CyberProvider>
	</React.StrictMode>
);
