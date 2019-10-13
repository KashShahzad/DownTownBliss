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
     height: 90px;
     width:100%;
 }
 .brand{
     text-size: 500px
 }
`;

class Navigate extends React.Component<NavigateProps, NavigateState> {
    state = {}
    render() {
        return (<div>
            <Styles>
                <Navbar bg="dark" variant="dark" className="navi">
                    <Navbar.Brand className="brand" href="#home">DowntownBliss</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#features">Our Menu</Nav.Link>
                        <Nav.Link href="#pricing">Catering</Nav.Link>
                        <Nav.Link href="#pricing">Deals & Rewards</Nav.Link>
                        <Nav.Link href="#pricing">Locate Us</Nav.Link>
                        <Nav.Link href="#pricing">Login</Nav.Link>
                    </Nav>

                    <Button variant="outline-info">OrderNow</Button>
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
                </Navbar>
            </Styles>
        </div>);
    }
}

export default Navigate;