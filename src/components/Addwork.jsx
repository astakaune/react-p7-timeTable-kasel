import React from "react";
import { Card, Form, FloatingLabel } from "react-bootstrap";
import Services from "./Services";
import Companies from "./Companies";

const Addwork = () => {
	return (
		<>
			<Card>
				<Card.Header>Add completed task:</Card.Header>
				<Card.Body>
					<Form className="bg-light border">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label className="mt-1">Choose date:</Form.Label>
							{/* <Form.Control type="date" onChange={handleChange} value={items.date} /> */}
							<Form.Control type="date" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Select aria-label="Floating label select example">
								<Companies />
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Select aria-label="Floating label select example">
								<Services />
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<>
								<FloatingLabel controlId="floatingTextarea2" label="Performed tasks description">
									<Form.Control as="textarea" placeholder="Performed tasks description" style={{ height: "100px" }} />
								</FloatingLabel>
							</>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>From:</Form.Label>
							<Form.Control type="time" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Untill:</Form.Label>
							<Form.Control type="time" />
						</Form.Group>
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};

export default Addwork;
