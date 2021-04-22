import React, { useRef, useEffect } from 'react';
import LeftTime from './components/LeftTime';
import img1 from './backgrounds/star.jpg';
import img2 from './backgrounds/scentCandle.jpg';
import img3 from './backgrounds/blackTexture.jpg';
import './App.css';

const imgUrl = [img1, img2, img3];

function App() {
	const app = useRef();
	useEffect(() => {
		let imgSelected = imgUrl[Math.floor(Math.random() * 3) + 0];
		app.current.style.backgroundImage = 'url(' + imgSelected + ')';
	});
	return (
		<div className="App" ref={app}>
			<LeftTime />
		</div>
	);
}

export default App;