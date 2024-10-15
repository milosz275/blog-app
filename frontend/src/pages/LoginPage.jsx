
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TemplatePage from "./TemplatePage";
import { useTranslation } from "react-i18next";
import { LOGIN_URL, LOGIN_URL_PL, ROOT_URL } from "../urls";

const MainPage = () => {
	const navigate = useNavigate();
	const { i18n, t } = useTranslation();

	useEffect(() => {
		if (i18n.language === "en" && useRef.current !== "en") {
			navigate(LOGIN_URL);
		} else if (i18n.language === "pl" && useRef.current !== "pl") {
			navigate(LOGIN_URL_PL);
		}
	}, [i18n.language, navigate]);

	return (
		<TemplatePage>
			<div className="flex flex-col w-full justify-center elements-center mx-auto text-center bg-transparent">
				<div className="flex flex-col w-full max-w-3xl items-center justify-center mx-auto mt-24 mb-8 bg-gradient-to-r from-[rgba(224,227,238,0.42)] to-[rgba(207,214,229,0.37)] dark:from-[rgba(52,58,114,0.5)] dark:to-[rgba(29,58,97,0.61)] backdrop-blur-3xl transition-all duration-300 ease-in-out transform py-32 rounded-xl">
					<span className="w-full max-w-lg text-sm font-semibold text-left mb-4 select-none px-2 opacity-100 hover:opacity-80 transition duration-200" onClick={() => navigate(ROOT_URL)}>
						<span className="cursor-pointer">
							&rarr; {t("back_to_main_page")}{" "}
						</span>
					</span>
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("login.title")}</h1>
					<form className="w-full max-w-lg mx-auto bg-transparent px-2">
						<input
							type="email"
							placeholder={t("login.email")}
							className="w-full p-2 mb-4 text-black dark:text-white bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-900/[.85] dark:to-gray-950/[.85] transition-all duration-200 opacity-90 hover:opacity-100 rounded-lg outline-none hover:outline-none cursor-text"
							readOnly={false}
						/>
						<button
							type="submit"
							className="bg-blue-600/[.8] hover:bg-blue-600 transition-all duration-200 text-white p-2 w-full rounded-lg">
							{t("login.confirm")}
						</button>
					</form>
				</div>
			</div>
		</TemplatePage>
	);
};

export default MainPage;
