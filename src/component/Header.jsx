import React, { Component } from 'react'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
export default class HeadFoot extends Component {

  render() {
   
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://digitalsynopsis.com/wp-content/uploads/2018/05/creative-typographic-logos-13.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top " style={{ margin: -10 }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">TVShows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
       
      </div>
    )
  }
}
