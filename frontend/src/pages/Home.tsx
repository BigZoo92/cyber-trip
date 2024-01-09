import React from 'react';
import SphereScene from '../components/Sphere';
import Planet from '../components/Planet';
import { PagesProps } from '../components/Planet/Planet';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className="home">
			<h1>CyberTrip</h1>
			<p>
				Welcome to CyberOrbit, a unique interactive platform designed to educate
				users about common web security vulnerabilities. Here, you can safely
				explore and experience simulated attacks like SQL Injection, XSS
				(Cross-Site Scripting), RFI (Remote File Inclusion), and CSRF
				(Cross-Site Request Forgery) in a controlled environment. Simply choose
				an attack type, follow the prompts to execute a simulated attack, and
				learn about secure coding practices to prevent such vulnerabilities.
				Join us in enhancing web security awareness!
			</p>
			<div className="cd_planet">
				<Link to={'/sql'}>
					<Planet
						url={process.env.PUBLIC_URL + '/model/sql/scene.gltf'}
						page={PagesProps.SQL}
					/>
					sql
				</Link>
				<Link to={'/xss'}>
					<Planet
						url={process.env.PUBLIC_URL + '/model/xss/purple_planet.glb'}
						page={PagesProps.XSS}
					/>
					xss
				</Link>
				<Link to={'/rfi'}>
					<Planet
						url={process.env.PUBLIC_URL + '/model/rfi/scene.gltf'}
						page={PagesProps.RFI}
					/>
					rfi
				</Link>
				<Link to={'/csrf'}>
					<Planet
						url={process.env.PUBLIC_URL + '/model/csrf/test_planet.glb'}
						page={PagesProps.CSRF}
					/>
					csrf
				</Link>
			</div>
			<SphereScene />
		</section>
	);
};

export default Home;
