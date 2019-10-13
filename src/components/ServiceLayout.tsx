import * as React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export interface ServiceLayProps {

}

export interface ServiceLayState {

}

const Styles = styled.div`

 .jumbo{
    height: 300px;
    margin:0;
 }
 
 .overlay{
    text-align: center;
    
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

`;

class ServiceLay extends React.Component<ServiceLayProps, ServiceLayState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
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
                            <Jumbo className="jumbo">
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
                            <Jumbo className="jumbo">
                                <div className="overlay">
                                    <Container >
                                        <h1>Register</h1>
                                        <p>dam dam dam dam dam dam dam</p>
                                    </Container>
                                </div>
                            </Jumbo>
                        </Col>
                    </Row>
                </React.Fragment>
            </Styles>
        );
    }
}

export default ServiceLay;