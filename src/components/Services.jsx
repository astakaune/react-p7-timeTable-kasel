import Service from "./Service";
import services from "../data/services";

function Services() {
	return (
		<>
			<option>Choose service provided</option>
			{services.map((obj) => (
				<Service key={obj.id} service={obj.service} />
			))}
		</>
	);
}

export default Services;
