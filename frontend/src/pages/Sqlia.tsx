import React, { useEffect, useState } from 'react';
import VulnerableForm from '../components/VulnerableForm';
import Planet from '../components/Planet';
import './style.scss';
import Popup from '../components/Popup';
import CodeBlock from '../components/CodeBlock';
import 'react-toastify/dist/ReactToastify.css';
import { fetchNames } from '../components/VulnerableForm/fetchName';
import List from '../components/List';
import { PagesProps } from '../components/Planet/Planet';

const SqlIa = () => {
	const [names, setNames] = useState<string[]>([]);

	const maliciousString = '\'); TRUNCATE TABLE names; -- ';

	useEffect(() => {
		(async () => {
			const data = await fetchNames();
			setNames(data);
		})();
	}, [setNames]);

	return (
		<section className="sqlia">
			<aside>
				<p className="p_aside">
					TraLog, often referred to as the Celestial Canvas, is a unique and
					renowned destination in the galaxy, cherished by interstellar
					travelers. Known for its vast digital landscapes, this planet offers a
					one-of-a-kind opportunity for space voyagers to inscribe their names
					and leave a lasting impression in the cosmos.
				</p>
				<h1>
					Trav
					<br />
					Logia
				</h1>

				<div className="planet">
					<Planet
						url={process.env.PUBLIC_URL + '/model/sql/scene.gltf'}
						page={PagesProps.SQL}
					/>
				</div>
				<List noms={names} />
			</aside>
			<article>
				<h2>
					<span>Vilan's</span>Role
				</h2>
				<p>
					As a Saboteur, you wield the power to erase the names of interstellar
					travelers from the face of TraLog. With each keystroke, you can
					disrupt the digital tapestry that binds the galaxy together, removing
					the marks of voyagers who have traversed the cosmic paths. Exercise
					this power with caution, as it holds the potential to alter the very
					essence of this celestial guestbook.
				</p>
				<VulnerableForm />
				<h3>
					<span>Magic</span>Formula
				</h3>
				<CodeBlock code={maliciousString} language="sql"></CodeBlock>
				<Popup>
					<h1>Wesh</h1>
				</Popup>
			</article>
		</section>
	);
};

export default SqlIa;
