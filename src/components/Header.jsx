import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home"><h2>TimeTable app</h2></Navbar.Brand>
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						<a href="https://https://github.com/astakaune/react-p7-timeTable-kasel" target="_blank" rel="noreferrer">
							Github
						</a>{" "}
						KaunAsta
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
