import React, { useState, useEffect, useMemo } from "react";
import { Button, Card } from "react-bootstrap";
import Addwork from "./Addwork";
import Filter from "./Filter";
import WorksTable from "./WorksTable";
import * as services from "../services";

export const WorkContext = React.createContext({
	// workID: '',
	// setWorkID: () => {
	// }
})

function Works(props) {
	const [workID, setWorkID] = useState('');
	const [addWork, setAddWork] = useState(false);
	const [works, setWorks] = useState([]); //filterCriteria
	const [filteredWorks, setFilteredWorks] = useState([]); //filteredList
	const value = useMemo(()=> ({
			workID, setWorkID
		}), [workID])

	const addWorkHandler = () => {
		//destytojo criteriaHandler
		setAddWork(true);
	};

	const closeWorkHandler = () => {
		//dest. cancelAddWorkHandler
		setAddWork(false);
	};

	const handleAddWork = (data) => {
		//dest onSaveWorksData
		services.addWork(data); //servises, kvieciame aprasyta funkcija addWork ir i ja paduodame duomenis data
		// setWorksList((prevData) => { //callback state setinimui
		// 	return [data, ...prevData]; //returninam kaip masyva, pridedam data prie ankstesniu elementu. reikalinga duomenu papildymui
		// });
		closeWorkHandler();
		props.status(true);
		console.log(data)
		// console.log(worksList);
	};

	const handleFilter = (criteria) => {
		//items - filterCriteria 	//dest criteriaHandler
		const filteredItems = works.filter((item) => {
			return Object.keys(criteria).every((filter) => {
				return criteria[filter] === item[filter];
			});
		});
		setFilteredWorks(filteredItems); //dest setFilterCriteria(criteria)
		console.log("filteredItems", filteredItems);
	};

	useEffect(() => {
		services.getAllWorks(setWorks);
	}, []);

	console.log(works);
	console.log(workID);
	return (
		<>
			<Card>
				<Card.Header>
					{addWork ? (
						<Button className="button-css btn btn-danger" onClick={closeWorkHandler}>
							Cancel
						</Button>
					) : (
						<Button
							className="button-css btn btn-info"
							onClick={addWorkHandler}
							// onClick={() => {
							// 	setAddWork(true);
							// }}
						>
							Add Task
						</Button>
					)}
				</Card.Header>

				<Card.Header>{addWork && <Addwork setWorks={handleAddWork} />}</Card.Header>

				<Card.Header>
					<h3>Task list:</h3>
				</Card.Header>

				<Card.Header>
					<Filter handleFilter={handleFilter} />
				</Card.Header>

				<Card.Body>
					<WorkContext.Provider value={value}>
					{/* <WorksTable data={(Object.keys(filterCriteria).length)?filteredItems(filterCriteria):timesList}/> destytojo */}
					<WorksTable data={filteredWorks.length ? filteredWorks : works} />
					</WorkContext.Provider>
				</Card.Body>
			</Card>
		</>
	);
}

export default Works;
