import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { TITLE, prjts } from "./const"
import Header from "./components/Header";
import Main from "./components/Main";
import HiddenBox from "./components/HiddenBox";

const APP = styled.div`
	position: relative;
`



export default function App() {
	const [activeId, setActiveId] = useState(null);

	const observerHandler = (entry) => {
		console.log(entry);
		setActiveId(entry.target.id);
	}

	return (
		<APP>
			<HiddenBox html={<h1>{TITLE}</h1>}></HiddenBox>
			<Header prjts={prjts} activeId={activeId}></Header>
			<Main prjts={prjts} observerHandler={observerHandler}></Main>
		</APP>
	);
}