import * as React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import p1 from '../images/abc.jpg';

export interface ServiceLayProps {

}

export interface ServiceLayState {

}

const Styles = styled.div`

 .jumbo{
    height: 300px;
    margin:0;
    background: url(${p1}) no-repeat;
    background-size: cover;
    // position:sticky;
    // z-index:-2;
    opacity: 0.6;
 }
 .jumbo1{
    height: 300px;
    margin:0;
    background: url(${p1}) no-repeat;
    background-size: cover;
    position:sticky;
    z-index:-2;
    opacity: 0.6;
 }
 .jumbo2{
    height: 300px;
    margin:0;
    background: url(${p1}) no-repeat;
    background-size: cover;
    position:sticky;
    z-index:-2;
    opacity: 0.6;
 }
 .jumbo3{
    height: 300px;
    margin:0;
    background: url(${p1}) no-repeat;
    background-size: cover;
    position:sticky;
    z-index:-2;
    opacity: 0.6;
 }
 
 .overlay{
    text-align: center;
    color: white;
    z-index: 0;
    position: relevent;
    left:0;
    right:0;
    top:0;
    bottom:0;
 }

 .abc{
   padding-left:0;
   padding-right:0;
 }
 .ab{
    padding-right:0;
    padding-left:0;
 }

 .cd{
     margin:0;
 }
 .devi{
     background-color:black;
     position: relative;
     z-index: -3;
 }

`;

class ServiceLay extends React.Component<ServiceLayProps, ServiceLayState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="devi">
                        <Row className="cd">
                            <Col className="ab">
                                <Jumbo className="jumbo">
                                    <div className="overlay">
                                        <Container >
                                            <h1>Register</h1>
                                            <p>dam dam dam dam dam dam dam</p>
                                        </Container>
                                    </div>
                                </Jumbo>
                            </Col>
                            <Col className="abc">
                                <Jumbo className="jumbo1">
                                    <div className="overlay">
                                        <Container >
                                            <h1>Register</h1>
                                            <p>dam dam dam dam dam dam dam</p>
                                        </Container>
                                    </div>
                                </Jumbo>
                            </Col>
                        </Row>
                        <Row className="cd">
                            <Col className="ab">
                                <Jumbo className="jumbo2">
                                    <div className="overlay">
                                        <Container >
                                            <h1>Register</h1>
                                            <p>dam dam dam dam dam dam dam</p>
                                        </Container>
                                    </div>
                                </Jumbo>
                            </Col>
                            <Col className="abc">
                                <Jumbo className="jumbo3">
                                    <div className="overlay">
                                        <Container >
                                            <h1>Register</h1>
                                            <p>dam dam dam dam dam dam dam</p>
                                        </Container>
                                    </div>
                                </Jumbo>
                            </Col>
                        </Row>
                    </div>
                </React.Fragment>
            </Styles>
        );
    }
}

export default ServiceLay;