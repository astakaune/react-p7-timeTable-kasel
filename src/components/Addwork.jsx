import { useState } from "react";
import { Card, Form, Button, FloatingLabel } from "react-bootstrap";
import Companies from "./Companies";
import Services from "./Services";

function Addwork(props) {
	const [workData, setWorkData] = useState({
		date: "",
		company: "",
		service: "",
		description: "",
		startTime: "",
		endTime: "",
	});

	const handleChange = (e) => {
		setWorkData({
			...workData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setWorks(workData);
	};

	return (
		<Card>
			<Card.Header><h3>Add task</h3></Card.Header>
			<Card.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Date</Form.Label>
						<Form.Control type="date" name="date" onChange={handleChange} value={workData.date}/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel className="mb-3" label="Select company">
						<Form.Select  name="company" aria-label="Floating label select example" onChange={handleChange} value={workData.company}>
							{/* <option>...</option> */}
							<Companies />
						</Form.Select>
					</FloatingLabel>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel className="mb-3" label="Select service">
						<Form.Select  name="service" aria-label="Floating label select example" onChange={handleChange} value={workData.service}>
							{/* <option>....</option> */}
							<Services />
						</Form.Select>
					</FloatingLabel>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
					<FloatingLabel label="Task description">
						<Form.Control style={{ height: "100px" }} name="description" as="textarea" placeholder="Leave a comment here" onChange={handleChange} value={workData.description} />
					</FloatingLabel>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>From:</Form.Label>
						<Form.Control type="time" name="startTime" onChange={handleChange} value={workData.startTime} />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Untill:</Form.Label>
						<Form.Control type="time" name="endTime"  onChange={handleChange} value={workData.endTime}/>
					</Form.Group>

					<Form.Group className="mb-3">
					<Button  type="submit" className="button-css btn btn-success">
						Save
					</Button>
					</Form.Group>

				</Form>
			</Card.Body>
		</Card>
	);
}

export default Addwork;
