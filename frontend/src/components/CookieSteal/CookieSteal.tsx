import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

const CookieSteal = () => {
	const [input, setInput] = useState('');
	const [cookieSteal, setCookieSteal] = useState('');
	const ref = useRef<HTMLDivElement>(null);
	const data = 'Enter a command for Cook 9000';

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
		Cookies.set('secret_ingredient', 'a hair of Mr. Campagne', { expires: 7 });
	}, []);

	return (
		<div className="cookieform">
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Enter your name in the legend</label>
					<input
						type="text"
						name="cookieSteal"
						id="cookieSteal"
						placeholder="Enter XSS Atack"
						value={cookieSteal}
						onChange={handleInputChange}
					/>
				</div>

				<button type="submit" className="kave-btn">
					<span className="kave-line"></span>
					Submit
				</button>
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
