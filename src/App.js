import "./App.css";
import Header from "./components/Header";
import Addwork from "./components/Addwork";
import Filter from "./components/Filter";
import Works from "./components/Works";
import { useEffect, useState } from "react";
import { Alert } from "react";

function App() {
	const [alertMessage, setAlertMessage] = useState(false);

	const setAlertMessageHandler = (status) => {
		if (status) {
			setAlertMessage("Task was added");
		}
		// console.log(status);
	};

	useEffect(() => {
		setTimeout(() => {
			setAlertMessage("");
		}, 5000);
	}, [alertMessage]);

	return (
		<div className="Container">
			<Header />
			{alertMessage && <Alert variant="success">{alertMessage}</Alert>}
			<Addwork />
			<Filter />
			<Works />
			<Works status={setAlertMessageHandler} />
		</div>
	);
}

export default App;
