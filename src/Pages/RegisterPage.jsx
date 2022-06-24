import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import AuthBox from "../Components/shared/AuthBox";
import RegisterInputs from "../Components/register/RegisterInputs";
import RegisterPageFooter from "../Components/register/RegisterPageFooter";
import { validateRegisterForm } from "../utils/validator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRegister } from "../app/actions/userActions";

const RegisterPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateRegisterForm({ username, mail, password }));
	}, [mail, username, password, setIsFormValid]);

	const handleRegister = () => {
		dispatch(setRegister({ username, mail, password }, navigate));
	};
	return (
		<AuthBox>
			<Typography variant="h5" sx={{ color: "white" }}>
				Create an account
			</Typography>
			<RegisterInputs
				username={username}
				setUsername={setUsername}
				mail={mail}
				setMail={setMail}
				password={password}
				setPassword={setPassword}
			/>
			<RegisterPageFooter
				handleRegister={handleRegister}
				isFormValid={isFormValid}
			/>
		</AuthBox>
	);
};

export default RegisterPage;
