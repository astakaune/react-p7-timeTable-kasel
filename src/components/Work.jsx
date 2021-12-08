import React, { useContext } from "react";
// import { Form, Button } from "react-bootstrap";
import {Pencil, Trash } from "react-bootstrap-icons";
import {WorkContext} from "./Works";

function Work(props) {
	// function Work({ work, deleteW }) { Konstantino
	const { workID, setWorkID } = useContext(WorkContext);

	const diff = (start, end) => {
		// start = props.timeFrom;
		// end = props.timeTo;
		start = start.split(":");
		end = end.split(":");
		const startDate = new Date(0, 0, 0, start[0], start[1], 0);
		const endDate = new Date(0, 0, 0, end[0], end[1], 0);
		let diff = endDate.getTime() - startDate.getTime();
		let hours = Math.floor(diff / 1000 / 60 / 60);
		diff -= hours * 1000 * 60 * 60;
		const minutes = Math.floor(diff / 1000 / 60);
		// console.log(startDate);
		return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
	};

	const getIdHandler = () => {
		props.delete(props.id);
	};

	const getIDUpdateHandler = () => {
		setWorkID(props.id);
	};
	return (
		<tr>
			<td>{props.date}</td>
			<td>{props.company}</td>
			<td>{props.service}</td>
			<td>{props.description}</td>
			<td>{diff(props.startTime, props.endTime)}</td>
			<td>
				<a href="#/" onCLick={getIDUpdateHandler}>
					<Pencil />
				</a>
			</td>
			<td>
				<a href="#/" onCLick={getIdHandler}>
					<Trash />
				</a>
			</td>

			{/* <td>
				<Form.Group>
					<Button type="submit" className="button-css btn btn-secondary" onCLick={getIDUpdateHandler}>
						<Pencil />
						Edit
					</Button>
				</Form.Group>
			</td>
			<td>
				<Form.Group>
					<Button type="submit" className="button-css btn btn-warning" onClick={getIdHandler}>
						Delete
					</Button>
				</Form.Group>
			</td> */}
		</tr>
	);
}

export default Work;
