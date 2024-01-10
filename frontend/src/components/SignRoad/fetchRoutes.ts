export const fetchRoutes = async (): Promise<string> => {
	try {
		const response = await fetch('https://cybertrip.enzo.givernaud.mmi-velizy.fr/secure/routes.php', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		return data[0][1];
	} catch (error) {
		console.error('Error:', error);
		return ''; 
	}
};
  