// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import ThemeToggleButton from "../functions/themeToggleButton";
import LanguageToggleButton from "../functions/languageToggleButton";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";

TemplatePage.propTypes = {
	children: PropTypes.node.isRequired
};

function TemplatePage({ children }) {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col min-h-screen font-inter transition-all duration-200">
			<ThemeToggleButton />
			<LanguageToggleButton />
			<div className="flex flex-col flex-grow justify-center justify-items-center bg-gradient-to-r from-[rgba(108,150,241,0.55)] to-[rgba(78,129,238,0.56)] dark:from-[rgba(80,86,143,0.86)] dark:to-[rgba(44,91,151,0.79)] dark:text-white -mt-2">
				{children}
			</div>
			<div id="cookie-consent">
				<CookieConsent
					buttonText="I agree"
					style={{
						background: "#121212",
						fontSize: "14px",
						color: "#fff",
						textAlign: "left"
					}}
					buttonStyle={{
						background: "#333333",
						fontSize: "14px",
						color: "#fff",
						textAlign: "center",
						padding: "2px",
					}}>
					{t("cookies")}{" "}
				</CookieConsent>
			</div>
		</div>
	);
}

export default TemplatePage;
