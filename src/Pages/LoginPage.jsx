import React, { useEffect, useState } from "react";
import AuthBox from "../Components/shared/AuthBox";
import LoginPageHeader from "../Components/login/LoginPageHeader";
import LoginInputs from "../Components/login/LoginInputs";
import LoginPageFooter from "../Components/login/LoginPageFooter";
import { validateLoginForm } from "../utils/validator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../app/actions/userActions";

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		setIsFormValid(validateLoginForm({ mail, password }));
	}, [mail, password, setIsFormValid]);

	const handleLogin = () => {
		dispatch(setLogin({ mail, password }, navigate));
	};

	return (
		<AuthBox>
			<LoginPageHeader />
			<LoginInputs
				mail={mail}
				setMail={setMail}
				password={password}
				setPassword={setPassword}
			/>
			<LoginPageFooter handleLogin={handleLogin} isFormValid={isFormValid} />
		</AuthBox>
	);
};

export default LoginPage;
