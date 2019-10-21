import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components'


export interface NavigateProps {

}

export interface NavigateState {

}

const Styles = styled.div`
 .navi {
     height: 80px;
     width:100%;
     background-color:rgba(28, 28, 28,0.9);
     role:banner;
     position: fixed;
     z-index: 1;
     display: block;
 }
 .brand{
     font-size: 30px;
     font-family: "Century Gothic";
     float:left;
    //  line-height: normal;
     padding-left: 30px;
     font-weight: 500 ;
     letter-spacing: 2px;
 }
 .aauto{
    font-size:14px;
    font-family: "Century Gothic"; 
    font-weight: 400 !important;
    padding-left: 20px;
    padding-right: 20px;
    letter-spacing: 1px;
    
 }

.auto{
    font-size:14px;
    padding-left: 90px;
    font-family: "Century Gothic";
    font-weight: 500;
    letter-spacing: 1px;
    float:right;
}

#a:hover{
    color: blue;
}

`;

class Navigate extends React.Component<NavigateProps, NavigateState> {
    state = {}
    render() {
        return (
            <Styles>
                <Navbar variant="dark" expand="lg" className="navi">
                    <Navbar.Brand className="brand" href="#home">DowntownBliss</Navbar.Brand>
                    <Navbar.Toggle area-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="aauto">
                            <Nav.Link id="a" style={{ padding: "20px", color: "white" }} href="#home">Bliss Theory</Nav.Link>
                            <Nav.Link style={{ padding: "20px", color: "white" }} href="#home">About Us</Nav.Link>
                            <Nav.Link style={{ padding: "20px", color: "white" }} href="#features">Our Menu</Nav.Link>
                            <Nav.Link style={{ padding: "20px", color: "white" }} href="#pricing">Catering</Nav.Link>
                            <Nav.Link style={{ padding: "20px", color: "white" }} href="#pricing">Deals & Rewards</Nav.Link>
                            <Nav.Link style={{ padding: "20px", color: "white" }} href="#pricing">Locate Us</Nav.Link>
                        </Nav>
                        <Nav className="auto">
                            <Nav.Link style={{ padding: "10px", color: "white" }} href="#pricing">Login</Nav.Link>
                            <Nav.Link style={{ padding: "10px", color: "white" }} href="#pricing">Search</Nav.Link>
                        </Nav>

                        {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
                    </Navbar.Collapse>
                </Navbar >
            </Styles >);
    }
}

export default Navigate;