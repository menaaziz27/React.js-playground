import React, { useEffect } from 'react';

function Color({ color, copied, setCopied }) {
	useEffect(() => {
		let timeout;
		if (copied) {
			timeout = setTimeout(() => setCopied(''), 1000);
		}

		return () => clearTimeout(timeout);
	}, [copied]);

	const onClickHandler = () => {
		setCopied(color);
		navigator.clipboard.writeText(color);
	};

	const notify = (
		<div className="flex items-center text-white text-sm font-bold absolute bottom-10 left-50 transition-all duration-1000" role="alert">
			<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
			</svg>
			<p className="whitespace-nowrap">Hexacode is copied to your clipboard.</p>
		</div>
	);

	return (
		<div onClick={onClickHandler} className="relative cursor-pointer flex flex-col items-center p-20 border rounded-md focus:opacity-0 transition-all duration-1000" style={{ backgroundColor: color }}>
			{color}
			{color === copied ? notify : null}
		</div>
	);
}

export default Color;
