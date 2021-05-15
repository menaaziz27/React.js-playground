import React, { useState, useEffect, useRef } from 'react';

export const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = event => {
			if (ref.current && ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);
	const renderedOptions = options.map(option => {
		// to only render not selected options
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				onClick={() => onSelectedChange(option)}
				key={option.value}
				className="item"
			>
				{option.label}
			</div>
		);
	});
	console.log(ref.current);
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">Select a color</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
			<p style={{ color: selected.value }}>this is a {selected.label} text</p>
		</div>
	);
};
