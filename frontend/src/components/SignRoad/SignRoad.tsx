import { useEffect, useState } from 'react';
import './style.scss';
import { fetchRoutes } from './fetchRoutes';
const SignRoad = () => {
	const [route, setRoute] = useState<string>('');
	useEffect(() => {
		(async () => {
			setRoute(await fetchRoutes());
		})();
	}, []);
	return (
		<div className="road_sign_wrapper">
			<div className="road_sign_outside">
				<div className="road_sign_screw1"></div>
				<div className="road_sign_screw2"></div>
				<div className="road_sign_inside">
					<div className="road_sign_body_wrapper">{route}</div>
				</div>
			</div>
			<div className="road_sign_post"></div>
		</div>
	);
};

export default SignRoad;
