import React, { useRef, useState, useEffect } from "react";
import { useEventListener } from "./../hooks/useEventListener";
import styled from "styled-components";
import { device } from "./../deviceSize";
import PrjtBox from "./PrjtBox";

// styled components
const MainWrapper = styled.main`
	padding: 120px 0 0;	
	display: flex;
	justify-content: center;


	@medis ${device.tablet} {
		padding-top: 180px;
	}

	@media ${device.tabletL} {
		padding-top: 60px;
		padding-left: 250px;
	}
`;

const MainInner = styled.div`
	max-width: 585px;
	width: 88%;

	@media ${device.tablet} {
		width: 100%;		
	}

	@media ${device.laptop} {
		max-width: 999px;
	}
`;

// data

export default function Main({ prjts }) {
	const mainInner = useRef();
	const [mainWidth, setMainWidth]  = useState(585);

	const setNewWidth = () => (setMainWidth(mainInner.current.clientWidth));

	useEffect(() => setNewWidth(), []);
	useEventListener(window, 'resize', setNewWidth);
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
						skills={prjt.skills}
						type={prjt.type}
						repoUrl={prjt.repoUrl}
						img={prjt.img}
						desc={prjt.desc}
						width={mainWidth}
					></PrjtBox>
				))}
			</MainInner>
		</MainWrapper>
	);
}
