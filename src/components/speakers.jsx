import React from "react";

import {Carousel} from "react-bootstrap";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
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
            <div>
                {this.state}
                <h1>Speakers</h1>
            </div>
        );
    }
}