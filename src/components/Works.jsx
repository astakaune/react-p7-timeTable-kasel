import React from "react";
import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import Addwork from "./Addwork";
import Work from "./Work";
import Filter from "./Filter";

function Works(props) {
	const [addWork, setAddWork] = useState(false);
	const [works, setWorks] = useState([]);
	const [filteredWorks, setFilteredWorks] = useState([]);

	const addWorkHandler = () => {
		setAddWork(true);
	};

	const closeFormHandler = () => {
		setAddWork(false);
	};

	const handleAddWork = (data) => {
		setWorks([...works, data]);
		closeFormHandler();
		props.status(true);
	};

	const handleFilter = (items) => {
		const filteredItems = works.filter((item) => {
			return Object.keys(items).every((filter) => {
				return items[filter] === item[filter];
			});
		});
		setFilteredWorks(filteredItems);
		console.log(filteredItems);
	};

	return (
		<>
			{addWork && <Addwork setWorks={handleAddWork} />}
			<Card>
				<Card.Header>
					{addWork ? (
						<Button className="button-css btn btn-danger" onClick={closeFormHandler}>
							Cancel
						</Button>
					) : (
						<Button className="button-css btn btn-info" onClick={addWorkHandler}>
							Add Task
						</Button>
					)}
				</Card.Header>

				<Card.Header>
					<h3>Task list:</h3>
				</Card.Header>

				<Card.Body>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Date</th>
								<th>Company</th>
								<th>Service</th>
								<th>Description</th>
								<th>Duration</th>
							</tr>
						</thead>
						<tbody>
							{filteredWorks.length
								? filteredWorks.map((work, i) => (
										<Work
											key={work.i}
											date={work.date}
											company={work.company}
											service={work.service}
											description={work.description}
											startTime={work.startTime}
											endTime={work.endTime}
										/>
								  ))
								: works.map((work) => (
										<Work
											key={work.i}
											date={work.date}
											company={work.company}
											service={work.service}
											description={work.description}
											startTime={work.startTime}
											endTime={work.endTime}
										/>
								  ))}
						</tbody>
					</Table>
				</Card.Body>

				<Card.Header>
					<Filter setFilter={handleFilter} />
				</Card.Header>
				
			</Card>
		</>
	);
}

export default Works;
