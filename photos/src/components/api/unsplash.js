import axios from 'axios';
import { config } from 'dotenv';
config();

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: process.env.REACT_APP_ACCESS_KEY,
	},
});
