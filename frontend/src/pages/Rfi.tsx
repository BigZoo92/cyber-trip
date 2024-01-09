import Planet from '../components/Planet';
import CodeBlock from '../components/CodeBlock';
import { PagesProps } from '../components/Planet/Planet';
import RfiForm from '../components/RfiForm';
import Popup from '../components/Popup';

const Rfi = () => {
	const maliciousString =
		'https://fake-script.enzo.givernaud.mmi-velizy.fr/fake-script.js';
	const code2 = `
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
	
		`;
	const code1 = `
	import React, { FormEvent, useState } from 'react';

	const RfiForm = () => {
	  const [url, setUrl] = useState('');
	
	  const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		// Vérifiez si l'URL est dans la liste blanche avant de charger
		if (isUrlAllowed(url)) {
		  loadExternalModule(url);
		} else {
		  alert("L'URL n'est pas autorisée");
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
		<form onSubmit={handleSubmit}>
		  {/* ... le reste du formulaire ... */}
		</form>
	  );
	};
	
	export default RfiForm;
	
		`;
	return (
		<section className="sqlia">
			<aside>
				<p className="p_aside">
					Welcome to the digital realm of TraLog, a canvas in the cosmos where
					space travelers leave their digital footprint. But not all is as it
					seems; in the shadows lurks the crafty Space Hacker, ready to weave
					their own story into this celestial tapestry.
				</p>
				<h1>
					Space
					<br />
					Hack
				</h1>
				<div className="planet rfi">
					<Planet
						url={process.env.PUBLIC_URL + '/model/rfi/scene.gltf'}
						page={PagesProps.RFI}
					/>
				</div>
			</aside>
			<article>
				<h2>
					<span>Hacker's</span> Role
				</h2>
				<p>
					As the Space Hacker, you have discovered a way to manipulate the
					fabric of TraLog's digital landscape. By cleverly inserting external
					scripts into the planet's system, you can alter perceptions, create
					illusions, or even control the flow of information. It's a game of
					digital dominance, where the most cunning hacker can control the
					narrative of the galaxy.
				</p>
				<p>
					Your latest exploit involves a seemingly harmless script. Once
					integrated, it will display a message that could change the course of
					history on TraLog. Will your digital prowess go undetected, or will
					you become a legend in the hacker hall of fame?
				</p>
				<RfiForm />
				<CodeBlock code={maliciousString} language="url"></CodeBlock>
				<Popup>
					<h1>
						<span>Remote</span>
						<span>File</span>
						<span>Inclusion</span>
						<span>(RFI)</span>
					</h1>
					<h2>Description</h2>
					<p>
						RFI occurs when a web application includes a remote file for
						execution. Attackers can exploit this to run malicious scripts.
					</p>
					<h3>
						<span>Insecure</span>Version
					</h3>
					<p>
						In your RfiForm.tsx, if you're fetching and executing scripts based
						on user inputs, it can lead to RFI.
					</p>
					<CodeBlock code={code2} language="tsx"></CodeBlock>
					<h4>
						<span>Secure</span>Version
					</h4>
					<p>
						To prevent RFI, avoid including files based on user input. If
						dynamic file inclusion is necessary, ensure strict validation and
						whitelisting of allowed files.
					</p>
					<CodeBlock code={code1} language="tsx"></CodeBlock>
				</Popup>
			</article>
		</section>
	);
};

export default Rfi;
