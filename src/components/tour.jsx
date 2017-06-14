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
                        <a href="./index.html">Alpine Castle</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={evt => this.setState({clicked: "foyer"})}>Tour</NavItem>
                            <NavDropdown eventKey={2} title="Events" id="basic-nav-dropdown">
                                <MenuItem eventKey={2.1}>Weddings</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={2.2}>Family Reunions</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={3} title="Rooms" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} onClick={this.handleClick.bind(this)}>Foyer</MenuItem>
                                <MenuItem eventKey={3.2} onClick={this.handleClick.bind(this)}>Deck</MenuItem>
                                <MenuItem eventKey={3.3} onClick={this.handleClick.bind(this)}>Game</MenuItem>
                                <MenuItem eventKey={3.4} onClick={this.handleClick.bind(this)}>Study</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.5} onClick={this.handleClick.bind(this)}>Wine</MenuItem>
                                <MenuItem eventKey={3.6} onClick={this.handleClick.bind(this)}>Ballroom</MenuItem>
                                <MenuItem eventKey={3.7} onClick={this.handleClick.bind(this)}>Rock</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.8} onClick={this.handleClick.bind(this)}>Green</MenuItem>
                                <MenuItem eventKey={3.9} onClick={this.handleClick.bind(this)}>Master</MenuItem>
                                <MenuItem eventKey={3.10} onClick={this.handleClick.bind(this)}>North</MenuItem>
                                <MenuItem eventKey={3.11} onClick={this.handleClick.bind(this)}>South</MenuItem>
                                <MenuItem eventKey={3.12} onClick={this.handleClick.bind(this)}>Paris</MenuItem>
                            </NavDropdown>
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