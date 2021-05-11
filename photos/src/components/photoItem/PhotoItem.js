import classes from './PhotoItem.module.css';
import FavouritesButton from '../FavouritesButton';
import Card from '../card/Card';
const PhotoItem = props => {
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.photo.urls.regular} alt={props.photo.description} />
				</div>
				<div className={classes.content}>
					<h3>{props.photo.alt_description}</h3>
				</div>
				<div className={classes.actions}>
					<FavouritesButton onClick={props.onClick} photo={props.photo} />
				</div>
			</Card>
		</li>
	);
};

export default PhotoItem;
