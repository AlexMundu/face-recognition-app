import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className='center'>
			<img 
				src={ imageUrl } 
				alt='' 
			/>
		</div>
	)
}

export default FaceRecognition;