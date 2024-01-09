import React, { FormEvent, useState } from 'react';

const RfiForm = () => {
	const [url, setUrl] = useState('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Vérifiez si l'URL est dans la liste blanche avant de charger
		if (isUrlAllowed(url)) {
			loadExternalModule(url);
		} else {
			alert('L\'URL n\'est pas autorisée');
		}
	};

	const isUrlAllowed = (url: string) => {
		// Ici, implémentez la logique pour vérifier si l'URL est dans une liste blanche
		// Par exemple, vérifier si l'URL correspond à un modèle connu et approuvé
		return true; // À remplacer par la logique de validation réelle
	};

	const loadExternalModule = (url: string) => {
		const script = document.createElement('script');
		script.src = url;
		script.async = true;
		document.body.appendChild(script);
	};

	return (
		<form onSubmit={handleSubmit}>{/* ... le reste du formulaire ... */}</form>
	);
};

export default RfiForm;
