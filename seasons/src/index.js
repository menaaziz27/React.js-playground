import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import SpinnerLoader from './SpinnerLoader';
class App extends React.Component {
	state = { lat: null };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: 'Something Wrong' })
		);
	}

	rednerContent() {
		if (this.state.lat) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		} else if (this.state.errorMessage) {
			return <div>Error!</div>;
		}
		return <SpinnerLoader message="different message" />;
	}

	render() {
		return <div className="border red">{this.rednerContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
