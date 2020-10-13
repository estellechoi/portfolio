import React from "react";
import styled from "styled-components";

/* Alternative text */
const Hidden = styled.div`
	position: absolute;
	width: 1px;
	height: 1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
`;

export default function HiddenBox({ html }) {
	return <Hidden>{html}</Hidden>;
}
