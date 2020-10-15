import React from "react";
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
	return (
		<APP>
			<HiddenBox html={<h1>{TITLE}</h1>}></HiddenBox>
			<Header prjts={prjts}></Header>
			<Main prjts={prjts}></Main>
		</APP>
	);
}