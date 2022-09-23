import React from 'react'

function Loading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			// <p style={{ fontSize: '25px' }}>
			// 	We are waiting for the data to load!...
			// </p>
			<div className='loader-wrapper'>
				<div class="loader"></div>
			</div>
		);
	};
}

export default Loading
