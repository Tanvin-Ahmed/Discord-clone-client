import React from "react";
import InputWithLabel from "../shared/InputWithLabel";

const LoginInputs = props => {
	const { mail, password, setMail, setPassword } = props;

	return (
		<>
			<InputWithLabel
				value={mail}
				setValue={setMail}
				type="email"
				placeholder="Ender e-mail"
				label="E-mail"
			/>
			<InputWithLabel
				value={password}
				setValue={setPassword}
				type="password"
				placeholder="Ender password"
				label="Password"
			/>
		</>
	);
};

export default LoginInputs;
