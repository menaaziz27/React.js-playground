import React from 'react';

const SpinnerLoader = props => {
	return (
		<div class="ui active dimmer">
			<div class="ui text loader">{props.message}</div>
		</div>
	);
};

SpinnerLoader.defaultProps = {
	message: 'please accept location request',
};
export default SpinnerLoader;
