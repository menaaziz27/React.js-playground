import React from 'react';
import ReactDOM from 'react-dom';

const buttonText = { text: 'click me' };
const style = { backgroundColor: 'red', color: 'white' };

const App = function () {
	return (
		<div>
			<label className="label" htmlFor="name">
				Enter Name:
			</label>
			<input id="name" />
			<button style={style}>{buttonText.text}</button>
			<h1>hey there</h1>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
