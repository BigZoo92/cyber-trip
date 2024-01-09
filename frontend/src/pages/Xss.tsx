import Planet from '../components/Planet';
import CookieSteal from '../components/CookieSteal';
import CodeBlock from '../components/CodeBlock';
import { PagesProps } from '../components/Planet/Planet';
import Popup from '../components/Popup';

const Xss = () => {
	const maliciousString =
		'<img src="invalid-image.jpg" onerror="alert(document.cookie);" />\'';

	const code2 = `
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

`;
	const code1 = `
	import { useState, useEffect, useRef } from 'react';
	import Cookies from 'js-cookie';
	import DOMPurify from 'dompurify';
	
	const CookieSteal = () => {
	  const [input, setInput] = useState('');
	  const [cookieSteal, setCookieSteal] = useState('');
	  const ref = useRef<HTMLDivElement>(null);
	  const data = 'Enter a command for Cook 9000';
	
	  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const sanitizedInput = DOMPurify.sanitize(cookieSteal);
		setInput(sanitizedInput);
	  };
	
	  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCookieSteal(e.target.value);
	  };
	
	  useEffect(() => {
		if (ref.current) {
		  ref.current.textContent = input.length === 0 ? data : input;
		}
	  }, [input]);
	
	  useEffect(() => {
		Cookies.set('secret_ingredient', 'a hair of Mr. Campagne', { expires: 7, httpOnly: true, secure: true });
	  }, []);
	
	  return (
		<div className="cookieform">
		  {/* ... reste du formulaire ... */}
		</div>
	  );
	};
	
	export default CookieSteal;
	
`;

	return (
		<section className="sqlia">
			<aside>
				<p className="p_aside">
					Welcome to Cook 9000, the renowned intergalactic hub famous for
					concocting the most exquisite and sought-after cookies in the cosmos.
					This digital bakery is a paradise for those with a sweet tooth, where
					every space traveler's cookie dreams come true.
				</p>
				<h1>
					Cook
					<br />
					9000
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
					<span>Cookie</span> Heist
				</h2>
				<p>
					In the shadows of this confectionery utopia, you, a sly Cookie Bandit,
					have discovered a secret recipe for digital deception. Armed with your
					knowledge of XSS (Cross-Site Scripting), you plan to infiltrate the
					bakery's systems and pilfer the precious cookie data.
				</p>
				<p>
					Your tool? A seemingly harmless image. But when viewed, this image
					executes a clever script, revealing the hidden cookie secrets of Cook
					9000. Will your cunning plan snag the digital treats, or will you
					crumble under the weight of cosmic justice?
				</p>
				<CookieSteal />
				<CodeBlock code={maliciousString} language="html"></CodeBlock>
				<Popup>
					<h1>
						<span>Cross-Site</span>
						<span>Scripting</span>(XSS)
					</h1>
					<h2>Description</h2>
					<p>
						XSS attacks occur when an attacker uses a web application to send
						malicious code, generally in the form of a browser side script, to a
						different end user. It exploits the trust a user has for a
						particular site.
					</p>
					<h3>
						<span>Insecure</span>Version
					</h3>
					<p>
						In my CookieSteal.tsx file, you might be allowing users to input
						HTML content which can include malicious JavaScript. This can lead
						to stealing cookies or other session tokens.
					</p>
					<CodeBlock code={code2} language="tsx"></CodeBlock>
					<h4>
						<span>Secure</span>Version
					</h4>
					<p>
						To prevent XSS, always escape user input and never directly render
						HTML content. In React, avoid using dangerouslySetInnerHTML and
						ensure proper content sanitization.
					</p>
					<CodeBlock code={code1} language="tsx"></CodeBlock>
				</Popup>
			</article>
		</section>
	);
};

export default Xss;
