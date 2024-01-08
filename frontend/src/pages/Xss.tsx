import Planet from '../components/Planet';
import CookieSteal from '../components/CookieSteal';
import CodeBlock from '../components/CodeBlock';
import { PagesProps } from '../components/Planet/Planet';

const Xss = () => {
	const maliciousString =
		'<img src="invalid-image.jpg" onerror="alert(document.cookie);" />\'';
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
				<div className="planet xss">
					<Planet
						url={process.env.PUBLIC_URL + '/model/xss/purple_planet.glb'}
						page={PagesProps.XSS}
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
				<CookieSteal />
				<CodeBlock code={maliciousString} language="html"></CodeBlock>
			</article>
		</section>
	);
};

export default Xss;
