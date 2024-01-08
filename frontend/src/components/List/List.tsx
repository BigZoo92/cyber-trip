import React from 'react';
import './style.scss';

const Line: React.FC = () => {
	return <div className="line"></div>;
};

const Cube: React.FC = () => {
	return <div className="cube"></div>;
};

const List = ({ noms }: { noms: string[] }) => {
	const lines = Array.from({ length: 25 }, (_, i) => <Line key={i} />);
	const cubes = Array.from({ length: 375 }, (_, j) => <Cube key={j} />);

	return (
		<div className="card">
			<div className="border bg"></div>
			<div className="background bg"></div>
			<div className="lines bg">{lines}</div>
			<div className="cubes bg">{cubes}</div>
			<div className="content">
				<div className="reveal" style={{ width: '100% !important' }}>
					<h4>
						<span>Names</span>
						<span>of</span>
						<span>galactic</span>
						<span>travelers</span>
					</h4>
					<ul>
						{noms.map((nom: string) => (
							<li>{nom}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default List;
