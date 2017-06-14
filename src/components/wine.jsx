import React from "react";
import { Carousel } from "react-bootstrap";

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <section className = "tourInfo">
            <Carousel>
                <Carousel.Item>
                    <img className="carousel-pic" width={900} height={500} alt="900x500" src="./castlepics/wine1.jpg"/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="carousel-pic" width={900} height={500} alt="900x500" src="./castlepics/wine2.jpg"/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="carousel-pic" width={900} height={500} alt="900x500" src="./castlepics/wine3.jpg"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className = "description">
                <div className = "packheader">
                    <h2>Wine Cellar <small>Can house 350 bottles of wine</small></h2>
                    
                    <div className = "info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores animi quasi pariatur vel dolorum. 
                         Sint veniam porro deserunt, earum cum vero. Cum odit, accusamus, beatae harum ut voluptas! A, dignissimos!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum hic voluptate itaque voluptatem quas autem vero ipsum officia placeat temporibus, cumque natus corrupti omnis odio, quos fugit! Aperiam repudiandae magni, illo consectetur. Sint vero, vel ab sed ad necessitatibus perferendis. Culpa, minima. Tempore, veritatis consequuntur aliquid cupiditate laboriosam delectus nihil.</p>
                    </div>
                </div>
            </div>
        </section>

        
        );
    }
}