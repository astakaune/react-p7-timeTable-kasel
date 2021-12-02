import Addwork from "./Addwork";
import { Card, Table, Button } from "react-bootstrap";
import React, { useState } from "react";
import Work from "./Work";

const Works = (props) => {
	const [addWork, setAddWork] = useState(false); //formos pridejimas
	const [works, setWorks] = useState([]);

	const addWorkHandler = () => {
		setAddWork(true);
	};

	const closeWorkHandler = () => {
		setAddWork(false);
	};

	const handleAddWork = (data) => {
		//state  lift up
		setWorks([...works, data]);
		closeWorkHandler();
		props.status(true);
		// console.log(data);
	};
	console.log(works);

	return (
		<>
			{/* //idedame forma, patikrine state */}
			{addWork && <Addwork setWorks={handleAddWork} />}
			{/* 1 budas auksciau, 2budas: zemiau */}
			{/* {addWork ? <Addwork /> : false} */}
			{/* <Filter/> */}
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
							{works.map((work) => (
								<Work key={work.i} date={work.date} company={work.company} service={work.service} description={work.description} startTime={work.startTime} endTime={work.endTime}/>
							))}
						</tbody>
					</Table>
				</Card.Body>
			</Card>
		</>
	);
};

export default Works;
