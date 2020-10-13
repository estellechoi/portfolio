import React from "react";
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
	return (
		<MainWrapper role="main">
			<MainInner>
				{prjts.map((prjt, index) => (
					<PrjtBox
						key={index}
						idName={prjt.idName}
						head={prjt.title}
						subHead={prjt.subTitle}
						repoUrl={prjt.repoUrl}
						desc={prjt.desc}
					></PrjtBox>
				))}
			</MainInner>
		</MainWrapper>
	);
}
