import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Geners from './Geners'

export default class HeadFoot extends Component {

  render() {
    let main = this.props.geners.genres.map((item) => {
      if(this.props.geners.genres.indexOf( item)){
       
      return  <a as ='a'  className='navhref' style={{marginLeft:'20px'}} href={`/Genre/${item.id}`} key={item.id} id={item.id}>{item.name}</a>

       }
    })
  
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
          <Nav className="m-auto">

                {main}
          
          </Nav>
         
        </Navbar>

      </div>
    )
  }
}
