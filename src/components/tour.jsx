import React from "react";
import ReactDOM from "react-dom";

import "whatwg-fetch";

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="./index.html">Overview</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem>Speakers</NavItem>
                            <NavItem>Agenda</NavItem>
                            <NavItem>Venue</NavItem>
                            <NavItem>Sponsors</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}