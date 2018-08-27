import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div>
			<p className='f3'>
				{'Insert an Image to detect faces in your pictures!'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input type='text' className='br2 f4 pa2 w-70 center' />
					<button className='br2 w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;