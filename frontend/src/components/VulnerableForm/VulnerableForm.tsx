import React, { useState } from 'react';
import { onSubmit } from './onSubmit';
import { fetchNames } from './fetchName';

const VulnerableForm: React.FC = () => {
	const [input, setInput] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await onSubmit(input);
		await fetchNames();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Enter your name in the legend</label>
				<input
					type="text"
					value={input}
					name="name"
					id="name"
					onChange={(e) => setInput(e.target.value)}
					placeholder="John Doe"
				/>
			</div>

			<button type="submit" className="kave-btn">
				<span className="kave-line"></span>
				Submit
			</button>
		</form>
	);
};

export default VulnerableForm;
