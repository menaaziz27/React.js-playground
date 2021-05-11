import classes from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = props => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Photos</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Photos</Link>
					</li>
					<li>
						<Link to="/favourites">My Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
