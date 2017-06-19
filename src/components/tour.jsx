import React from "react";
import {Link, IndexLink} from "react-router";
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
                            <NavItem>
                                <IndexLink to="/" activeClassName="active">
                                    Speakers
                                </IndexLink>
                            </NavItem>
                            <NavItem>
                                <Link to="/agenda" activeClassName="active">
                                    Agenda
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/venue" activeClassName="active">
                                    Venue
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/sponsors" activeClassName="active">
                                    Sponsors
                                </Link>                                
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}