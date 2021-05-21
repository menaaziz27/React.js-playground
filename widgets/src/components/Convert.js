import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Convert = ({ text, language }) => {
	const [translation, setTranslation] = useState('');
	const [debounceText, setDebounceText] = useState(text);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebounceText(text);
		}, 500);

		return () => {
			clearTimeout(timerId);
		};
	}, [text]);

	useEffect(() => {
		const doTranslation = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: debounceText,
						target: language.value,
						key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
					},
				}
			);

			setTranslation(data.data.translations[0].translatedText);
		};

		doTranslation();
	}, [debounceText, language]);
	return (
		<div>
			<h3 className="ui header">{translation}</h3>
		</div>
	);
};
