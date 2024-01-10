import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fetchNames } from '../components/VulnerableForm/fetchName';

interface CyberContextProps {
	names: string[];
	setNames: React.Dispatch<React.SetStateAction<string[]>>;
	updateNames: () => Promise<void>;
}

const CyberContext = createContext<CyberContextProps | undefined>(undefined);

interface CyberProviderProps {
	children: ReactNode;
}

export const CyberProvider: React.FC<CyberProviderProps> = ({ children }) => {
	const [names, setNames] = useState<string[]>([]);

	const updateNames = async () => {
		setNames(await fetchNames());
	};

	return (
		<CyberContext.Provider
			value={{
				names,
				setNames,
				updateNames,
			}}
		>
			{children}
		</CyberContext.Provider>
	);
};

export const useCyberContext = () => {
	const context = useContext(CyberContext);

	if (!context) {
		throw new Error(
			'useCyberContext doit être utilisé à l\'intérieur d\'un CyberProvider'
		);
	}

	return context;
};
