export const onSubmit = async(input: string) => {
	try {
		const response = await fetch('https://cybertrip.enzo.givernaud.mmi-velizy.fr/vulnerable/injection.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: `name=${input}`,
		});
		const data = await response.text();
		console.log('data', data);
	} catch (error) {
		console.error('Error:', error);
	}
};