import Addwork from "./Addwork";
import { Card, Table, Button } from "react-bootstrap";
import React, { useState } from "react";

const Works = () => {
	const [addWork, setAddWork] = useState(false); //formos pridejimas

	const addWorkHandler = () => {
		setAddWork(true);
	};

	const closeWorkHandler = () => {
		setAddWork(false);
	};

	return (
		<>
			{/* //idedame forma, patikrine state */}
			{/* 1 budas: {addwork && <Addwork/>}. 2budas: zemiau*/}
			{addWork ? <Addwork /> : false}
			<Card>
				<Card.Header className="py-3">
					{addWork ? (
						<Button type="button" className="btn btn-danger" onClick={closeWorkHandler}>
							Delete Task
						</Button>
					) : (
						<Button type="button" className="btn btn-success" onClick={addWorkHandler}>
							Add Task
						</Button>
					)}
				</Card.Header>
				<Card.Header>
					<h3>Tasks List:</h3>
				</Card.Header>
				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Date</th>
								<th>Client</th>
								<th>Service</th>
								<th>Description</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	);
};

export default Works;
