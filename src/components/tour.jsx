import React from "react";
import ReactDOM from "react-dom";

import "whatwg-fetch";

import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from "react-bootstrap";
import App from "./app.jsx";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

 initMap() {
        var uluru = {lat: 32.828957, lng: -116.761103};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    render() {

        return (
            <div>
                
                <link rel="icon" href="page-icon.png"/>
                <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lato|Libre+Franklin:300|Raleway"/>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>

            
                <link rel="stylesheet" href="./src/css/homepage.css"/>
                <link rel="stylesheet" href="./src/css/footer.css"/>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
                
                <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

                <script src="https://pupunzi.com/mb.components/mb.YTPlayer/demo/inc/jquery.mb.YTPlayer.js"></script>
                <script src="./homepage.js"></script>
                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

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
                    <section class="content-section video-section" id="video-area">
                        <div class="pattern-overlay">
                            <a class="player" data-property="{videoURL:'https://www.youtube.com/watch?v=FpjfmgPqRe0', containment:'.video-section', quality:'small', autoPlay:true, mute:true, opacity:1, onReady:function(player){document.getElementById('video-area').style.backgroundColor='#000';}}"></a>
                            <header>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <h1 id="header-title">Cloud Security Alliance</h1>
                                            <h2 id="header-description">September Seattle Chapter Conference</h2>
                                            <a class="button-link" href="./tour.html">Meet the Speakers</a>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </section>
                    <section id="castle-section">
                        <div class="container">
                            <div class="row">
                                <div id="castle" class="col-xs-12 col-sm-4 col-sm-push-8"></div>
                                <div id="castle-content" class="col-xs-12 col-sm-8 col-sm-pull-4">
                                    <h3>Overview Paragraph 1</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat labore ipsam, voluptate perspiciatis illum quisquam quasi consectetur quos? Possimus itaque ab est tenetur sequi maxime porro, modi blanditiis, magni molestiae nemo vitae a eos voluptatibus ad esse consequatur, placeat quos. Sequi sit sed est, aut vero cum at suscipit id, ea, error quasi. Ipsam ea aliquid ratione accusantium explicabo adipisci non perspiciatis, nisi veritatis corporis cumque dignissimos nam, modi totam. Sit vel tenetur eveniet repellendus minus quia voluptates doloribus delectus, temporibus dolor laudantium modi illo, possimus veritatis architecto voluptatibus ad tempore non sint provident consectetur! Perferendis nemo voluptatibus neque unde.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="wedding-section">
                        <div class="container">
                            <div class="row">
                                <div id="wedding" class="col-xs-12 col-sm-4 flex-lg-last"></div>
                                <div id="wedding-content" class="col-xs-12 col-sm-8 flex-lg-first">
                                    <h3>Overview Paragraph 2</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat labore ipsam, voluptate perspiciatis illum quisquam quasi consectetur quos? Possimus itaque ab est tenetur sequi maxime porro, modi blanditiis, magni molestiae nemo vitae a eos voluptatibus ad esse consequatur, placeat quos. Sequi sit sed est, aut vero cum at suscipit id, ea, error quasi. Ipsam ea aliquid ratione accusantium explicabo adipisci non perspiciatis, nisi veritatis corporis cumque dignissimos nam, modi totam. Sit vel tenetur eveniet repellendus minus quia voluptates doloribus delectus, temporibus dolor laudantium modi illo, possimus veritatis architecto voluptatibus ad tempore non sint provident consectetur! Perferendis nemo voluptatibus neque unde.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                        <footer class="footer-distributed">
                            <div class="footer-left">
                                <h3>CSA<span>Seattle</span></h3>
                                <p class="footer-links">
                                    <a href="#">Home</a>
                                    ·
                                    <a href="#">Contact</a>
                                </p>
                                <div>
                                    <p><span>2808 Eltinge Pl</span></p>
                                    <p><span>Alpine, CA 91901</span></p>
                                </div>
                                <div>
                                    <p>+1 555 123456</p>
                                </div>
                                <div>
                                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                                </div>
                                <p class="footer-company-name">CSA Seattle Chapter &copy; 2017</p>
                            </div>
                            <div class="footer-center">
                                <div id="map"></div>

                            </div>
                            <div class="footer-right">
                                <p class="footer-company-about">
                                    <span>About CSA</span>
                                    The Cloud Security Alliance (CSA) is the world’s leading organization dedicated to defining and raising awareness of best practices to help ensure a secure cloud computing environment. CSA harnesses the subject matter expertise of industry practitioners, associations, governments, and its corporate and individual members to offer cloud security-specific research, education, certification, events and products.	</p>
                                <div class="footer-icons">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                        </footer>

                </div>
            </div>
        );
    }
}