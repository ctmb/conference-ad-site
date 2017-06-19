import React from "react";

import {Carousel} from "react-bootstrap";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                {this.state}
                <h1>Speakers</h1>
            </div>
        );
    }
}