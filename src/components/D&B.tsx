import * as React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from 'react-bootstrap';

export interface DelBookProps {

}

export interface DelBookState {

}

const Styles = styled.div`

.foto{
    height: 200px;
    width: 100%;
    margin: 0px;
    background-color: orange;
    padding:0;
}

.con{
    height: 200px;
    text-align: center;
    text-size: 10px;
    text-backgroundcolor: white;
}

.row{
}

`;

class DelBook extends React.Component<DelBookProps, DelBookState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="foto">
                        <Container>
                            <div className="con">
                                <p>are you ready to experience happiness</p>
                                <Row className="row">
                                    <Col>
                                        <button>Delivery</button>
                                    </Col>
                                    <span>or</span>
                                    <Col>
                                        <button>Booking</button>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </React.Fragment>
            </Styles>
        );
    }
}

export default DelBook;