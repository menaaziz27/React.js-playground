import { render } from '@testing-library/react';
import React from 'react';

const UserComponent = props => {
	console.log(props, 'user props');
	return (
		<div className="image">
			<img src="/images/avatar2/large/kristy.png" />
			<div className="content">
				<a className="header">{props.name}</a>
				<div className="meta">
					<span className="date">Joined in 2013</span>
				</div>
				<div className="description">
					Kristy is an art director living in New York.
				</div>
			</div>
			<div className="extra content">
				<a>
					<i className="user icon"></i>
					22 Friends
				</a>
			</div>
		</div>
	);
};

export default UserComponent;
