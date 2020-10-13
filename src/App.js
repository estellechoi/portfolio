import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Main from "./components/Main";
import HiddenBox from "./components/HiddenBox";

function App() {
	const prjts = [
		{
			idName: "bad-habit-club",
			title: "Bad Habit Club",
			subTitle:
				"This is a shopping site of Bad Habit Club introducing brand archives and selling goods. Built with Vue.js.",
			repoUrl: "https://github.com/estellechoi/badhabitclub-fe",
			desc: [
				{
					title: "Preview",
					content: {
						src: "/portfolio/images/bhc1.png",
						alt: "Bad Habit Club preview no.1",
					},
				},
			],
		},
		{
			idName: "canvas",
			title: "Canvas",
			subTitle:
				"A simple painting board built with <canvas> element and pure JavaScript. Draw some lines, change line width and fill the whole canvas with your own color. Exporting your work on the canvas as a PNG file is also available.",
			repoUrl: "https://github.com/estellechoi/canvas",
			desc: [
				{
					title: "Preview",
					content: {
						src: "/portfolio/images/canvas.png",
						alt: "Ruby Potato preview",
					},
				},
			],
		},
		{
			idName: "cepo",
			title: "CEPO homepage",
			subTitle:
				"A draft markup for responsive website of CEPO, a company that develops GIS services.",
			repoUrl: "https://github.com/estellechoi/cepo",
			desc: [
				{
					title: "Preview",
					content: {
						src: "/portfolio/images/cepo.png",
						alt: "CEPO homepage preview",
					},
				},
			],
		},
		{
			idName: "ruby-potato",
			title: "Ruby Potato",
			subTitle:
				"Ruby Potato is a markdown editor for designers and front-end engineers to create their own design system.",
			repoUrl: "https://github.com/estellechoi/ruby-potato",
			desc: [
				{
					title: "Preview",
					content: "",
				},
			],
		},
		{
			idName: "raycasting-3d-engine",
			title: "Raycasting 3D Engine",
			subTitle:
				"A Raycasting algorithm based engine that renders a semi-3D map in realtime, creating first-person view exploration of a maze-looking space with walls. Built with JavaScript.",
			repoUrl: "https://github.com/estellechoi/javascript-raycasting",
			desc: [
				{
					title: "Preview",
					content: "",
				},
			],
		},
	];

	return (
		<div className="app">
			<HiddenBox
				html={<h1>Front-end engineer Youjin's portfolio</h1>}
			></HiddenBox>

			<header className="header">
				<Menu prjts={prjts}></Menu>
			</header>

			<Main prjts={prjts}></Main>
		</div>
	);
}

export default App;
