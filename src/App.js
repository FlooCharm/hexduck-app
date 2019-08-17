import React, { useEffect, useState } from 'react';
import './App.css';
import Duck from './Duck.js'

function App() {
	let [orange, setOrange] = useState();
	let [yellow, setYellow] = useState();
	let [blue, setBlue] = useState();
	let [changeColor, setChangeColor] = useState();

	async function fetchColor(a, b) {
		const response = await fetch(`http://api.noopschallenge.com/hexbot?count=1&seed=${a},${b}`)
		const json = await response.json()
		return json.colors[0].value;
	}

	function fetchColors() {
		let orange = fetchColor('F76A28', 'F79028').then(color => setOrange(color))
		let yellow = fetchColor('F7B928', 'F7F728').then(color => setYellow(color))
		let blue = fetchColor('28F7E2', '3628F7').then(color => setBlue(color))
	}

	useEffect(() => {
		fetchColors()
	}, [])

	return (
		<div className='container'>
			<Duck
				orange={orange}
				yellow={yellow}
				blue={blue}
			/>
			<button onClick={() => fetchColors()}>How 'bout, no</button>
		</div>
	);
}

export default App;
