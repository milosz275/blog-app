// eslint-disable-next-line no-unused-vars
import React from "react";
import TemplatePage from "../pages/TemplatePage";

const MainPage = () => {
	return (
		<TemplatePage>
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-5xl font-bold text-center">Welcome to the Blog App</h1>
				<p className="text-lg text-center mt-4">This is the main page of the website.</p>
			</div>
		</TemplatePage>
	);
}

export default MainPage;
