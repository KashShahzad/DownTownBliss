import * as React from 'react';
import styled from "styled-components";
import { Container } from 'react-bootstrap';

export interface CultureProps {

}

export interface CultureState {

}

const Styles = styled.div`

.divi{
    height: 700px;
    background-color: rgb(28,28,28);
}
.abc{
    height:550px;
    padding-left: 60px;
    padding-right: 60px;
    margin: 70px;
    background-color: rgb(28,28,28);
    position: absolute;
    
}
.div{

}
#a{
    font-size: 27px;
    color: white;
    font-family: "Century Gothic";
    letter-spacing: 2px;
    word-spacing: 2px;
    font-weight: bold;
}
#b{
    font-size: 20px;
    color: white;
    font-family: "Century Gothic";
    word-spacing: 3px;
}
#c{
    font-size: 15px;
    color: white;
    font-family: "Century Gothic";
    word-spacing: 3px;
}
`;

class Culture extends React.Component<CultureProps, CultureState> {
    state = {}
    render() {
        return (<Styles>
            <React.Fragment>
                <div className="divi">
                    <div className="abc">
                        <p id="a">Our Mission is to provide a modern and exciting food serving system that covers new areas of restaurant industry in terms of both technology and management. We are looking forward to achieve this goal by connecting everything that somehow connected to the customer. By creating an optimized supply chain. By utilizing applications of Block-Chain for food safety and tracking. Implementing all the modern ways to interact with the customers and services that serve them. Additionally, we will be promoting professionalism in employees to use the technology and serve the customer better.</p>
                        <span></span>
                        <span id="a">Eat Happy, Serve Happy!</span>
                        <div style={{ paddingTop: "30px" }}>
                            <span id="b">Raja Khurram Shahzad</span>
                            <p id="c">(CEO and Founder)</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </Styles>);
    }
}

export default Culture;