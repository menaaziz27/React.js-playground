import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
		//TODO 1: call api from App component
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label htmlFor="">Search Videos</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
