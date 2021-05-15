import React from 'react';
import SearchBar from '../SearchBar';
import PhotoList from '../photoList/PhotoList';
import unsplash from '../api/unsplash';

class AllPhotos extends React.Component {
	state = { photos: [] };

	getPhotos = async term => {
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term,
			},
		});

		this.setState({ photos: response.data.results });
		console.log(this.state.photos);
	};

	showPhotosList() {
		return this.state.photos.length > 0 ? true : false;
	}

	render() {
		return (
			<div className="ui container">
				<SearchBar onSubmit={this.getPhotos} />
				{this.showPhotosList && (
					<PhotoList onClick={this.props.onClick} photos={this.state.photos} />
				)}
			</div>
		);
	}
}

export default AllPhotos;
