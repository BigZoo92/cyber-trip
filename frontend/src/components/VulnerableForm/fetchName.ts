export const fetchNames = async (): Promise<string[]> => {
	try {
		const response = await fetch('http://localhost/cyber-trip/backend/secure/names.php', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		const test = data.map((test: {name: string}) => test.name);
		const dataFiltre = test.filter((chaine: string) => chaine.trim() !== '');
		return dataFiltre;
	} catch (error) {
		console.error('Error:', error);
		return []; 
	}
};
  