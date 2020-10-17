import React, { useState, useEffect } from "react";
import { useEventListener } from "./../hooks/useEventListener";
import styled from "styled-components";
import { device } from "./../deviceSize";
import Btn from "./Btn"
import { BiPlus } from "react-icons/bi";



// styled components
const SideBarWrapper = styled.div`
	width: 100%;
	height: 100%;

	@media ${device.tabletL} {
		border-right: 1px solid rgb(226, 230, 233);
	}
`;

const Box = styled.div`
	border-bottom: 1px solid rgb(226, 230, 233);
	padding-top: 10px;
	padding-bottom: 10px;
    background-color: #fff;
`;

const ContactBox = styled(Box)`
	text-align: right;
	display: ${props => props.render ? 'block' : 'none'};

	@media ${device.tabletL} {
		text-align: left;
		display: block;
	}	
`;


const MenuBox = styled(Box)`
	display: none;
	
	@media ${device.tabletL} {
		display: block;
	}
`;

const BoxTitle = styled.div`
	font-family: "Lato", sans-serif;
	font-weight: 700;
	letter-spacing: 0.05em;
	color: rgb(40, 43, 46);
	text-transform: uppercase;
	font-size: 1rem;
	line-height: 1rem;
	font-variant: all-small-caps;
	padding: 10px 25px;
`;

const BoxItem = styled.div`
	padding: 10px 25px;
	line-height: 25px;
	font-family: "Untitled Sans", UntitledSans, -apple-system, BlinkMacSystemFont,
		"Helvetica Neue", Arial, sans-serif;
	font-size: 0.8em;
	font-weight: 400;
	color: rgb(40, 43, 46);
`;

const BoxLinkItem = styled(BoxItem)`
	&:hover, &:active {
		background-color: rgb(3, 136, 252);
		color: #fff;
	}
`;

const FlexBox = styled.div`
	display: flex;
	align-items: center;
`;

const SpreadFlexBox = styled(FlexBox)`
	justify-content: space-between;
`;

const ImageWrapper = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	margin-left: 25px;
	margin-right: 15px;
`;

const Image = styled.img`
	width: 100%;
`;

const NameWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Name = styled.span`
	font-family: "Roboto Mono", monospace;
	font-weight: 400;
	color: rgb(40, 43, 46);
	font-size: 11px;
	border: 1px solid #e5e5e5;
	border-radius: 10px;
	padding: 2px 6px;
	letter-spacing: 0.6px;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li``;

// data

export default function Menu({ prjts }) {
	// the default val is dependent on the viewport size.
	const [showContact, setShowContact] = useState(false);
	const [showContactBtn, setshowContactBtn] = useState(false);

	const toggleContact = () => setShowContact((prev) => !prev);
	
	const handleWindowResize = () => {
		const viewportWidth = window.innerWidth;
		setshowContactBtn(viewportWidth < 1024);
	}

	useEffect(() => handleWindowResize(),[]);
	
	useEventListener(window, 'resize', handleWindowResize);

	return (
		<SideBarWrapper>
			<Box>
				<SpreadFlexBox>
					<FlexBox>
						<ImageWrapper>
							<Image src="/portfolio/images/youjin.jpg" alt="Youjin's profile" />
						</ImageWrapper>

						<NameWrapper>
							<Name>Yujin Choi</Name>
						</NameWrapper>
					</FlexBox>

					<Btn render={showContactBtn} label={<BiPlus/>} title={showContact ? '연락처 접기' : '연락처 보기'} open={showContact} onClick={toggleContact}></Btn>
				</SpreadFlexBox>
			</Box>

			<ContactBox render={showContact}>
				<BoxTitle>Contact</BoxTitle>
				<BoxLinkItem>
					<a
						href="mailto:estele.choi@gmail.com"
						title="Send email to this address"
					>
						estele.choi@gmail.com
					</a>
				</BoxLinkItem>
				<BoxLinkItem>
					<a
						href="https://www.linkedin.com/in/yujin-choi-460a931b2/"
						title="Move to Yujin's LinkedIn profile"
					>
						LinkedIn
					</a>
				</BoxLinkItem>
				<BoxLinkItem>
					<a
						href="https://github.com/estellechoi"
						title="Move to Yujin's Github profile"
					>
						Github
					</a>
				</BoxLinkItem>
			</ContactBox>

			<MenuBox>
				<BoxTitle>Projects</BoxTitle>
				<nav>
					<MenuList>
						{prjts.map((prjt, index) => (
							<MenuItem key={index}>
								<BoxLinkItem>
									<a href={`/portfolio/#${prjt.idName}`} alt={prjt.title}>
										{prjt.title}
									</a>
								</BoxLinkItem>
							</MenuItem>
						))}
					</MenuList>
				</nav>
			</MenuBox>
		</SideBarWrapper>
	);
}
