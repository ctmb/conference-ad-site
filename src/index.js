import React from "react";
import {render} from "react-dom";
import Tour from "./components/tour.jsx";
import Speakers from "./components/speakers.jsx";
import Agenda from "./components/venue.jsx";
import Sponsors from "./components/sponsors.jsx";
import Venue from "./components/venue.jsx";

//import our stylesheet so webpack puts it into the bundle
import "./css/main.css";

//replace the JSX here with a Router configuration
import {Router, Route, IndexRoute, hashHistory} from "react-router";
//from the react router module (already a dependency in package.json)
var router = (
    <Router history={hashHistory}>
        <Route path="/" component={Tour}>
            <IndexRoute component={Speakers}></IndexRoute>
            <Route path='/agenda' component={Agenda}></Route>
            <Route path='/venue' component={Venue}></Route>
            <Route path='/sponsors' component={Sponsors}></Route>
        </Route>
    </Router>
);
render(router, document.getElementById("tour"));