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
    height: 250px;
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
                            <h1>SocialMediaPosts</h1>
                            <p>thsdis it sthsi fjgfghdsjf sfjkhres gjdfkfgr gjdskhge</p>
                        </Container>

                    </Jumbotron>
                </Styles></div>);
    }
}

export default SMedia;