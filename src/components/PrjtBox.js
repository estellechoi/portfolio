import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
	margin-bottom: 80px;
`;

const Head = styled.h2`
	margin: 0 0 20px;
	font-size: 35px;
	font-family: "Untitled Sans", UntitledSans, -apple-system, BlinkMacSystemFont,
		"Helvetica Neue", Arial, sans-serif;
	font-weight: 500;
	color: rgb(40, 43, 46);
	line-height: 1;
`;

const SubHead = styled.h3`
	margin: 0 0 20px;
	font-weight: 400;
	font-size: 17px;
	color: rgb(102, 110, 117);
	line-height: 1.5;
`;

const ABox = styled.div`
	margin-bottom: 40px;
	padding-left: 20px;
	border-left: 3px solid #e5e5e5;
`;

const A = styled.a`
	color: #7d7d7d;
	&:hover {
		color: rgb(149, 108, 50);
		text-decoration: underline;
	}
`;

const Desc = styled.div`
	margin-bottom: 40px;
`;

const DescTitle = styled.h4`
	font-weight: 500;
	font-size: 20px;
	color: rgb(40, 43, 46);
	line-height: 1;
	margin-bottom: 20px;
`;

const DescContent = styled.div``;

const PrjtImage = styled.img`
	width: 100%;
	border-radius: 10px;
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
`;

export default function PrjtBox({ idName, head, subHead, repoUrl, desc }) {
	return (
		<Wrapper id={idName}>
			<Head>{head}</Head>
			<SubHead>{subHead}</SubHead>
			<ABox>
				<A href={repoUrl}>Click here to visit the repository.</A>
			</ABox>

			{desc.map((item) => (
				<Desc>
					<DescTitle>{item.title}</DescTitle>
					<DescContent>
						<PrjtImage
							src={item.content.src}
							alt={item.content.alt}
						></PrjtImage>
					</DescContent>
				</Desc>
			))}
		</Wrapper>
	);
}
