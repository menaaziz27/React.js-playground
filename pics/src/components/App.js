import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async term => {
		const response = await unsplash.get(
			'https://api.unsplash.com/search/photos',
			{
				params: { query: term },
			}
		);
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
// access key s-ETXo8A85kHIkomXlrMfItrGrretTEdpfFeCVEjJFk
// secret key 0M6VyUbVmgtZkoRJu1BAx-pnic_nBy76Z2W4IAKwpwQ
