import Service from "./Service";
import services from "../data/services";

function Services() {
	return (
		<>
			{/* <option>-Select service-</option> */}
			{services.map((obj) => (
				<Service key={obj.id} service={obj.service} />
			))}
		</>
	);
}

export default Services;
