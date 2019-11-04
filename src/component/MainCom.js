import React, { Component } from 'react'
import { CarouselItem,Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import MainCon from './MainCon'
import axios from 'axios'
export default class MainCom extends Component {

 

  render() {
 
    return (
      
       <Carousel.Item > 
      <img src={this.props.img}/>
       <Carousel.Caption> 
          <h3>{this.props.title}</h3>
          <p>{this.props.pref}</p>
        </Carousel.Caption>
      </Carousel.Item> 
     

     

    )
  }
}
