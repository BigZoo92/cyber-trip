import { CodeBlock as NewCodeBlock, dracula } from 'react-code-blocks';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

interface CodeBlockProps {
	code: string;
	language: string;
	showLineNumbers?: boolean;
	startingLineNumber?: number;
	maliciousString?: string;
}

const CodeBlock = ({
	code,
	language,
	showLineNumbers,
	startingLineNumber,
}: CodeBlockProps) => {
	const [checked, setChecked] = useState(false);
	const handleCopyToClipboard = () => {
		code
			? navigator.clipboard
				.writeText(code)
				.then(() => {
					console.log('wesh');
					toast('The string has been copied to the clipboard.', {
						autoClose: 2000,
						hideProgressBar: true,
					});
				})
				.catch((error) => {
					console.error('Une erreur est survenue lors de la copie :', error);
				})
			: console.log('eh non');
		setChecked(true);
		setTimeout(() => {
			setChecked(false);
		}, 500);
	};

	return (
		<div className="codeblock">
			<div onClick={handleCopyToClipboard} className="clipboard">
				{checked ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
					>
						<path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="#000000"
						viewBox="0 0 256 256"
					>
						<path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>
					</svg>
				)}
			</div>
			<NewCodeBlock
				text={code}
				language={language}
				showLineNumbers={showLineNumbers}
				startingLineNumber={startingLineNumber}
				theme={dracula}
			/>
			<ToastContainer />
		</div>
	);
};

export default CodeBlock;
