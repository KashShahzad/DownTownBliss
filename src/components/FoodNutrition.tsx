import * as React from 'react';
import styled from "styled-components";
import bb from '../images/nutr.jpeg';
import nn from '../images/bcf.jpeg';
import abc from '../images/abc1a.jpg';
import abcc from '../images/abc1b.jpg';
import abccc from '../images/abc1c.jpg';
import aacc from '../images/abc2a.jpg';
import aaccc from '../images/abc2b.jpg';
import bbb from '../images/bbb.jpg';
import { Jumbotron, Container, Row } from 'react-bootstrap';

export interface FoodNutritionProps {

}

export interface FoodNutritionState {

}

const Styles = styled.div`
.divi{
    height: 2380px;
    width: 100%;
    // background: url(${bb});
    // opacity: 0.9;
    // background-size: cover;
    // bakground-position: 100% 0;
    // background-padding-top: 186;
    // background-size: cover;
    background-color: rgb(28, 28, 28, 0.8);
    position: relative;
    z-index: -3;
}

.ab{
    height: 525px;
    position: relative;
    z-index: -2;
    background-color:rgb(28, 28, 28);
    margin: 0px;
    padding: 0px;
    float: top;
    background: url(${bb}) no-repeat top;
    opacity: 0.8;
    background-size: cover;
}
.overlay{
    padding-top: 100px;
    float: left;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    color: white;
    z-index: 0;
    position: relevent;
    z-index:0;
    left:0;
    right:0;
    top:0;
    bottom:0;
 }
.abc{
    background-color: black;
    height: 1320px;   
    position: relative;
    z-index: -1;
    margin-top: -30px;
    margin-bottom: -30px;
    padding: 30px;
}
.abc1{
    height:300px;
    margin-bottom: 30px;
}
.abc2{
    height:560px;
    margin-bottom: 30px;
}
.abc3{
    height:300px;
}
.cd{
    background-color: rgb(28, 28, 28);
    float: bottom;
    height: 600px;
    verticle-align: baseline;
    position: relative;
    z-index: -2;
    background: url(${nn}) no-repeat top;
    background-size: cover;
}
.overlay1{
    padding-top: 100px;
    float: left;
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    color: yellow;
    z-index: 0;
    position: relevent;
    z-index:0;
    left:0;
    right:0;
    top:0;
    bottom:0;
 }
 .rab{
    object-fit: cover;
     width: 210px;
     height: 300px;
     padding:0;
     margin: 0;
     padding-right: 30px;
 }
 .rab1{
     width: 650px;
     object-fit: cover;
     height: 300px;
     padding-right: 30px;
 }
 .rab2{
     width: 220px;
     height: 300px;
 }
.rabb{
    object-fit: cover;
    width: 540px;
    height: 600px;
    padding-right: 15px;
}
.rabbb{
    object-fit: cover;
    width: 540px;
    height: 600px;
    padding-left: 15px;
}
.pc{
    margin-top: 40px;
    object-fit: cover;
    width: 220px;
    height: 300px;
    position: absolute-1;
    float: right;
}
.jumbo{
    margin-top: 40px;
    width: 830px;
    height: 300px;
    position: absolute;
    background-color: brown;
}
`;

class FoodNutrition extends React.Component<FoodNutritionProps, FoodNutritionState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="divi">
                        <div className="ab">
                            <div className="overlay">
                                <Container>
                                    <p>Nutrition</p>
                                    <p>jkcksdfhskcjsdnjdhsfckbdshv</p>
                                </Container>
                            </div>
                        </div>

                        <Container className="abc">
                            <div className="abc1">
                                <img
                                    className="rab"
                                    src={abc}
                                    alt="Roll"
                                />
                                <img
                                    className="rab1"
                                    src={abcc}
                                    alt="Roll"
                                />
                                <img
                                    className="rab2"
                                    src={abccc}
                                    alt="Roll"
                                />
                            </div>
                            <div className="abc2">
                                <img
                                    className="rabb"
                                    src={aacc}
                                    alt="Roll"
                                />
                                <img
                                    className="rabbb"
                                    src={aaccc}
                                    alt="Roll"
                                />
                            </div>
                            <div className="abc3">
                                <div className="jumbo">

                                </div>
                                <img
                                    className="pc"
                                    src={bbb}
                                    alt="Roll"
                                />
                            </div>
                        </Container>

                        <div className="cd">
                            <div className="overlay1">
                                <Container>
                                    <p>Nutrition</p>
                                    <p>jkcksdfhskcjsdnjdhsfckbdshv</p>
                                </Container>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </Styles>);
    }
}

export default FoodNutrition;