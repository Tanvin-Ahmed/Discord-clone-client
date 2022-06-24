import React from "react";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import RedirectInfo from "../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormValidMessage = () => {
	return "Press to log in!";
};

const getFormInvalidMessage = () => {
	return "Enter correct e-mail address and password should contained between 6 to 12 characters";
};

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
	const navigate = useNavigate();
	const handlePushToRegisterPage = () => {
		navigate("/register");
	};

	return (
		<>
			<Tooltip
				title={isFormValid ? getFormValidMessage() : getFormInvalidMessage()}
			>
				<div>
					<CustomPrimaryButton
						label="Log in"
						additionalStyles={{ marginTop: "30px" }}
						disabled={!isFormValid}
						onClick={handleLogin}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text="Need an account? "
				redirectText="Create an account"
				additionalStyles={{ marginTop: "5px" }}
				redirectHandler={handlePushToRegisterPage}
			/>
		</>
	);
};

export default LoginPageFooter;
