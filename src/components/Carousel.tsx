import * as React from 'react';
// import { Component } from 'react';
// import { directive } from '@babel/types';
import Carousel from 'react-bootstrap/Carousel';

export interface CaroProps {

}

export interface CaroState {

}

class Caro extends React.Component<CaroProps, CaroState> {
    state = {}
    render() {
        return (<div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/47/dc/31/47dc31e4f8efd48f8b7451859b92e0cc.jpg"
                        alt="Roll"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/NvfBYrvrh9g/maxresdefault.jpg"
                        alt="second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/f4/ce/4c/f4ce4c735e5a53044fc9a408a09c5e4e.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>);
    }
}

export default Caro;