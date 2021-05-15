import React, { useState } from 'react';
import { Accordion } from './components/Accordion';
import { Search } from './components/Search';
import { Dropdown } from './components/Dropdown';
const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

const options = [
	{
		label: 'Red',
		value: 'red',
	},
	{
		label: 'Blue',
		value: 'blue',
	},
	{
		label: 'Green',
		value: 'green',
	},
];

function App() {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setDropdown] = useState(true);

	return (
		<div>
			<button onClick={() => setDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null}
		</div>
	);
}

export default App;
