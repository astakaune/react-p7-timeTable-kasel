import Company from "./Company";
import companies from "../data/companies";

function Companies() {
	return (
		<>
			{/* <option>Choose company</option> */}
			{companies.map((obj) => (
				<Company key={obj.id} company={obj.title} />
			))}
		</>
	);
}

export default Companies;
