// eslint-disable-next-line
import React from 'react';
import AllPhotos from './components/pages/AllPhotos';
import Favourites from './components/pages/Favourites';
import Layout from './components/layouts/Layout';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	state = { favs: [] };

	onClickHandler = async photo => {
		await this.setState(prevState => ({
			favs: [...(prevState.favs || []), photo],
		}));
		console.log(this.state.favs);
	};

	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact>
						<AllPhotos onClick={this.onClickHandler} />
					</Route>
					<Route path="/favourites">
						<Favourites myFavs={this.state.favs} />
					</Route>
				</Switch>
			</Layout>
		);
	}
}

export default App;
