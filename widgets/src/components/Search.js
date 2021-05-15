import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Search = () => {
	const [term, setTerm] = useState('programming');
	const [results, setResult] = useState([]);

	useEffect(() => {
		const searchWiki = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});

			setResult(data.query.search);
		};

		if (term && !results.length) {
			searchWiki();
		} else {
			const timerId = setTimeout(() => {
				if (term) {
					searchWiki();
				}
			}, 500);

			return () => {
				clearTimeout(timerId);
			};
		}
	}, [term]);

	const renderedList = results.map(result => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
						className="ui button"
					>
						GO
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	const onInputChange = e => {
		setTerm(e.target.value);
	};
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input className="input" value={term} onChange={onInputChange} />
				</div>
			</div>
			<div className="ui celled list">{renderedList}</div>
		</div>
	);
};
