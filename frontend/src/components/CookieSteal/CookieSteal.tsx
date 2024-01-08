import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

const CookieSteal = () => {
	const [input, setInput] = useState('');
	const [cookieSteal, setCookieSteal] = useState('');
	const ref = useRef<HTMLDivElement>(null);
	const data = 'Please enter your name';

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setInput(cookieSteal);
		const validation = document.getElementById('validation');
		validation?.append(input);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCookieSteal(e.target.value);
	};

	useEffect(() => {
		if (ref.current) {
			if (input.length === 0) {
				ref.current.innerHTML = data;
			} else {
				ref.current.innerHTML = input;
			}
		}
	}, [input, ref.current]);

	useEffect(() => {
		Cookies.set('secret_ingredient', 'a Mr. Campagne hair', { expires: 7 });
		console.log(document.cookie);
	}, []);

	//<img src="invalid-image.jpg" onerror="alert(document.cookie);" />

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="cookieSteal"
					id="cookieSteal"
					placeholder="Enter XSS Atack"
					value={cookieSteal}
					onChange={handleInputChange}
				/>
				<button type="submit">Submit</button>
			</form>
			<div
				id="validation"
				// dangerouslySetInnerHTML={{ __html: input }}
				ref={ref}
			>
				{data}
			</div>
		</div>
	);
};

export default CookieSteal;
