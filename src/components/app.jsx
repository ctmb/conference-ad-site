import React from "react";

import {Carousel} from "react-bootstrap";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import Foyer from "./foyer.jsx";
import Deck from "./deck.jsx";
import Game from "./game.jsx";
import Study from "./study.jsx";
import Wine from "./wine.jsx";
import Ballroom from "./ballroom.jsx";

import Green from "./green.jsx";
import Master from "./master.jsx";
import North from "./north.jsx";
import Paris from "./paris.jsx";
import Rock from "./rock.jsx";
import South from "./south.jsx";


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: new Array,
            curRoom: {room: <Foyer/>,
                        name: "foyer"}
        }
    }

    handleClick(evt) {
        var variableName = evt.target.innerHTML.toLowerCase();
        this.setState({curRoom: this.getNewRoom(variableName)});
    }

    handleMapClick(event) {
        this.state.curRoom = this.getNewRoom(event.target.title);
        this.setState({curRoom: this.getNewRoom(event.target.title)});
    }

    getNewRoom(variableName) {
        for(var i = 0; i < this.state.rooms.length; i++) {
            if(variableName === this.state.rooms[i].name) {
                return this.state.rooms[i];
            }
        }
    }

    componentWillUpdate(nextProps, nextState) {
        var propsLookChanged = (JSON.stringify(this.props) !== JSON.stringify(nextProps));
        // if the last room that was clicked is not the same as the current clicked room,
        // or if the props seem the same BUT the new room is not the same as the current room (and we didn't just click a new room)
        if (propsLookChanged || !propsLookChanged && (!this.state.lastWasNavClick && nextProps.clickedRoom !== this.state.curRoom)) {
            this.state.lastClickedRoom = nextProps.clickedRoom;
            this.state.curRoom = this.getNewRoom(nextProps.clickedRoom);
            this.state.lastWasNavClick = true;
        } else {
            // this.state.curRoom will update automatically -- it's already in nextState
            nextState.lastWasNavClick = false;
        }
    }


    componentDidMount() {
        this.state.lastWasNavClick = true;

        var foyer = {room: <Foyer/>,
                        name: "foyer"};
        this.state.rooms.push(foyer);

        var deck  = {room: <Deck/>,
                    name:"deck"};
        this.state.rooms.push(deck);

        var game  = {room: <Game/>,
                    name:"game"};
        this.state.rooms.push(game);

        var study  = {room: <Study/>,
                    name:"study"};
        this.state.rooms.push(study);

        var wine  = {room: <Wine/>,
                    name:"wine"};
        this.state.rooms.push(wine);

        var ballroom  = {room: <Ballroom/>,
                    name:"ballroom"};
        this.state.rooms.push(ballroom);

        var green  = {room: <Green/>,
                    name:"green"};
        this.state.rooms.push(green);

        var master  = {room: <Master/>,
                    name:"master"};
        this.state.rooms.push(master);

        var north = {room: <North/>,
                    name:"north"};
        this.state.rooms.push(north);

        var paris = {room: <Paris/>,
                    name:"paris"};
        this.state.rooms.push(paris);

        var rock = {room: <Rock/>,
                    name:"rock"};
        this.state.rooms.push(rock);

        var south = {room: <South/>,
                    name:"south"};
        this.state.rooms.push(south);
    }

    render() {
        var curRoomName = this.state.curRoom.name;
        var imgSrcUrl = "../../info343project/castlepics/";
        var clickableMap;

        if (['foyer', 'paris', 'study', 'game', 'master'].includes(curRoomName)) {
            clickableMap =
                <div>
                    <img src={imgSrcUrl + curRoomName + '.png'} alt="Main Floor Map" useMap="#Map"  className="imgMap"/>
                    <map name="Map" id="Map">
                        <area onClick={this.handleMapClick.bind(this)} alt="Game Room" title="game" shape="poly" coords="463,8,465,129,568,135,567,93,600,96,602,9" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Foyer" title="foyer" shape="poly" coords="349,30,349,143,279,142,282,257,295,262,319,297,341,285,367,275,400,272,420,272,440,275,464,284,488,290,500,301,512,292,529,294,528,127,467,129,466,29" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Master Bedroom" title="master" shape="poly" coords="530,136,743,137,744,288,528,287" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Paris Bedroom" title="paris" shape="poly" coords="603,12,748,11,745,132,600,136" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Study" title="study" shape="poly" coords="272,284,275,267,293,275,317,295,322,299,338,294,349,286,366,281,380,277,399,273,415,274,441,276,464,284,479,292,489,300,498,303,506,296,512,293,521,293,524,292,519,406,509,424,491,444,472,458,454,464,428,470,402,472,372,472,338,463,311,442,294,418,288,338" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Deck" title="deck" shape="poly" coords="34,160,100,166,99,216,87,226,88,270,97,271,103,298,256,300,269,311,272,326,275,404,283,428,297,443,321,462,354,485,378,492,434,492,454,485,481,472,522,440,529,417,537,388,536,356,534,317,546,296,558,296,735,294,739,358,600,356,598,404,596,411,566,477,529,512,493,528,453,546,435,548,430,559,408,565,397,565,390,551,372,549,351,546,313,531,278,502,244,481,212,418,208,362,37,361" />
                    </map>
                </div>
        } else if(['north', 'south'].includes(curRoomName)) {
            clickableMap =
                <div>
                    <img src={imgSrcUrl + curRoomName + '.png'} alt="Top Floor Map" useMap="#Map"  className="imgMap"/>
                    <map name="Map" id="Map">
                        <area onClick={this.handleMapClick.bind(this)} alt="North Bedroom" title="north" shape="poly" coords="89,53,335,52,338,135,91,135" />
                        <area onClick={this.handleMapClick.bind(this)} alt="South Bedroom" title="south" shape="poly" coords="460,53,462,161,519,161,521,142,568,140,566,184,640,195,733,157,742,54" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Deck" title="deck" shape="poly" coords="86,167,91,299,217,297,266,312,274,409,305,445,338,481,395,491,450,483,500,456,518,412,524,303,536,298,744,297,742,370,596,373,596,419,475,546,429,561,347,559,226,490,190,400,39,401,46,161" />

                    </map>
                </div>
        } else if (curRoomName !== 'deck') {
            clickableMap =
                <div>
                    <img src={imgSrcUrl + curRoomName + '.png'} alt="Bottom Floor Map" useMap="#Map"  className="imgMap"/>
                    <map name="Map" id="Map">
                        <area onClick={this.handleMapClick.bind(this)} alt="Ballroom" title="ballroom" shape="poly" coords="629,14,744,13,744,292,629,294" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Green room" title="green" shape="poly" coords="88,164,167,164,167,296,91,295" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Rock Bedroom" title="rock" shape="poly" coords="165,157,332,157,337,293,516,293,514,418,486,459,464,474,439,478,351,478,316,461,286,420,268,299,167,294" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Wine Room" title="wine" shape="poly" coords="84,19,320,25,322,158,88,160" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Deck" title="deck" shape="poly" coords="86,167,91,299,217,297,266,312,274,409,305,445,338,481,395,491,450,483,500,456,518,412,524,303,536,298,744,297,742,370,596,373,596,419,475,546,429,561,347,559,226,490,190,400,39,401,46,161" />
                    </map>
                </div>
        } else {
            clickableMap =
                <div>
                    <img src={imgSrcUrl + 'map768.png'} alt="Main Floor Map" useMap="#Map"  className="imgMap"/>
                    <map name="Map" id="Map">
                        <area onClick={this.handleMapClick.bind(this)} alt="Game Room" title="game" shape="poly" coords="463,8,465,129,568,135,567,93,600,96,602,9" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Foyer" title="foyer" shape="poly" coords="349,30,349,143,279,142,282,257,295,262,319,297,341,285,367,275,400,272,420,272,440,275,464,284,488,290,500,301,512,292,529,294,528,127,467,129,466,29" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Master Bedroom" title="master" shape="poly" coords="530,136,743,137,744,288,528,287" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Paris Bedroom" title="paris" shape="poly" coords="603,12,748,11,745,132,600,136" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Study" title="study" href="#" shape="poly" coords="272,284,275,267,293,275,317,295,322,299,338,294,349,286,366,281,380,277,399,273,415,274,441,276,464,284,479,292,489,300,498,303,506,296,512,293,521,293,524,292,519,406,509,424,491,444,472,458,454,464,428,470,402,472,372,472,338,463,311,442,294,418,288,338" />
                        <area onClick={this.handleMapClick.bind(this)} alt="Deck" title="deck" shape="poly" coords="34,160,100,166,99,216,87,226,88,270,97,271,103,298,256,300,269,311,272,326,275,404,283,428,297,443,321,462,354,485,378,492,434,492,454,485,481,472,522,440,529,417,537,388,536,356,534,317,546,296,558,296,735,294,739,358,600,356,598,404,596,411,566,477,529,512,493,528,453,546,435,548,430,559,408,565,397,565,390,551,372,549,351,546,313,531,278,502,244,481,212,418,208,362,37,361" />
                    </map>
                </div>
        }

        return (
            <div>
                {this.state.curRoom.room}
                {clickableMap}

                <ListGroup>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Foyer</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Deck</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Game</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Study</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Wine</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Ballroom</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Green</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Master</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>North</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Paris</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>Rock</ListGroupItem>
                    <ListGroupItem onClick={this.handleClick.bind(this)}>South</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}