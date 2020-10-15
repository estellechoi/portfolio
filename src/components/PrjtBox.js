import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "./../deviceSize";
import SkillIcon from "./SkillIcon";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";

// styled components
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

const IconBox = styled.div`
	margin: 0 0 36px;
	display: flex;

	& > * {
		margin-right: 20px;
	}
`;

const Comment = styled.div`
	display: inline-flex;
	margin-bottom: 40px;
	padding-left: 20px;
	border-left: 3px solid #e5e5e5;
	color: rgb(102,110,117);
	font-size: 0.9em;
`;

const RepoLink = styled.a`
	margin-left: 20px;
	color: #7d7d7d;

	&:hover {
		color: rgb(149, 108, 50);
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

const ImageWrapper = styled.div`
	border-radius: 10px;
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	position: relative;
`;

const ImageSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	background-color: transparent;
	transition: opacity 0.4s;
	display: flex;
	justify-content: space-between;
	align-items: center;
	opacity: 1;

	@media ${device.laptop} {
		opacity: 0;
	}

	&:hover {
		opacity: 1;
	}
`;

const ImageSliderBtn = styled.button`
	height: 60px;
	border: none;
	padding: 0 15px;
	font-size: 1.2rem;
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	font-weight: 500;
	border-radius: 0 10px 10px 0;
	visibility: ${(props) => (props.hide ? "hidden" : "visible")};

	&:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}
`;

const ImageSliderBtnNext = styled(ImageSliderBtn)`
	border-radius: 10px 0 0 10px;
`;

const ImageBundle = styled.div`
	display: flex;
	transition: transform 0.4s;
`;

const Image = styled.img`
	width: 100%;
`;

export default function PrjtBox({
	idName,
	head,
	subHead,
	skills,
	type,
	repoUrl,
	img,
	desc,
	width,
}) {
	// data
	const skillImageUrl = {
		html5: 'html5.png',
		css3: 'css3.png',
		js: 'js.png',
		vue: 'vue.png',
		react: 'react.png',
		'styled-components': 'styled-components.png',
		java: 'java.png',
		spring: 'spring.png'
	}

	// state
	const [slideCnt, setSlideCnt] = useState(0);
	const lastCnt = img.length - 1;
	const isLast = slideCnt === lastCnt;
	const isFirst = !slideCnt;

	// methods
	const imageStrap = useRef();
	const translateImageStrap = (slideCnt) => {
		imageStrap.current.style.transform = `translateX(-${width * slideCnt}px)`;
	};

	const slideBefore = () => {
		if (slideCnt > 0) setSlideCnt((prev) => prev - 1);
	};

	const slideNext = () => {
		if (slideCnt < lastCnt) setSlideCnt((prev) => prev + 1);
	};

	// update
	useEffect(() => translateImageStrap(slideCnt));

	// dom
	return (
		<Wrapper id={idName}>
			<Head>{head}</Head>
			<SubHead>{subHead}</SubHead>

				<IconBox>
					{skills.map((skill, index) => <SkillIcon key={index} src={`/portfolio/images/${skillImageUrl[skill]}`} alt={`${skill} icon`}></SkillIcon>)}
				</IconBox>
			<Comment>
				{type.join(" / ")}
				{!repoUrl ? null : (
					<RepoLink href={repoUrl} title="Visiting the repository of this project">
						<IconContext.Provider value={{size: '1.2em'}}>
							<AiFillGithub/>
						</IconContext.Provider>
					</RepoLink>
				)}
				
			</Comment>

			<Desc>
				<DescTitle>Preview</DescTitle>
				<DescContent>
					<ImageWrapper>
						<ImageSlider>
							<ImageSliderBtn
								type="button"
								onClick={slideBefore}
								hide={isFirst}
							>
								←
							</ImageSliderBtn>
							<ImageSliderBtnNext
								type="button"
								onClick={slideNext}
								hide={isLast}
							>
								→
							</ImageSliderBtnNext>
						</ImageSlider>

						<ImageBundle ref={imageStrap}>
							{img.map((item, index) => (
								<Image key={index} src={item.src} alt={item.alt}></Image>
							))}
						</ImageBundle>
					</ImageWrapper>
				</DescContent>
			</Desc>

			{desc.map((item, index) => (
				<Desc key={index}>
					<DescTitle>{item.title}</DescTitle>
					<DescContent>{item.content}</DescContent>
				</Desc>
			))}
		</Wrapper>
	);
}
