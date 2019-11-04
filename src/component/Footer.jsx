import React, { Component } from 'react'
import {Container,Navbar,NavbarBrand} from 'react-bootstrap'
export default class Footer extends Component {
    render() {
        return (
<div className="fixed-bottom">  
            <Navbar style={{backgroundColor:'#25307C'}}>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
        )
    }
}
