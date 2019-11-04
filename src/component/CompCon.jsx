import React, { Component } from 'react'
import Comp from './Comp'
import {CardGroup} from 'react-bootstrap'
export default class CompCon extends Component {
    render() {
        return (
            <div className='con'>
             <CardGroup className ='CardGroup' style={{margin:'50px'}}>
                             <Comp></Comp>  <Comp></Comp> <Comp></Comp> <Comp></Comp> 
             </CardGroup>
            </div>
        )
    }
}
