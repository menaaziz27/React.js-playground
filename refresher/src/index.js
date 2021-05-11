import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import UserComponent from './components/UserComponent';
import CardComponent from './components/CardComponent';

const App = function () {
	return (
		<div className="container" style={{ marginLeft: '15px', marginTop: '8px' }}>
			<CardComponent>
				<UserComponent
					name={faker.name.findName()}
					dataJoined={faker.date.between(2015, 2021)}
				/>
			</CardComponent>
			<CardComponent>
				<UserComponent
					name={faker.name.findName()}
					dataJoined={faker.date.between(2015, 2021)}
				/>
			</CardComponent>
			<CardComponent>
				<UserComponent
					name={faker.name.findName()}
					dataJoined={faker.date.between(2015, 2021)}
				/>
			</CardComponent>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
