import React, { useState } from 'react';

const ChangeRouteForm = () => {
	const [newRoute, setNewRoute] = useState('');
	const [rewardPopup, setRewardPopup] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await fetch(
			'https://cybertrip.enzo.givernaud.mmi-velizy.fr/backend/vulnerable/change_route.php',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: `newRoute=${newRoute}`,
			}
		);
		setRewardPopup(true);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="text">Enter your name in the legend</label>
					<input
						type="text"
						name="route"
						value={newRoute}
						onChange={(e) => setNewRoute(e.target.value)}
						placeholder="Enter new route"
					/>
				</div>

				<button type="submit" className="kave-btn">
					<span className="kave-line"></span>
					Submit
				</button>
			</form>
			{rewardPopup && (
				<div className="reward-popup">
					<p>
						Félicitations ! Suite à votre changement de route, une récompense
						vous a été attribuée.
					</p>
					<a href="https://fake-script.enzo.givernaud.mmi-velizy.fr">
						Cliquez ici pour réclamer votre récompense
					</a>
				</div>
			)}
		</>
	);
};

export default ChangeRouteForm;
