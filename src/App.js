import "./App.css";
import Header from "./components/Header";
import Addwork from "./components/Addwork";
import Filter from "./components/Filter";
import Works from "./components/Works";

function App() {
	return (
		<div className="Container">
			<Header />
      <Addwork/>
      <Filter/>
			<Works />
		</div>
	);
}

export default App;
