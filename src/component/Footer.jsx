import React, { Component } from 'react'
import {Container,Navbar,NavbarBrand} from 'react-bootstrap'
import '..//css/style.css'
export default class Footer extends Component {
    render() {

        return (

<div className="fixed-bottom">  
            <Navbar style={{backgroundColor:"#c21206"}}>
                <Container>
                    <NavbarBrand>Raghad Allhyani © 2019</NavbarBrand>
                </Container>
            </Navbar>
        </div>
  
        )
    }
}
