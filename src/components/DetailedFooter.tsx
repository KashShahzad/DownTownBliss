import * as React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import styled from "styled-components"
import f from "../images/Smedia/facebook.png"
import t from "../images/Smedia/twitter.png"
import i from "../images/Smedia/instagram.png"
import p from "../images/Smedia/pintrest.png"
import l from "../images/Smedia/linkedin.png"
import an from "../images/Apps/android.png"
import ap from "../images/Apps/apple.png"

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
    display: flex;
    verticle-align: top;
}
.logo{
    padding-top: 50px;
    text-align: center;
    padding-left: 10px; 
    font-family: "Century Gothic";
    letter-spacing: 2px;
    width: 340px;
    background-color: black;
    height: 350px;
}
#a{
    font-size: 30px;
    color: white;
}
#c{
    font-size: 25px;
    color: Yellow;
}
#d{
    font-size: 20px;
    color: Orange;
}
#b{
    font-size: 15px;
    color: Pink;
}

.about-us{
    padding-top:20px;
    padding-left: 30px;
    text-align: left;
    width: 200px;
    background-color: black;
    height: 300px;
    
}
.cc{
    font-size: 15px;
    letter-spacing: 2px;
    color: white;
}
.Media{
    height: 100px;
    background-color: black;
    display: flex;
}
.social-media{
    padding-left: 30px;
}
.icon{
    padding: 10px;
    height: 70px;
}
.app{
    padding-left: 40%;
}

`;

class Foot extends React.Component<FootProps, FootState> {
    state = {}
    render() {
        return (
            <Styles>
                <React.Fragment>
                    <div className="contain">
                        <div className="logo">
                            <p id="a">DownTownBliss</p>
                            <p id="c">Restaurant</p>
                            <p id="d">Cafe</p>
                            <p id="b">FootTruck</p>
                        </div>
                        <div className="about-us cc">
                            <p>About us</p>
                            <li>Our Mission</li>
                            <li>Our Impact</li>
                            <li>Nutrition</li>
                            <li>Eat & Invest</li>
                        </div>

                        <div className="about-us cc">
                            <p>Innovation</p>
                            <li>Automation</li>
                            <li>Food Safety</li>
                            <li>Easy Stacks</li>
                            <li>Just In Cloud</li>
                        </div>
                        <div className="about-us cc">
                            <p> Career</p>
                            <li>Restaurant Jobs</li>
                            <li>Office Jobs</li>
                            <li>Become a Boss</li>
                        </div>
                        <div className="about-us cc">
                            <p>Contact</p>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Mobile App</li>
                            <li>Restaurant Feedback</li>
                        </div>
                        <div className="about-us cc">
                            <p>Services</p>
                            <li>Wi-Fi</li>
                            <li>V-Card</li>
                            <li>Catering</li>
                            <li>Hero Program</li>
                            <li>Loyalty Program</li>
                            <li>Food Investment</li>
                            <li>Delivery and Booking</li>
                            <li>Mobile Order and Pay</li>
                            <li>Waiter-less mobile ordering</li>
                        </div>
                    </div>
                    <div className="Media">
                        <div className="social-media">
                            <img
                                className="icon"
                                src={f}
                                alt="Roll"
                            />
                            <img
                                className="icon"
                                src={t}
                                alt="Roll"
                            />
                            <img
                                className="icon"
                                src={i}
                                alt="Roll"
                            />
                            <img
                                className="icon"
                                src={p}
                                alt="Roll"
                            />
                            <img
                                className="icon"
                                src={l}
                                alt="Roll"
                            />
                        </div>
                        <div className="app">
                            <img
                                className="icon"
                                src={an}
                                alt="Roll"
                            />
                            <img
                                className="icon"
                                src={ap}
                                alt="Roll"
                            />
                        </div>
                    </div>
                </React.Fragment>
            </Styles>
        );
    }
}

export default Foot;