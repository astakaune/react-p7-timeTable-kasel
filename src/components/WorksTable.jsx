import React from "react";
import { Card, Table } from "react-bootstrap";
import Work from "./Work";
import * as services from "../services";

const WorksTable = (props) => {
	const deleteItemHandler = (id) => {
		// console.log("lifted", id);
		services.deleteWork(id);
	};

	return (
		<Card.Body>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Date</th>
						<th>Company</th>
						<th>Service</th>
						<th>Description</th>
						<th>Duration</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((w, i) => (
						// <Work id={i.id} date={i.date} company={i.company} service={i.service} description={i.description} startTime={i.startTime} endTime={i.endTime} />
						<Work key={i} work={w} deleteW={deleteItemHandler} />
					))}
				</tbody>
			</Table>
		</Card.Body>
	);
};

export default WorksTable;
