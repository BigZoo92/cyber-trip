import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import SqlIa from './pages/Sqlia';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/sqlia',
		element: <SqlIa />,
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
