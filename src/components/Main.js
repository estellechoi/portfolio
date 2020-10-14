import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import PrjtBox from "./PrjtBox";

// styled components
const MainWrapper = styled.main`
	padding: 60px 0 0 250px;
`;

const MainInner = styled.div`
	width: 585px;
	margin: 0 auto;
`;

// data

export default function Main({ prjts }) {
	const mainInner = useRef();
	let mainWidth = useRef(585);

	const setNewWidth = () => (mainWidth.current = mainInner.current.clientWidth);

	useEffect(setNewWidth, []);
	// useEventListener Hook will be made soon to handle resize event.

	return (
		<MainWrapper role="main">
			<MainInner ref={mainInner}>
				{prjts.map((prjt, index) => (
					<PrjtBox
						key={index}
						idName={prjt.idName}
						head={prjt.title}
						subHead={prjt.subTitle}
						repoUrl={prjt.repoUrl}
						img={prjt.img}
						desc={prjt.desc}
						width={mainWidth.current}
					></PrjtBox>
				))}
			</MainInner>
		</MainWrapper>
	);
}
