import React from 'react';

export const Link = ({ href, className, children }) => {
	const onClick = event => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		window.history.pushState({}, '', href);

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={onClick} href={href} className={className}>
			{children}
		</a>
	);
};
