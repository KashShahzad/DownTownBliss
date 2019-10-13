import * as React from 'react';
// import { Component } from 'react';
// import { directive } from '@babel/types';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

export interface CaroProps {

}

export interface CaroState {

}

const Styles = styled.div`
    .carousel{
      
    }
    .carImg {
        height: 480px
    }
`;

class Caro extends React.Component<CaroProps, CaroState> {
    state = {}
    render() {
        return (<div>
            <Styles>
                <Carousel className="carousel" >
                    <Carousel.Item >
                        <img
                            className="d-block w-100 carImg"
                            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                            src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
                            src="https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Styles>
        </div>);
    }
}

export default Caro;