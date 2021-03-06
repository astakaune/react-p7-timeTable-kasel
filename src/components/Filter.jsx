import React, { useEffect, useState } from "react";
import { Card, Form, Button, FloatingLabel, FormGroup } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";

const Filter = (props) => {
	const [filter, setFilter] = useState({});

	const handleFilter = (e) => {
		//konst handleChange
		setFilter({
			...filter,
			[e.target.name]: e.target.value,
		});
	};
	// console.log(filter);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	props.handleFilter(filter);
	// };

	const resetFilterHandler = () => {
		setFilter({});
	};

	useEffect(() => {
		props.handleFilter(filter);
	}, [filter]);

	return (
		<div className="filters">
			<Card>
				<Card.Body>
					{/* <Form onSubmit={handleSubmit}> */}
					<Form>
						<FormGroup>
							<FloatingLabel className="mb-3" label="Companies">
								<Form.Select defaultValue="Company" onChange={handleFilter} name="company" aria-label="Floating label select example">
									<Companies />
								</Form.Select>
							</FloatingLabel>
						</FormGroup>

						<FormGroup>
							<FloatingLabel label="Services">
								<Form.Select onChange={handleFilter} name="service" aria-label="Floating label select example">
									<Services />
								</Form.Select>
							</FloatingLabel>
						</FormGroup>

						<Form.Group>
							{/* <Button type="submit" className="button-css btn btn-warning">
								Filter
							</Button> */}
							{Object.keys(filter).length !== 0 && (
								<Button type="reset" className="button-css btn btn-warning" onClick={resetFilterHandler}>
									Reset
								</Button>
							)}
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Filter;
