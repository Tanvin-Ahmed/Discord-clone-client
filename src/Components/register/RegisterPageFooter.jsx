import React from "react";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import RedirectInfo from "../shared/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormValidMessage = () => {
	return "Press to register!";
};

const getFormInvalidMessage = () => {
	return "Username should contains between 3 to 12 characters and password should contained between 6 to 12 characters. Also enter correct e-mail address";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
	const navigate = useNavigate();
	const handlePushToRegisterPage = () => {
		navigate("/login");
	};

	return (
		<>
			<Tooltip
				title={isFormValid ? getFormValidMessage() : getFormInvalidMessage()}
			>
				<div>
					<CustomPrimaryButton
						label="Register"
						additionalStyles={{ marginTop: "30px" }}
						disabled={!isFormValid}
						onClick={handleRegister}
					/>
				</div>
			</Tooltip>
			<RedirectInfo
				text=""
				redirectText="Have an account?"
				additionalStyles={{ marginTop: "5px" }}
				redirectHandler={handlePushToRegisterPage}
			/>
		</>
	);
};

export default RegisterPageFooter;
