export const onSubmit = async(input: string) => {
	try {
		const response = await fetch('http://localhost/cyber-trip/backend/vulnerable/injection.php', {
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