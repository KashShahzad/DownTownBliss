import * as React from 'react';
import styled from "styled-components";
import bb from '../images/nutr.jpeg';
import nn from '../images/bcf.jpg';
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
    background-color: rgb(28, 28, 28);
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
    margin-right: 100px;
    margin-left: 100px;
}
.abc1{
    height:300px;
    margin-bottom: 30px;
    display: flex;
}
.abc2{
    height:560px;
    margin-bottom: 30px;
    display: flex;
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
     padding-right: 30px;
 }
.rab1{
     object-fit: cover;
     position: relative;
     z-index: -2;
 }
.rab2{
     width: 220px;
     height: 300px;
 }
 .blend{
     width: 650px;
     margin: 0px;
     height: 300px;
     margin-right: 30px;
     position:relative;
     z-index:-3;
     background: url(${abcc}) bottom;
     background-size: cover;
     background-color: silver;
 }
 .blend-c{
     background-color: rgb(28,28,28,0.4);
     position:absolute;
     z-index:-1;
     text-align: center;
     color: white;
     bottom: 0;
     height: 100px;
 }
.rabb{
    background: url(${aacc});
    background-size: cover;
    width: 540px;
    height: 600px;
    position: relative;
    z-index: -2;
    margin-right:15px;  
}
.rabb-c{
    background-color: rgb(28,28,28,0.4);
    position:absolute;
    z-index:-1;
    text-align: center;
    color: white;
    bottom: 0;
    height: 100px;
}
.rabbb{
    background: url(${aaccc});
    background-size: cover;
    width: 540px;
    height: 600px;
    position: relative;
    z-index: -2;
    margin-left: 15px;
}
.rabbb-c{
    background-color: rgb(28,28,28,0.4);
    position:absolute;
    z-index:-1;
    text-align: center;
    color: white;
    bottom: 0;
    height: 100px;
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
    text-align: center;
    padding-top: 80px;
}

//BC
.biss{
    height: 300px;
    margin: 10px;
    text-align: left;
    padding-top: 10px;
    background-color:rgb(28,28,28,0.4)
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
                                <Container className="biss">
                                    <p style={{ fontFamily: "Century Gothic", color: "yellow" }}>Have a Trust on what<br /> You are Consuming</p>
                                    <p style={{ fontSize: "18px", color: "snow", fontFamily: "Century Gothic" }}>PS: Get the app to review the rating of food item served, order, <br /> invest and earn your divident</p>
                                    <a style={{ backgroundColor: "green", color: "white", padding: "15px", fontSize: "25px", fontFamily: "Century Gothic" }} title="Learn more">Learn More</a>
                                </Container>
                            </div>
                        </div>

                        <div className="abc">
                            <div className="abc1">
                                <img
                                    className="rab"
                                    src={abc}
                                    alt="Roll"
                                />
                                <div className="blend">
                                    <Container className="blend-c">
                                        <pre style={{ color: "white", fontFamily: "Century Gothic", fontSize: "26px", fontWeight: "bold" }}>Uber Eat    Careem Now    Cheetay    Bykea</pre>
                                        <a style={{ backgroundColor: "green", color: "white", padding: "10px", fontSize: "15px", fontFamily: "Century Gothic", fontWeight: "bold", marginRight: "10px" }}>Get Deliverd</a><span style={{ color: "white", fontFamily: "Century Gothic", fontSize: "15px", fontWeight: "bold" }}>OR</span><a style={{ backgroundColor: "green", color: "white", padding: "10px", fontSize: "15px", fontFamily: "Century Gothic", fontWeight: "bold", marginLeft: "10px" }}>Pickup Later</a>
                                    </Container>
                                </div>
                                <img
                                    className="rab2"
                                    src={abccc}
                                    alt="Roll"
                                />
                            </div>
                            <div className="abc2">

                                <div className="rabb">
                                    <Container className="rabb-c">
                                        <p style={{ color: "white", fontSize: "18px", fontFamily: "Century Gothic", fontWeight: "bold" }}>Pizza, Burger, Falafel, Taccoo and burretos</p>
                                        <a style={{ backgroundColor: "green", color: "white", padding: "10px", fontSize: "18px", fontFamily: "Century Gothic", fontWeight: "bold" }}>Order Now</a>
                                    </Container>
                                </div>

                                <div className="rabbb">
                                    <Container className="rabbb-c">
                                        <p style={{ color: "white", fontSize: "18px", fontFamily: "Century Gothic", fontWeight: "bold" }}>Coffee, Tea, smoothy and bear</p>
                                        <a style={{ backgroundColor: "green", color: "white", padding: "10px", fontSize: "18px", fontFamily: "Century Gothic", fontWeight: "bold" }}>Order Now</a>
                                    </Container>
                                </div>

                            </div>
                            <div className="abc3">
                                <div className="jumbo">
                                    <Container>
                                        <p style={{ color: "white", fontSize: "30px", fontFamily: "Century Gothic", fontWeight: "bold" }}>Our mission of sustainability and digital revolution in food industry</p>
                                        <a style={{ backgroundColor: "green", color: "white", padding: "10px", fontSize: "18px", fontFamily: "Century Gothic", fontWeight: "bold" }}>Learn more</a>

                                    </Container>
                                </div>
                                <img
                                    className="pc"
                                    src={bbb}
                                    alt="Roll"
                                />
                            </div>
                        </div>

                        <div className="cd">
                            <div className="overlay1">
                                <Container className="biss">
                                    <p style={{ fontFamily: "Century Gothic" }}>INVEST & EARN <br /> while EATING</p>
                                    <p style={{ fontSize: "18px", color: "snow", fontFamily: "Century Gothic" }}>PS: Get the app to review the rating of food item served, order, <br /> invest and earn your divident</p>
                                    <a style={{ backgroundColor: "green", color: "white", padding: "15px", fontSize: "25px", fontFamily: "Century Gothic" }} title="Learn more">Learn More</a>
                                </Container>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </Styles>);
    }
}

export default FoodNutrition;