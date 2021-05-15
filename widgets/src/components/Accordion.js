import React, { useState } from 'react';

export const Accordion = ({ items }) => {
	const [activeState, setActiveState] = useState(null);

	const onTitleClick = index => {
		setActiveState(index);
	};

	const renderedList = items.map((item, index) => {
		const active = index === activeState ? 'active' : '';
		// returning accordion item
		return (
			<React.Fragment key={item.title}>
				<div
					className={`title ${active}`}
					onClick={() => onTitleClick(index)}
					className="title active"
				>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion">{renderedList}</div>;
};
