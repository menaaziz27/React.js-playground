import React, { useState } from 'react';
import './styles/output.css';
import { hexaColors } from './data/colors';
import Colors from './components/Colors/Colors';
import Pagination from './components/Pagination/Pagination';

function App() {
	const [copied, setCopied] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [colorsPerPage] = useState(10);

	// get current posts and pass it to colors component to render them only
	const indexOfLastColor = currentPage * colorsPerPage;
	const indexOfFirstColor = indexOfLastColor - colorsPerPage;
	const currentColors = hexaColors.slice(indexOfFirstColor, indexOfLastColor);

	const paginateHandler = pageNumber => setCurrentPage(pageNumber);

	return (
		<div className="container p-20">
			<h1 className="text-5xl text-center ">Hello There! 👋</h1>
			<Colors colors={currentColors} copied={copied} setCopied={setCopied} />
			<Pagination colorsPerPage={colorsPerPage} totalColors={hexaColors.length} paginate={paginateHandler} />
		</div>
	);
}

export default App;
