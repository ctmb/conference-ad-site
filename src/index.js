import React from "react";
import {render} from "react-dom";
import App from "./components/app.jsx";
import Tour from "./components/tour.jsx";

//import our stylesheet so webpack puts it into the bundle
import "./css/main.css";
import "./css/homepage.css";
import "./css/footer.css";

//replace the JSX here with a Router configuration
import {Router, Route, IndexRoute, hashHistory} from "react-router";
//from the react router module (already a dependency in package.json)
var router = (
    <Router history={hashHistory}>
        <Route path="/" component={Tour}>
            <IndexRoute component={App}></IndexRoute>
        </Route>
    </Router>
);
render(router, document.getElementById("tour"));