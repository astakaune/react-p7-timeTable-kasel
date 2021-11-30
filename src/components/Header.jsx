import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Header = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">TimeTable app</Navbar.Brand>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>BIT React praktika</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
