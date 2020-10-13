import React from "react";
import styled from "styled-components";

// styled components
const SideBarWrapper = styled.div`
	border-right: 1px solid rgb(226, 230, 233);
	width: 100%;
	height: 100%;
`;

const Box = styled.div`
	border-bottom: 1px solid rgb(226, 230, 233);
	padding-top: 10px;
	padding-bottom: 10px;
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
	&:hover {
		background-color: rgb(254, 244, 220);
	}

	&:active {
		background-color: rgb(250, 225, 87);
	}
`;

const RowFlexBox = styled.div`
	display: flex;
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
	return (
		<SideBarWrapper>
			<Box>
				<RowFlexBox>
					<ImageWrapper>
						<Image src="/portfolio/images/youjin.jpg" alt="Youjin's profile" />
					</ImageWrapper>

					<NameWrapper>
						<Name>Yujin Choi</Name>
					</NameWrapper>
				</RowFlexBox>
			</Box>

			<Box>
				<BoxTitle>Contact</BoxTitle>
				<BoxItem>+82 10-5670-0641</BoxItem>
				<BoxItem>estele.choi@gmail.com</BoxItem>
				<BoxLinkItem>
					<a
						href="https://www.linkedin.com/in/yujin-choi-460a931b2/"
						alt="Moving to LinkedIn profile"
					>
						LinkedIn
					</a>
				</BoxLinkItem>
				<BoxLinkItem>
					<a
						href="https://github.com/estellechoi"
						alt="Moving to Github profile"
					>
						Github
					</a>
				</BoxLinkItem>
			</Box>

			<Box>
				<BoxTitle>Projects</BoxTitle>
				<nav>
					<MenuList>
						{prjts.map((prjt, index) => (
							<MenuItem key={index}>
								<BoxLinkItem>
									<a href={`/#${prjt.idName}`} alt={prjt.title}>
										{prjt.title}
									</a>
								</BoxLinkItem>
							</MenuItem>
						))}
					</MenuList>
				</nav>
			</Box>
		</SideBarWrapper>
	);
}
