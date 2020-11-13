import React from "react";
import Form from "./Form";
import { useLogin } from "../context/LoginContext";

const loginFields = [
	{
		name: "username",
		type: "text",
		placeholder: "username",
		className: "username-field",
	},
	{
		name: "password",
		type: "password",
		placeholder: "password",
		className: "password-field",
	}
];
const Login = () => {
	const { login, pushToPath, isLoggedIn } = useLogin();
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const handleSubmit = (credentials) => {
		login(credentials);
	};
	return (
		<>
			<h1>Please log in</h1>
			<Form handleSubmit={handleSubmit} fields={loginFields} />

		</>
	);
};

export default Login;
