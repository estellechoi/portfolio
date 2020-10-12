import React, { useRef } from "react";
import "./App.css";

function App() {
	const pages = [
		{
			id: 1,
			name: "Github",
			url: "https://github.com/estellechoi",
		},
	];

	// When manipulating some variables, without re-rendering, just use useRef instead of useState.
	const nextId = useRef(4);

	const onCreate = () => {
		console.log(nextId.current); // 4
		nextId.current += 1;
	};

	return <div className="App"></div>;
}

export default App;
