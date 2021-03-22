import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Navbar, NavbarBrand} from 'react-bootstrap'
import {routes} from 'constants/routes'
import 'components/layout/header/navigation/Navigation.scss'
import AffinidiLogo from 'assets/images/affinidi-logo.png';

const LayoutHeaderNavigation = () => {

  return (
    <Navbar expand="lg"
            expanded={false}
            bg='light'
    >
      <Container>
        <NavbarBrand>
          <Link to={routes.ROOT}>
            <img src={AffinidiLogo} alt="logo" width="40px" />
          </Link>
        </NavbarBrand>
      </Container>
    </Navbar>
  )
}

export default LayoutHeaderNavigation
