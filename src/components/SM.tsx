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
    height: 300px;
    background-color: darkgrey;
    width: 100%;
    margin:0px;
}
.con{
    text-align:center;
}
#a{
    font-size: 25px;
    color: Black;
    font-weight: bold;
    font-family: "Century Gothic";
    line-spacing: 2px;
}
#b{
    font-size: 25px;
    color: Black;
    font-weight: bold;
    font-family: "Century Gothic";
    line-spacing: 2px;
}
#c{
    font-size: 25px;
    color: Black;
    font-weight: bold;
    font-family: "Century Gothic";
    line-spacing: 2px;
}
#d{
    font-size: 30px;
    color: darkgreen;
    font-weight: bold;
    font-family: "Century Gothic";
    line-spacing: 2px;
}
#bb{
    font-size: 30px;
    color: darkgreen;
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
                            <span id="a">So Meal is Fresh, Healthy and Delicious</span>
                            <p id="b"><u id="bb">FIND US</u> or let us to<u id="bb"> FIND YOU</u></p>
                            <span id="c">P.S You can be Hustle-free by becoming our</span>
                            <p id="d"><u>Hero</u></p>
                        </Container>

                    </Jumbotron>
                </Styles></div>);
    }
}

export default SMedia;