import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Filter = () => {
	return (
		<>
			<Card>
				<Card.Body>
					<Form>
						<Form.Select aria-label="Floating label select example">
							<option>Open this select menu</option>
						</Form.Select>
						<Form.Select aria-label="Floating label select example">
							<option>Open this select menu</option>
						</Form.Select>
						<Button variant="primary">Filter</Button>{" "}
					</Form>
				</Card.Body>
			</Card>
		</>
	);
};

export default Filter;
