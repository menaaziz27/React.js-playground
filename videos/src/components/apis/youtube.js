import axios from 'axios';
import { config } from 'dotenv';
config();

const KEY = process.env.REACT_APP_CLIENT_ID;

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
});
