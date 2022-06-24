import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Wrapper = styled(Box)({
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	width: "100%",
});

const Label = styled("p")({
	color: "#b9bbbe",
	textTransform: "uppercase",
	fontWeight: 600,
	fontSize: "16px",
});

const Input = styled("input")({
	flexGrow: 1,
	height: "40px",
	border: "1px solid black",
	borderRadius: "5px",
	margin: 0,
	fontSize: "16px",
	padding: "0 5px",
	color: "#dcddde",
	background: "#35393f",
});

const InputWithLabel = props => {
	const { value, setValue, label, placeholder, type } = props;

	const handleChange = e => {
		setValue(e.target.value);
	};

	return (
		<Wrapper>
			<Label>{label}</Label>
			<Input
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				type={type}
			/>
		</Wrapper>
	);
};

export default InputWithLabel;
