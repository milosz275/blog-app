
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplatePage from "../pages/TemplatePage";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Store } from "react-notifications-component";
import { user } from "../icons";
import "react-notifications-component/dist/theme.css";
import { API_POSTS_POPULAR_URL, API_POSTS_RECENT_URL, API_POSTS_TRENDING_URL, LOGIN_URL, LOGIN_URL_PL } from "../urls";

const MainPage = () => {
	const navigate = useNavigate();
	const { i18n, t } = useTranslation();
	const [recentPosts, setRecentPosts] = useState([]);
	const [trendingPosts, setTrendingPosts] = useState([]);
	const [popularPosts, setPopularPosts] = useState([]);

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

	const testimonials = [
		{ user: "Jane Doe", feedback: "This platform has revolutionized how I learn and share coding knowledge." },
		{ user: "John Smith", feedback: "The community here is so helpful, I’ve grown immensely as a developer." },
		{ user: "Mary Johnson", feedback: "Amazing blog posts, always insightful and up-to-date!" },
	];

	const developers = [
		{
			name: "Alice Johnson",
			avatar: "",
			description: "Full-stack developer specializing in React and Node.js.",
		},
		{
			name: "Bob Martin",
			avatar: "",
			description: "Python and Django expert with a passion for AI.",
		},
		{
			name: "Catherine Lee",
			avatar: "",
			description: "Front-end developer with a knack for beautiful UI designs.",
		},
	];

	const tags = [
		{ name: "JavaScript", slug: "javascript" },
		{ name: "React", slug: "react" },
		{ name: "CSS", slug: "css" },
		{ name: "Node.js", slug: "nodejs" },
		{ name: "Python", slug: "python" },
	];

	const contributors = [
		{
			name: "David Green",
			avatar: "",
			posts: 42,
		},
		{
			name: "Laura Baker",
			avatar: "",
			posts: 37,
		},
		{
			name: "Michael Scott",
			avatar: "",
			posts: 29,
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

	useEffect(() => {
		const fetchRecentPosts = async () => {
			try {
				const response = await axios.get(API_POSTS_RECENT_URL);
				setRecentPosts(response.data);
			} catch (error) {
				console.error('Error fetching recent posts:', error);
			}
		};

		const fetchTrendingPosts = async () => {
			try {
				const response = await axios.get(API_POSTS_TRENDING_URL);
				setTrendingPosts(response.data);
			} catch (error) {
				console.error('Error fetching trending posts:', error);
			}
		};

		const fetchPopularPosts = async () => {
			try {
				const response = await axios.get(API_POSTS_POPULAR_URL);
				setPopularPosts(response.data);
			} catch (error) {
				console.error('Error fetching popular posts:', error);
			}
		};

		fetchRecentPosts();
		fetchTrendingPosts();
		fetchPopularPosts();
	}, []);

	const navigateToLogin = () => {
		if (i18n.language === "en") {
			navigate(LOGIN_URL);
		} else {
			navigate(LOGIN_URL_PL);
		}
	}

	return (
		<TemplatePage>
			<div className="flex flex-col w-full justify-center elements-center mx-auto pt-24 pb-16 bg-gradient-to-r from-[rgba(224,227,238,0.42)] to-[rgba(207,214,229,0.37)] dark:from-[rgba(52,58,114,0.5)] dark:to-[rgba(29,58,97,0.61)] backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center">
				<div className="flex flex-col sm:flex-row w-full max-w-5xl mx-auto items-center justify-center mt-20">
					<div className="flex flex-col w-full items-center justify-center select-none h-full mt-32 sm:mt-0 hover:scale-100 sm:hover:scale-105 hover:opacity-75 transition-all duration-200 ease-linear">
						<h1 className="text-5xl font-bold text-center px-2">{t("main_page.title")}</h1>
						<p className="text-xl text-center mt-3 px-2">{t("main_page.description")}</p>
					</div>
					<div className="flex flex-col w-full items-center justify-center select-none mt-12 sm:mt-0 hover:scale-100 sm:hover:scale-105 transition-all duration-200 ease-linear">
						<img
							src="/blog-app/assets/undraw_code_thinking_1jeh.svg"
							alt="code_thinking"
							draggable="false"
							className="w-72 drop-shadow-md dark:drop-shadow-light object-cover px-2"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8 select-none">
					<div className="relative text-center inline-block px-5 py-2 text-xl font-medium text-white rounded-lg shadow-lg select-none mt-8 sm:mt-0 transition-all duration-200 ease-linear cursor-pointer"
						onClick={() => navigateToLogin()}
					>
						<span className="relative z-10 pointer-events-none">{t("main_page.begin_now")}</span>
						<span className="absolute inset-0 bg-gradient-to-t from-blue-500 to-purple-500 opacity-70 hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-12 mb-8 select-none">
					<h1 className="text-3xl font-bold text-center hover:scale-105 mb-12 transition-all duration-200 ease-linear px-2">
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
			<div className="flex flex-col w-full justify-center elements-center mx-auto pt-24 pb-16 bg-transparent backdrop-blur-3xl transition-all duration-300 ease-in-out transform text-center">
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.recent_posts")}</h1>
					{recentPosts.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
							{recentPosts.map((post, index) => (
								<div key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md mx-4 my-2 sm:my-4">
									<h2 className="text-xl font-bold">{post.title}</h2>
									<p className="mt-2 text-gray-600 dark:text-gray-400">{post.description}</p>
									<a href={`/blog-app/posts/${post.slug}`} className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Read More</a>
								</div>
							))}
						</div>
					) : (
						<p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mt-4">{t("main_page.no_posts")}</p>
					)}
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.trending_posts")}</h1>
					{trendingPosts.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
							{trendingPosts.map((post, index) => (
								<div key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md mx-4 my-2 sm:my-4">
									<h2 className="text-xl font-bold">{post.title}</h2>
									<p className="mt-2 text-gray-600 dark:text-gray-400">{post.description}</p>
									<a href={`/blog-app/posts/${post.slug}`} className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Read More</a>
								</div>
							))}
						</div>
					) : (
						<p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mt-4">{t("main_page.no_posts")}</p>
					)}
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.popular_posts")}</h1>
					{popularPosts.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
							{popularPosts.map((post, index) => (
								<div key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md mx-4 my-2 sm:my-4">
									<h2 className="text-xl font-bold">{post.title}</h2>
									<p className="mt-2 text-gray-600 dark:text-gray-400">{post.description}</p>
									<a href={`/blog-app/posts/${post.slug}`} className="text-blue-500 dark:text-blue-400 mt-4 inline-block">Read More</a>
								</div>
							))}
						</div>
					) : (
						<p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mt-4">{t("main_page.no_posts")}</p>
					)}
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.community_feedback")}</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md mx-4 my-2 sm:my-4">
								<p className="text-lg font-semibold">{testimonial.user}</p>
								<p className="mt-2 text-gray-600 dark:text-gray-400">{testimonial.feedback}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.featured_developers")}</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
						{developers.map((developer, index) => (
							<div key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md text-center mx-4 my-2 sm:my-4">
								{developer.avatar ? (
									<img
										src={developer.avatar}
										alt={developer.name}
										className="rounded-full w-24 h-24 mx-auto"
									/>
								) : (
									<div className="rounded-full w-24 h-24 mx-auto flex items-center justify-center">
										{React.cloneElement(user, { className: "h-16 w-16 cursor-pointer" })}
									</div>
								)}
								<h2 className="mt-4 text-xl font-bold">{developer.name}</h2>
								<p className="mt-2 text-gray-600 dark:text-gray-400">{developer.description}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.top_contributors")}</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
						{contributors.map((contributor, index) => (
							<div key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md text-center mx-4 my-2 sm:my-4">
								{contributor.avatar ? (
									<img
										src={contributor.avatar}
										alt={contributor.name}
										className="rounded-full w-24 h-24 mx-auto"
									/>
								) : (
									<div className="rounded-full w-24 h-24 mx-auto flex items-center justify-center">
										{React.cloneElement(user, { className: "h-16 w-16 cursor-pointer" })}
									</div>
								)}
								<h2 className="mt-4 text-xl font-bold">{contributor.name}</h2>
								<p className="mt-2 text-gray-600 dark:text-gray-400">Contributed {contributor.posts} blog posts</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.browse_by_tags")}</h1>
					<div className="flex flex-wrap gap-1 justify-center">
						{tags.map((tag, index) => (
							<a href={`/blog-app/tags/${tag.slug}`} key={index} className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 px-4 py-2 rounded-lg  mx-2 my-1 sm:my-2">
								{tag.name}
							</a>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full max-w-6xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.developer_poll.title")}</h1>
					<div className="bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-800/[.8] dark:to-gray-900/[.8] transition-all duration-200 opacity-90 hover:opacity-100 p-4 rounded-lg shadow-md text-center mx-4 my-2 sm:my-4">
						<h2 className="text-xl font-semibold">{t("main_page.developer_poll.question")}</h2>
						<div className="mt-4">
							{[
								t("main_page.developer_poll.options.option_1"),
								t("main_page.developer_poll.options.option_2"),
								t("main_page.developer_poll.options.option_3"),
								t("main_page.developer_poll.options.option_4"),
								t("main_page.developer_poll.options.option_5"),
								t("main_page.developer_poll.options.option_6"),
								t("main_page.developer_poll.options.option_7"),
							].map((option, index) => (
								<button key={index} className="bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white px-4 py-2 rounded-lg mx-2 my-2">
									{option}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full max-w-4xl items-center justify-center mx-auto mt-24 mb-8">
					<h1 className="text-3xl font-bold text-center mb-8 select-none px-2 hover:scale-105 transition duration-200">{t("main_page.subscribe_to_newsletter")}</h1>
					<form className="w-full max-w-lg mx-auto bg-transparent px-2">
						<input
							type="email"
							placeholder={t("main_page.newsletter_enter_email")}
							className="w-full p-2 mb-4 text-black dark:text-white bg-gradient-to-bl from-slate-100/[.8] to-slate-200/[.8] dark:from-gray-900/[.85] dark:to-gray-950/[.85] transition-all duration-200 opacity-90 hover:opacity-100 rounded-lg outline-none hover:outline-none cursor-text"
							readOnly={false}
						/>
						<button
							type="submit"
							className="bg-blue-600/[.8] hover:bg-blue-600 transition-all duration-200 text-white p-2 w-full rounded-lg">
							{t("main_page.subscribe")}
						</button>
					</form>
				</div>
			</div>
		</TemplatePage>
	);
};

export default MainPage;
