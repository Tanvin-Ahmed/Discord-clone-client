import React from "react";
import { styled } from "@mui/system";

const AvatarPreview = styled("div")({
	height: "42px",
	width: "42px",
	borderRadius: "42px",
	backgroundColor: "#5865f2",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontSize: "20px",
	fontWidth: 700,
	marginLeft: "5px",
	color: "white",
});

const Avatar = props => {
	const { username = "", large } = props;
	return (
		<AvatarPreview style={large ? { height: "80px", width: "80px" } : {}}>
			{username.substr(0, 2)}
		</AvatarPreview>
	);
};

export default Avatar;
