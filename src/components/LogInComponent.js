import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import login from "../controllers/requests";

class LogIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: null,
			password: null,
			isLoaded: false,
			items: null,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.sendLogin = this.handleSubmit.bind(this);
	}

	componentDidMount() {}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit = (event) => {
		login();
		alert("Test");
	};

	render() {
		const { error, isLoaded, items } = this.state;
		if (isLoaded) {
			console.log(this.state);
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<Form onSubmit={this.handleSubmit}>
							<Form.Group className="mb-3" controlId="formUsername">
								<Form.Label>Username</Form.Label>
								<Form.Control
									type="username"
									name="username"
									placeholder="Who you be?"
									value={this.state.username}
									onChange={this.handleInputChange}
								/>
								<Form.Text className="text-muted">
									Contact the administrator if you do not have login
									credentials.
								</Form.Text>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default LogIn;
