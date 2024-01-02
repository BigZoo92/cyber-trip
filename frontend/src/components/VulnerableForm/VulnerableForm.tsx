import React, { useState } from 'react';
import { onSubmit } from './onSubmit';

const VulnerableForm: React.FC = () => {
	const [input, setInput] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Enter SQL command"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default VulnerableForm;
