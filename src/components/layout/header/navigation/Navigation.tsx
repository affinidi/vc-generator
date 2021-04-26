import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { routes } from 'constants/routes';
import 'components/layout/header/navigation/Navigation.scss';
import AffinidiLogo from 'assets/images/affinidi-logo.png';

const LayoutHeaderNavigation = () => {
	const [showNavbar, setShowNavbar] = useState<boolean>(false);
	return (
		<Navbar
			expand="lg"
			onToggle={() => setShowNavbar(!showNavbar)}
			expanded={false}
			className="bg-orange"
		>
			<Container>
				<NavbarBrand>
					<Link to={routes.ROOT}>
						<img src={AffinidiLogo} alt="logo" width="40px" />
					</Link>
				</NavbarBrand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse className={showNavbar ? 'show' : ''}>
					<Nav className="justify-content-end">
						<Nav.Item>
							<Nav.Link href={routes.ROOT}>Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								href={routes.VC_TYPE_DETAIL}
								className="user-logout ml-24"
							>
								VC type list detail
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default LayoutHeaderNavigation;
