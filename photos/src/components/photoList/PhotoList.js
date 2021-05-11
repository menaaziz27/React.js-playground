import PhotoItem from '../photoItem/PhotoItem';
import classes from './PhotoList.module.css';
const PhotoList = props => {
	const photos = props.photos.map(photo => {
		return <PhotoItem onClick={props.onClick} key={photo.id} photo={photo} />;
	});
	return <ul className={classes.list}>{photos}</ul>;
};

export default PhotoList;
