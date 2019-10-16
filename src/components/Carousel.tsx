import * as React from 'react';
// import { Component } from 'react';
// import { directive } from '@babel/types';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import bo from '../images/c1.jpeg';
import ba from '../images/c2.jpg';
import be from '../images/c3.jpg';

export interface CaroProps {

}

export interface CaroState {

}

const Styles = styled.div`
.rea{
    background-color:rgb(28, 28, 28);
    position: relative;
    z-index: 0;
    overflow: visible;
}
    .carousel{
      padding-left:30px;
      padding-right:30px;
      position: relative;
      z-index: auto;
    }
      
    .carImg {
        height: 600px;  
    }
`;

class Caro extends React.Component<CaroProps, CaroState> {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Styles>
                    <div className="rea">
                        <Carousel className="carousel" >
                            <Carousel.Item >
                                <img
                                    className="d-block w-100 carImg"
                                    src={bo}
                                    alt="Roll"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100 carImg"
                                    src={ba}
                                    alt="second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100 carImg"
                                    src={be}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Styles>
            </React.Fragment>);
    }
}

export default Caro;