import { Canvas, Vector3, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';

export enum PagesProps {
	XSS = 'xss',
	SQL = 'sql',
	RFI = 'rfi',
	CSRF = 'csrf',
}

const PlanetModel = ({ url }: { url: string }) => {
	const gltf = useLoader(GLTFLoader, url);
	const planetRef = useRef<THREE.Object3D>();

	useFrame(() => {
		if (planetRef.current) {
			planetRef.current.rotation.x -= 0.001;
			planetRef.current.rotation.y -= 0.001;
		}
	});

	return (
		<>
			<ambientLight />
			<pointLight />
			<primitive object={gltf.scene} ref={planetRef} />
			<OrbitControls />
		</>
	);
};

const Planet = ({ url, page }: { url: string; page: string }) => {
	let position: Vector3 = [0, 0, 5];
	switch (page) {
	case PagesProps.SQL:
		position = [0, 0, 1.75];
		break;
	case PagesProps.RFI:
		position = [0, 0, 2];
		break;
	case PagesProps.XSS:
		position = [0, 0, 2];
		break;
	case PagesProps.CSRF:
		position = [0, 0, 2];
		break;
	}
	return (
		<>
			<Canvas camera={{ position }}>
				<PlanetModel url={url} />
			</Canvas>
		</>
	);
};

export default Planet;
