import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

const mapStateToProps = (state) => {
	return {
		directoryResults: state.direcotryResults,
	};
};

class Main extends Component {
	render() {
		return (
			<div className="px-3">
				<Header />
				<Home />

				{/*
                <div className="container">
					<div className="row">
						<div className="col">


                        </div>
					</div>
				</div> 				
                 */}
			</div>
		);
	}
}

export default withRouter(Main);
