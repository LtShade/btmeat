import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Directory from "./DirectoryComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import LogIn from "./LogInComponent";

const mapStateToProps = (state) => {
	return {
		directoryResults: state.direcotryResults,
	};
};

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: null,
		};
	}

	render() {
		return (
			<div className="px-3">
				<Header />
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames="page"
						timeout={300}
					>
						<Switch>
							<Route path="/home" render={() => <Home />}></Route>
							<Route path="/directory" render={() => <Directory />}></Route>
							<Route path="/login" render={() => <LogIn />}></Route>
							<Redirect to="/home" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export default withRouter(Main);
