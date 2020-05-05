import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import UserContext from "./usercontext"
import Logout from "./logout"

const TopNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {loggeduser} = useContext(UserContext)


  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/main">HOME</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/add">Add a new plant!</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://plants.usda.gov/java/">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/graph">Graph my plants!</NavLink>
            </NavItem>
            
          </Nav>
          <Nav navbar>
          <NavbarText>Signed in as {loggeduser.firstName} {loggeduser.lastName}    |      </NavbarText>
          <NavItem>
              <NavLink href="">Edit My Account    |      </NavLink>
          </NavItem>
          <NavItem>
              <Logout/>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNavbar;