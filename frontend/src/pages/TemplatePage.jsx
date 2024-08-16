// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from 'prop-types';
import ThemeToggleButton from "../components/ThemeToggleButton";
import CookieConsent from "react-cookie-consent";

TemplatePage.propTypes = {
	children: PropTypes.node.isRequired
};

function TemplatePage({children}) {
	return (
		<div className="flex flex-col min-h-screen font-inter">
			<ThemeToggleButton />
			<div className="flex flex-col flex-grow justify-center justify-items-center bg-slate-100 dark:bg-gray-900 dark:text-white -mt-2">
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
					This page uses cookies.{" "}
				</CookieConsent>
			</div>
		</div>
	);
}

export default TemplatePage;
