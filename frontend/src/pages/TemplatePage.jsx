// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import ThemeToggleButton from "../functions/themeToggleButton";
import LanguageToggleButton from "../functions/languageToggleButton";
import Footer from "../components/Footer";
import { SetCookie } from "../components/SetCookie";
import { GetCookie } from "../components/GetCookie";
import { useTranslation } from "react-i18next";
import { Store } from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

TemplatePage.propTypes = {
	children: PropTypes.node.isRequired
};

function TemplatePage({ children }) {
	const { t } = useTranslation();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [windowWidth]);

	useEffect(() => {
		const cookieConsent = GetCookie("cookie-consent");
		if (!cookieConsent) {
			Store.addNotification({
				title: "Cookies",
				message: "This website uses cookies to enhance the user experience.",
				type: "info",
				container: "bottom-right",
				insert: "bottom",
				animationIn: ["animate__animated", "animate__fadeIn"],
				animationOut: ["animate__animated", "animate__fadeOut"],
				dismiss: {
					duration: 5000,
					onScreen: true
				}
			});
			SetCookie("cookie-consent", "true");
		}
	}, []);

	return (
		windowWidth > 200 ? (
			<div className="flex flex-col min-h-screen font-inter transition-all duration-200 bg-modern-light/[.4]">
				<ThemeToggleButton />
				<LanguageToggleButton />
				<div className="flex flex-col flex-grow w-full justify-center justify-items-center items-center bg-gradient-to-r from-[rgba(108,150,241,0.55)] to-[rgba(78,129,238,0.56)] dark:from-[rgba(80,86,143,0.86)] dark:to-[rgba(44,91,151,0.79)] dark:text-white -mt-2  pb-40">
					{children}
				</div>
				<Footer />
			</div>
		) : (
			<>
				<div>
					{t("too_small_width")}
				</div>
			</>
		)
	);
}

export default TemplatePage;
