import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

function Header(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar color="dark" dark fixed="top" expand="sm">
        <NavbarBrand href="/">
          <span className="text-warning">{props.brand}</span>
        </NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={Link} to="/inventory">
                Inventory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/shipments">
                Shipments
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
