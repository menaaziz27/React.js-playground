import Header from './Header';
import React from 'react';
import classes from './Layout.module.css';
class Layout extends React.Component {
	onClickHandler = () => {
		console.log('hello from layout');
	};
	render() {
		return (
			<div>
				<Header />
				<main className={classes.main}>{this.props.children}</main>
			</div>
		);
	}
}

export default Layout;
