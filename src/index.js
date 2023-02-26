import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/theme.css";
import "./assets/styles/index.css";
import App from "./App";

// Import All Providers
import { Provider } from "react-redux";
import store from "./store";

import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./ContectProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ChakraProvider>
				<ContextProvider>
					<App />
				</ContextProvider>
			</ChakraProvider>
		</Provider>
	</React.StrictMode>
);
