import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import DOMPurify from 'dompurify';
import React from 'react';

const CookieSteal = () => {
	const [input, setInput] = useState('');
	const [cookieSteal, setCookieSteal] = useState('');
	const ref = useRef<HTMLDivElement>(null);
	const data = 'Enter a command for Cook 9000';

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const sanitizedInput = DOMPurify.sanitize(cookieSteal);
		setInput(sanitizedInput);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCookieSteal(e.target.value);
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.textContent = input.length === 0 ? data : input;
		}
	}, [input]);

	useEffect(() => {
		Cookies.set('secret_ingredient', 'a hair of Mr. Campagne', {
			expires: 7,
			httpOnly: true,
			secure: true,
		});
	}, []);

	return <div className="cookieform">{/* ... reste du formulaire ... */}</div>;
};

export default CookieSteal;
