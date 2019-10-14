import * as React from 'react';
import { Container } from 'react-bootstrap';
import styled from "styled-components"

export interface FootProps {

}

export interface FootState {

}

const Styles = styled.div`
.contain{
    height: 350px;
    background-color: black;
    margin:0;
    width: 100%;
}
`;

class Foot extends React.Component<FootProps, FootState> {
    state = {}
    render() {
        return (<div>
            <Styles>
                <React.Fragment>
                    <div className="contain">
                        <Container >

                        </Container>
                    </div>
                </React.Fragment>
            </Styles>
        </div>);
    }
}

export default Foot;