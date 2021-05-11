import React from 'react';

const CommentDetail = props => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={props.image} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				<div className="metdata">
					<span className="date">{props.date}</span>
				</div>
				<div className="text">{props.content}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
