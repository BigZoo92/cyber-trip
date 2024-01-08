import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SqlIa from './pages/Sqlia';
import Xss from './pages/Xss';
import Rfi from './pages/Rfi';
import Csrf from './pages/Csrf';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/sql',
		element: <SqlIa />,
	},
	{
		path: '/xss',
		element: <Xss />,
	},
	{
		path: '/rfi',
		element: <Rfi />,
	},
	{
		path: '/csrf',
		element: <Csrf />,
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
