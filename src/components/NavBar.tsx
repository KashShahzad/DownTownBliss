import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export interface NavigateProps {

}

export interface NavigateState {

}

class Navigate extends React.Component<NavigateProps, NavigateState> {
    state = {}
    render() {
        return (<div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">DowntownBliss</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">About Us</Nav.Link>
                    <Nav.Link href="#features">Our Menu</Nav.Link>
                    <Nav.Link href="#pricing">Catering</Nav.Link>
                    <Nav.Link href="#pricing">Deals & Rewards</Nav.Link>
                    <Nav.Link href="#pricing">Locate Us</Nav.Link>
                </Nav>
                <Nav.Link inline href="#pricing">Login</Nav.Link>
                <Button variant="outline-info">Search</Button>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </div>);
    }
}

export default Navigate;