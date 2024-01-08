import Planet from '../components/Planet';
import CookieSteal from '../components/CookieSteal';
import CodeBlock from '../components/CodeBlock';
import { PagesProps } from '../components/Planet/Planet';
import RfiForm from '../components/RfiForm';

const Rfi = () => {
	const maliciousString =
		'http://fake-script.enzo.givernaud.mmi-velizy.fr/fake-script.js';
	return (
		<section className="sqlia">
			<aside>
				<p>
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
				<div className="planet rfi">
					<Planet
						url={process.env.PUBLIC_URL + '/model/rfi/scene.gltf'}
						page={PagesProps.RFI}
					/>
				</div>
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
				<RfiForm />
				<CodeBlock code={maliciousString} language="url"></CodeBlock>
			</article>
		</section>
	);
};

export default Rfi;
