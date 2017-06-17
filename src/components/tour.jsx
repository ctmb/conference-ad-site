import React from "react";

import "whatwg-fetch";

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import App from "./app.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props);

        //initialize the component state to an empty ID
        this.state = {}

    }

    handleClick(evt) {
        this.setState({clicked: evt.target.innerHTML.toLowerCase()})
    }

    render() {

        var app = <App clickedRoom={'foyer'} navClicked={false}/>

        if (this.state.clicked) {
            app = <App clickedRoom={this.state.clicked} navClicked={true}/>
        }

        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="./index.html">Overview</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem>Speakers</NavItem>
                            <NavItem>Agenda</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    {app}
                </div>
            </div>
        );
    }
}