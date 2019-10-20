import * as React from 'react';
import styled from "styled-components";
import { Container } from 'react-bootstrap';

export interface CultureProps {

}

export interface CultureState {

}

const Styles = styled.div`

.divi{
    height: 600px;
    background-color: black;
}
.abc{
    height:500px;
    left: 4%;
    right: 5%;
    margin: 50px;
    background-color: rgb(28,28,28);
    position: absolute;
  
}
.div{

}

`;

class Culture extends React.Component<CultureProps, CultureState> {
    state = {}
    render() {
        return (<Styles>
            <React.Fragment>
                <div className="divi">
                    <Container className="abc">

                    </Container>
                </div>
            </React.Fragment>
        </Styles>);
    }
}

export default Culture;