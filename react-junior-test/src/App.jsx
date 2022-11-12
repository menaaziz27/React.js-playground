import './App.css';
import { useState } from 'react';

function App() {
	const [points, setPoints] = useState([]);
	const [deletedPoints, setDeletedPoints] = useState([]);

	const clickHandler = e => {
		const { clientX, clientY } = e;
		setPoints([...points, { x: clientX, y: clientY }]);
	};

	const undo = e => {
		e.stopPropagation(); // this prevent the event bubbling to the parent "without it the button won't be clickable and when I press it it will draw a circle as being done in div body"
		if (points.length === 0) return;
		const newPoints = [...points];
		const deletedPoint = newPoints.pop();
		setDeletedPoints([...deletedPoints, deletedPoint]);
		setPoints(newPoints);
	};
	const redo = e => {
		e.stopPropagation();
		if (deletedPoints.length === 0) return;
		setPoints([...points, deletedPoints[deletedPoints.length - 1]]);
		deletedPoints.pop();
		setDeletedPoints([...deletedPoints]);
	};
	return (
		<>
			<div style={{ width: '100vw', height: '100vh' }} onClick={clickHandler}>
				<button className="btn" onClick={undo}>
					undo
				</button>
				<button className="btn" onClick={redo}>
					redo
				</button>
				{points.map((point, idx) => (
					<div
						key={idx}
						className="point"
						style={{
							left: point?.x - 5 + 'px',
							top: point?.y - 5 + 'px',
						}}></div>
				))}
			</div>
		</>
	);
}

export default App;
