import React, { createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useLocalToken } from "../hooks/useLocalToken";
import { axiosAuth } from "../utils/axiosAuth";

const LoginContext = createContext();
export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
	const history = useHistory();
	const [token, setToken, removeToken, isTokenSet] = useLocalToken();

	const pushToPath = (path) => {
		history.push(`${path}`);
	};

	const login = (credentials) => {
		axiosAuth().post("login", credentials)
			.then(res => {
				console.log(res.data.payload);
				setToken(res.data.payload);
				history.push("/");
			}).catch(err => {
				console.log(err);
			});
	};

	const logout = () => {
		axiosAuth().post("logout");
		removeToken();
	};

	return (
		<LoginContext.Provider value={{ token, setToken, removeToken, isTokenSet, login, logout, pushToPath, }}>
			{children}
		</LoginContext.Provider>
	);
};