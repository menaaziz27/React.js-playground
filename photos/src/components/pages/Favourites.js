import React from 'react';
import PhotoList from '../photoList/PhotoList';

class Favvourites extends React.Component {
	render() {
		return (
			<div>
				<PhotoList photos={this.props.myFavs} />
			</div>
		);
	}
}

export default Favvourites;
