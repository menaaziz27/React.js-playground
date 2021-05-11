import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to delete this?😂
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="sam"
					date="today at 7:20PM"
					image={faker.image.animals()}
					content="that was epic!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="dane"
					date="today at 1:20AM"
					image={faker.image.animals()}
					content="ohhh amazing!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="mack"
					date="yesterday at 4:53PM"
					image={faker.image.animals()}
					content="hey nice work!"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
