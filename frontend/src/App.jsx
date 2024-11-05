// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainPage from "./pages/MainPage";
import DebugPage from "./pages/DebugPage";
import LogoutPage from "./pages/LogoutPage";
import LoginPage from "./pages/LoginPage";
import RedirectPage from "./pages/RedirectPage";
import * as urls from "./urls";

function App() {
	const { t } = useTranslation();

	useEffect(() => {
		const handleBlur = () => {
			document.title = t("app_name_blur");
		};

		const handleFocus = () => {
			document.title = t("app_name");
		};

		window.addEventListener("blur", handleBlur);
		window.addEventListener("focus", handleFocus);

		document.title = t("app_name");

		return () => {
			window.removeEventListener("blur", handleBlur);
			window.removeEventListener("focus", handleFocus);
		};
	}, [t]);

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={urls.ROOT_URL} element={<MainPage />} />
					<Route path={urls.DEBUG_URL} element={<DebugPage />} />
					<Route path={urls.LOGOUT_URL} element={<LogoutPage />} />
					<Route path={urls.LOGOUT_URL_PL} element={<LogoutPage />} />
					<Route path={urls.LOGIN_URL} element={<LoginPage />} />
					<Route path={urls.LOGIN_URL_PL} element={<LoginPage />} />
					<Route path="*" element={<RedirectPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
