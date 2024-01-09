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
	const code1 = `
<?php
include '../db.php';

$name = $_POST['name'];
$sql = "INSERT INTO names (name) VALUES (:name)";

try {
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(':name', $name, PDO::PARAM_STR);
	$stmt->execute();
	echo "Name inserted successfully";
} catch (PDOException $e) {
	echo "Error: " . $e->getMessage();
}

$conn = null;
`;
	const code2 = `
<?php
include '../db.php';

$name = $_POST['name'];
$sql = "INSERT INTO names (name) VALUES ('$name')";

try {
	$conn->exec($sql);
	echo "insert name successfully";
} catch (PDOException $e) {
	echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
`;

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
					<h1>
						<span>SQL</span>Injection
					</h1>
					<h2>Description</h2>
					<p>
						SQL Injection is a web security vulnerability that allows an
						attacker to interfere with the queries that an application makes to
						its database. It generally involves inserting or "injecting"
						malicious SQL statements into an entry field for execution.
					</p>
					<h3>
						<span>Insecure</span>Version
					</h3>
					<p>
						In my injection.php file, you have code that directly includes user
						input ($name) in an SQL query. This makes it vulnerable to SQL
						injection.
					</p>
					<CodeBlock code={code2} language="PHP"></CodeBlock>
					<h4>
						<span>Secure</span>Version
					</h4>
					<p>
						To prevent SQL injection, use prepared statements with parameterized
						queries. Here's an example:
					</p>
					<CodeBlock code={code1} language="PHP"></CodeBlock>
				</Popup>
			</article>
		</section>
	);
};

export default SqlIa;
