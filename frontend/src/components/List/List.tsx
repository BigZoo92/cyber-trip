import React, { useState } from 'react';
import './style.scss';

const Line: React.FC = () => {
	return <div className="line"></div>;
};

const Cube: React.FC = () => {
	return <div className="cube"></div>;
};

const List = ({ noms }: { noms: string[] }) => {
	const [isShow, setIsShow] = useState(false);
	const lines = Array.from({ length: 25 }, (_, i) => <Line key={i} />);
	const cubes = Array.from({ length: 375 }, (_, j) => <Cube key={j} />);

	return (
		<>
			<span className="btn_popup listpopup" onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<>
						<b>Close</b>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="#000000"
							viewBox="0 0 256 256"
						>
							<path d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"></path>
						</svg>
					</>
				) : (
					<>
						<b>See Planet's Name</b>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							fill="#000000"
							viewBox="0 0 256 256"
						>
							<path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
						</svg>
					</>
				)}
			</span>
			{isShow && (
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
			)}
		</>
	);
};

export default List;
