const usernameValidator = username => {
	return username.length >= 3 && username.length <= 12;
};

export const mailValidator = mail => {
	const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return emailPattern.test(mail);
};

const passwordValidator = password => {
	return password.length >= 6 && password.length <= 12;
};

export const validateLoginForm = ({ mail, password }) => {
	const isMailValid = mailValidator(mail);
	const isPasswordValid = passwordValidator(password);

	return isMailValid && isPasswordValid;
};

export const validateRegisterForm = ({ username, mail, password }) => {
	const isMailValid = mailValidator(mail);
	const isPasswordValid = passwordValidator(password);
	const isUsernameValid = usernameValidator(username);

	return isMailValid && isPasswordValid && isUsernameValid;
};
