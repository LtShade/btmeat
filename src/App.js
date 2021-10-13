import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";

import "bootstrap";
import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Main />
				</div>
			</BrowserRouter>
		);
	}
}

//json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000
export default App;
