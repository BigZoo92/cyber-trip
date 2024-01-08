import React, { FormEvent, useState } from 'react';

const RfiForm = () => {
	const [url, setUrl] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		loadExternalModule(url);
	};

	const loadExternalModule = (url: string) => {
		const script = document.createElement('script');
		script.src = url;
		script.async = true;
		document.body.appendChild(script);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="text">Enter your name in the legend</label>
				<input
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="Entrez l'URL du module externe"
				/>
			</div>

			<button type="submit" className="kave-btn">
				<span className="kave-line"></span>
				Submit
			</button>
		</form>
	);
};

export default RfiForm;
