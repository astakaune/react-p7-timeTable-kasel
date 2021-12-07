import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";
import { useState } from "react";

const Filter = (props) => {
	const [filter, setFilter] = useState({});

	const handleFilter = (e) => {
		setFilter({
			...filter,
			[e.target.name]: e.target.value,
		});
	};
	// console.log(filter);

	const submitFilter = (e) => {
		e.preventDefault();
		props.setFilter(filter);
	};
	return (
		<Card>
			<Card.Body>
				<Form onSubmit={submitFilter}>
					<Form.Group>
						<Form.Select name="company" aria-label="Floating label select example" onChange={handleFilter}>
							<option selected disabled>
								-Select company-
							</option>
							<Companies />
						</Form.Select>
					</Form.Group>

					<Form.Group className="mt-2" controlId="formBasicEmail">
						<Form.Select name="service" aria-label="Floating label select example" onChange={handleFilter}>
							<option selected disabled>
								-Select service-
							</option>
							<Services />
						</Form.Select>
					</Form.Group>

					<Form.Group className="mt-2" controlId="formBasicEmail">
						<Button type="submit" className="button-css btn btn-warning">
							Filter
						</Button>
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default Filter;
