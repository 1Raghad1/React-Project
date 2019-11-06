import React, { Component } from 'react'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'


export default class HeadFoot extends Component {

  render() {
    // let main = this.props.geners.genres.map((item) => {
    //   if(this.props.geners.genres.indexOf( item)<9){
       
    //   return  <Nav.Link href="#link" key={item.id} id={item.id}>{item.name}</Nav.Link>

    //    }
    // })
  
    return (
      <div className ='navBar'>
        <Navbar  style={{backgroundColor:'#c21206'}}>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://icon-library.net/images/theater-icon-png/theater-icon-png-6.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top " style={{ margin: -15 }}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">

                {/* {main} */}
          
          </Nav>
         
        </Navbar>

      </div>
    )
  }
}
