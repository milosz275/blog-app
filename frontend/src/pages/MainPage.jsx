// eslint-disable-next-line no-unused-vars
import React from "react";
import TemplatePage from "../pages/TemplatePage";
import { useTranslation } from "react-i18next";

const MainPage = () => {
	const { t } = useTranslation();

	return (
		<TemplatePage>
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-5xl font-bold text-center select-none">{t("welcome")}</h1>
				<p className="text-lg text-center mt-4 select-none">{t("description")}</p>
			</div>
		</TemplatePage>
	);
}

export default MainPage;
