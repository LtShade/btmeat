import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modTag: null,
			name: null,
			type: null,
			results: [{ name: "One" }, { name: "Two" }, { name: "Three" }],
		};
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit = (event) => {
		alert(`Test: ${this.state.username}, ${this.state.password}`);
	};

	componentWillMount() {}

	componentDidMount() {}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col border py-3">
						<h3>Filters</h3>
						<Form onSubmit={this.handleSubmit}>
							<Form.Group className="mb-3" controlId="formModTag">
								<Form.Label>Mod Tag</Form.Label>
								<Form.Control
									type="filter"
									name="modTag"
									placeholder="Which Mod Tag?"
									value={this.state.modTag}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="filter"
									name="name"
									placeholder="Item Name"
									value={this.state.name}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="formType">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="filter"
									name="type"
									placeholder="Item Type"
									value={this.state.type}
									onChange={this.handleInputChange}
								/>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</div>
					<div className="col border py-3">
						<h3>Results</h3>
						<Results results={this.state.results} />
					</div>
				</div>
			</div>
		);
	}
}

function Results(props) {
	console.log(props);
	let listing = props.results.map((result) => {
		return <div key={result.name}>{result.name}</div>;
	});
	return <>{listing}</>;
}

export default Directory;
