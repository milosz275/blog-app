// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import TemplatePage from "../pages/TemplatePage";
import { useTranslation } from "react-i18next";
import { Store } from "react-notifications-component"
import "react-notifications-component/dist/theme.css"

const MainPage = () => {
	const { t } = useTranslation();

	const features = [
		{
			imgSrc: "/blog-app/assets/undraw_code_review_l1q9.svg",
			imgAlt: "code_review",
			titleKey: "main_page.features.feature_1.title",
			descriptionKey: "main_page.features.feature_1.description",
		},
		{
			imgSrc: "/blog-app/assets/undraw_programming_2svr.svg",
			imgAlt: "programming",
			titleKey: "main_page.features.feature_2.title",
			descriptionKey: "main_page.features.feature_2.description",
		},
		{
			imgSrc: "/blog-app/assets/undraw_version_control_9bpv.svg",
			imgAlt: "version_control",
			titleKey: "main_page.features.feature_3.title",
			descriptionKey: "main_page.features.feature_3.description",
		},
	];

	useEffect(() => {
		Store.addNotification({
			title: t("main_page.notification.title"),
			message: t("main_page.notification.message"),
			type: "success",
			insert: "bottom",
			container: "bottom-right",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: true,
			},
		});
	}, [t]);

	return (
		<TemplatePage>
			<div className="flex flex-col w-full justify-center elements-center mx-auto py-16 bg-gradient-to-r from-[rgba(224,227,238,0.42)] to-[rgba(207,214,229,0.37)] dark:from-[rgba(52,58,114,0.5)] dark:to-[rgba(29,58,97,0.61)] backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center">
				<div className="flex flex-col sm:flex-row w-full max-w-5xl mx-auto items-center justify-center">
					<div className="flex flex-col w-full items-center justify-center select-none h-full mt-32 sm:mt-0 hover:scale-100 sm:hover:scale-105 hover:opacity-75 transition-all duration-200 ease-linear">
						<h1 className="text-5xl font-bold text-center">{t("main_page.title")}</h1>
						<p className="text-xl text-center mt-2 sm:mt-3">{t("main_page.description")}</p>
					</div>
					<div className="flex flex-col w-full items-center justify-center select-none mt-12 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear">
						<img
							src="/blog-app/assets/undraw_code_thinking_1jeh.svg"
							alt="code_thinking"
							draggable="false"
							className="w-64 drop-shadow-md dark:drop-shadow-light object-cover" />
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-32 mb-8 select-none">
					<h1 className="text-3xl font-bold text-center hover:scale-105 mb-6 transition-all duration-200 ease-linear">{t("main_page.features.title")}</h1>
					<div className="flex flex-col sm:flex-row w-full items-center justify-center select-none">
						{features.map((feature, index) => (
							<div key={index} className="flex flex-col w-full sm:w-1/3 items-center justify-center select-none mt-8 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear">
								<img
									src={feature.imgSrc}
									alt={feature.imgAlt}
									draggable="false"
									className="h-32 drop-shadow-md dark:drop-shadow-light object-cover"
								/>
								<h1 className="text-lg font-bold text-center mt-3 h-8">{t(feature.titleKey)}</h1>
								<p className="text-center mt-4">{t(feature.descriptionKey)}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</TemplatePage>
	);
}

export default MainPage;
