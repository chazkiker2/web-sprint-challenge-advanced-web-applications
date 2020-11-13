import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LoginProvider } from "./context/LoginContext";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Router>
		<LoginProvider>
			<App />
		</LoginProvider>
	</Router>
	, rootElement);
