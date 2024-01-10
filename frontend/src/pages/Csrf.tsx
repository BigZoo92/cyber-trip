import Planet from '../components/Planet';
import { PagesProps } from '../components/Planet/Planet';
import ChangeRouteForm from '../components/ChangeRouteForm';
import Popup from '../components/Popup';
import CodeBlock from '../components/CodeBlock';
import SignRoad from '../components/SignRoad';

const Csrf = () => {
	const code2 = `
<?php
include '../db.php';

$newRoute = $_POST['route'] ?? 'default-route';
$sql = "INSERT INTO routes (id, route) VALUES (1, :newRoute) ON DUPLICATE KEY UPDATE route = :newRoute";

try {
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':newRoute', $newRoute, PDO::PARAM_STR);
    $stmt->execute();
} catch (PDOException $e) {
    echo "Erreur lors du changement de route : " . $e->getMessage();
}

$conn = null;

	`;
	const code1 = `
// In your PHP form processing script
session_start();
if ($_POST['csrf_token'] != $_SESSION['csrf_token']) {
    // Handle the error - the request is not legitimate
}
	`;
	return (
		<section className="sqlia">
			<aside>
				<p className="p_aside">
					Welcome to the dark side of NavCom, the hub where the most cunning of
					space pirates plot their devious schemes. Here, the power to
					manipulate the galaxy's navigation systems lies at your fingertips,
					allowing you to redirect unsuspecting travelers to destinations of
					your choosing.
				</p>
				<h1>
					Nav
					<br />
					Com
				</h1>
				<div className="planet rfi">
					<Planet
						url={process.env.PUBLIC_URL + '/model/csrf/test_planet.glb'}
						page={PagesProps.CSRF}
					/>
				</div>
				<SignRoad></SignRoad>
			</aside>
			<article>
				<h2>
					<span>Villain's</span> Role
				</h2>
				<p>
					As a Master of Deception in the cosmic game of chess, you have the
					ability to orchestrate grand diversions. By luring space voyagers with
					alluring offers and rewards, you cleverly manipulate their route
					submissions, bending the space routes to your will. Beware, though,
					for each action may have unforeseen consequences in the vast expanse
					of space.
				</p>
				<p>
					Your latest scheme involves a cleverly crafted fake rewards page,
					enticing voyagers to unwittingly redirect their course to a hidden
					asteroid field, ripe for plundering. Can you outsmart the galaxy's
					best navigators and claim your prize?
				</p>
				<ChangeRouteForm />
				<Popup>
					<h1>
						<span>Cross-Site</span>
						<span>Request</span>
						<span>Forgery</span>
						<span>(CSRF)</span>
					</h1>
					<h2>Description</h2>
					<p>
						CSRF tricks a victim into submitting a malicious request. It occurs
						when a malicious web site, email, blog, or program causes a user’s
						web browser to perform an unwanted action on a trusted site for
						which the user is currently authenticated.
					</p>
					<h3>
						<span>Insecure</span>Version
					</h3>
					<p>
						In my ChangeRouteForm.tsx and corresponding change_route.php, if
						state-changing requests are made without proper anti-CSRF tokens, it
						can be exploited.
					</p>
					<CodeBlock code={code2} language="PHP"></CodeBlock>
					<h4>
						<span>Secure</span>Version
					</h4>
					<p>
						Implement anti-CSRF tokens in your forms. Each form should include a
						hidden token that is validated on the server-side.
					</p>
					<CodeBlock code={code1} language="PHP"></CodeBlock>
					<p>In your React form, include the token in a hidden field.</p>
				</Popup>
			</article>
		</section>
	);
};

export default Csrf;
