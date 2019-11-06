import React, { Component } from 'react'
import {Container,Navbar,NavbarBrand} from 'react-bootstrap'
import '..//css/style.css'
export default class Footer extends Component {
    render() {
        
        return (

<div className="fixed-bottom">  
            <Navbar style={{backgroundColor:'red'}}>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
  
        )
    }
}
