import * as React from 'react';
// import { directive } from '@babel/types';
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';


export interface SMediaProps {

}

export interface SMediaState {

}

const Styles = styled.div`

.jumbo{
    height: 400px;
    background-color: silver;
    width: 100%;
    margin:0px;
}
.con{
    text-align:center;
}

`;

class SMedia extends React.Component<SMediaProps, SMediaState> {
    state = {}
    render() {
        return (
            <div>
                <Styles>
                    <Jumbotron className="jumbo">

                        <Container className="con">
                            <span>So Meal is fresh, healthy and delicious</span>
                            <p>FIND US or let us to FIND YOU</p>
                            <span>Or you can be hustle free by becoming our</span>
                            <p>Hero</p>
                        </Container>

                    </Jumbotron>
                </Styles></div>);
    }
}

export default SMedia;