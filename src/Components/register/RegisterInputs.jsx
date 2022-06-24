import React from "react";
import InputWithLabel from "../shared/InputWithLabel";

const RegisterInputs = props => {
	const { username, setUsername, mail, setMail, password, setPassword } = props;
	return (
		<>
			<InputWithLabel
				label="Username"
				type="text"
				placeholder="Ender name"
				value={username}
				setValue={setUsername}
			/>
			<InputWithLabel
				label="E-mail"
				type="email"
				placeholder="Ender e-mail address"
				value={mail}
				setValue={setMail}
			/>
			<InputWithLabel
				label="Password"
				type="password"
				placeholder="Ender password"
				value={password}
				setValue={setPassword}
			/>
		</>
	);
};

export default RegisterInputs;
