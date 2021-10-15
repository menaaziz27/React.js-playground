import React, { useState } from 'react';
import './styles/output.css';
import { hexaColors } from './data/colors';
import Colors from './components/Colors/Colors';

function App() {
	const [copied, setCopied] = useState('');
	return (
		<div className="container p-20">
			<h1 className="text-5xl text-center ">Hello Tailwind 👋</h1>
			<Colors colors={hexaColors} copied={copied} setCopied={setCopied} />
		</div>
	);
}

export default App;
