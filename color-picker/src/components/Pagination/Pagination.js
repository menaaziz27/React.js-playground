import React from 'react';

const Pagination = ({ totalColors, colorsPerPage, paginate, currentPage }) => {
	const pageStyle = 'first:ml-0 cursor-pointer text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500 mt-1';

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalColors / colorsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="py-2 border-1 border-t-2 border-pink-300 mt-2 ">
			<nav className="block">
				<ul className="flex pl-0 rounded list-none flex-wrap">
					{pageNumbers.map(number => {
						return (
							<li key={number}>
								<p onClick={() => paginate(number)} className={currentPage === number ? `${pageStyle} bg-indigo-300` : `${pageStyle}`}>
									{number}
								</p>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Pagination;
