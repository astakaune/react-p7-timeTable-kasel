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
					{props.data.map((work, index) => (
						<Work
							id={work.id}
							date={work.date}
							company={work.company}
							service={work.service}
							description={work.description}
							startTime={work.startTime}
							endTime={work.endTime}
							delete={deleteItemHandler}
						/>
					))}
				</tbody>
			</Table>
		</Card.Body>
	);
};

export default WorksTable;
