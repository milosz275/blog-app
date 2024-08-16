import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage"
import DebugPage from "./pages/DebugPage"
import RedirectPage from "./pages/RedirectPage"
import * as urls from "./urls";

let docTitle = document.title;
window.onfocus = () => {
	document.title = docTitle;
};
window.onblur = () => {
	document.title = "Blog App";
};

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "Blog App",
		};
	}
	render() {
        return (React.createElement(
		"div",
		{ className: "App" },
		React.createElement(BrowserRouter, null,
		React.createElement(Routes, null,
		React.createElement(Route, { path: urls.ROOT_URL, element: React.createElement(MainPage, {}) }),
		React.createElement(Route, { path: urls.DEBUG_URL, element: React.createElement(DebugPage, {}) }),
		React.createElement(Route, { path: "*", element: React.createElement(RedirectPage, {}), })
		))));
	}
  }

export default App;
