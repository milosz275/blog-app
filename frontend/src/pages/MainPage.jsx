// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import TemplatePage from "../pages/TemplatePage";
import { useTranslation } from "react-i18next";
import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

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
		{
			imgSrc: "/blog-app/assets/undraw_source_code_re_wd9m.svg",
			imgAlt: "code_snippets",
			titleKey: "main_page.features.feature_4.title",
			descriptionKey: "main_page.features.feature_4.description",
		},
		{
			imgSrc: "/blog-app/assets/undraw_server_push_re_303w.svg",
			imgAlt: "github_integration",
			titleKey: "main_page.features.feature_5.title",
			descriptionKey: "main_page.features.feature_5.description",
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
			<div className="flex flex-col w-full justify-center elements-center mx-auto pt-24 pb-16 bg-gradient-to-r from-[rgba(224,227,238,0.42)] to-[rgba(207,214,229,0.37)] dark:from-[rgba(52,58,114,0.5)] dark:to-[rgba(29,58,97,0.61)] backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center">
				<div className="flex flex-col sm:flex-row w-full max-w-5xl mx-auto items-center justify-center mt-20">
					<div className="flex flex-col w-full items-center justify-center select-none h-full mt-32 sm:mt-0 hover:scale-100 sm:hover:scale-105 hover:opacity-75 transition-all duration-200 ease-linear">
						<h1 className="text-5xl font-bold text-center">{t("main_page.title")}</h1>
						<p className="text-xl text-center mt-2 sm:mt-3">{t("main_page.description")}</p>
					</div>
					<div className="flex flex-col w-full items-center justify-center select-none mt-12 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear">
						<img
							src="/blog-app/assets/undraw_code_thinking_1jeh.svg"
							alt="code_thinking"
							draggable="false"
							className="w-72 drop-shadow-md dark:drop-shadow-light object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-36 mb-8 select-none">
					<h1 className="text-3xl font-bold text-center hover:scale-105 mb-12 transition-all duration-200 ease-linear">
						{t("main_page.features.title")}
					</h1>
					<div className="grid w-full items-center justify-center select-none gap-4 mx-2 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
						{features.map((feature, index) => (
							<div
								key={index}
								className="flex flex-col items-center select-none mt-8 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear gap-4 mx-2 px-2 h-96"
							>
								<div className="w-36 h-36 rounded-full bg-gradient-to-r from-[#4a90e2] to-[#8e44ad] dark:from-[#8e44ad] dark:to-[#4a90e2] flex items-center justify-center">
									<img
										src={feature.imgSrc}
										alt={feature.imgAlt}
										draggable="false"
										className="drop-shadow-md dark:drop-shadow-light object-cover scale-75"
									/>
								</div>
								<h1 className="text-lg font-bold text-center mt-3 h-12">
									{t(feature.titleKey)}
								</h1>
								<p className="text-center mt-4 h-15">{t(feature.descriptionKey)}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</TemplatePage>
	);
};

export default MainPage;
