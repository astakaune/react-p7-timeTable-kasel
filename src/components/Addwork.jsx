import React from "react";
import { Card, Form, FloatingLabel } from "react-bootstrap";
import Services from "./Services";
import Companies from "./Companies";
import { useState } from "react";

const Addwork = (props) => {
	const [items, setItems] = useState({
		date: "",
		company: "",
		service: "",
		description: "",
		startTime: "",
		endTime: "",
	});

	const handleChange = (e) => {
		setItems({
			...items,
			[e.target.name]: e.target.value,
		});
		// console.log(e.target.value); value = reiksme
		// console.log(e.target.name); name = key
	};
	console.log(items);

	const handleSubmit = (e) => {
		e.preventdefault();
		props.setWorks(items);
	};

	return (
		<>
			<Card>
				<Card.Header>Add completed task:</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit} />
					<Form className="bg-light border">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="mt-1">Choose date:</Form.Label>
							<Form.Control type="date" name="date" onChange={handleChange} value={items.date} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Select aria-label="Floating label select example" type="select" name="company" onChange={handleChange} value={items.company}>
								<Companies />
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Select aria-label="Floating label select example" type="select" name="service" onChange={handleChange} value={items.service}>
								<Services />
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<FloatingLabel controlId="floatingTextarea2" label="Performed tasks description">
								<Form.Control
									as="textarea"
									placeholder="Performed tasks description"
									style={{ height: "100px" }}
									type="textarea"
									name="description"
									onChange={handleChange} //patrigerinam veiksma
									value={items.description} //atvaizduoja
								/>
							</FloatingLabel>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>From:</Form.Label>
							<Form.Control type="time" name="startTime" onChange={handleChange} value={items.startTime} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Untill:</Form.Label>
							<Form.Control type="time" name="endTime" onChange={handleChange} value={items.endTime} />
						</Form.Group>

						
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};

export default Addwork;
