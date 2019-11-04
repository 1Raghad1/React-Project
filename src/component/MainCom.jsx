import React, { Component } from 'react'
import { CarouselItem,Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import MainCon from './MainCon'
import axios from 'axios'
export default class MainCom extends Component {

 

  render() {
 
    return (
     <Carousel>
       <Carousel.Item> 
      
        {console.log(this.props.img)}
        <img src={this.props.img} alt=""/>
        
       <Carousel.Caption> 
          <h3>{this.props.title}</h3>
          <p>{this.props.pref}</p>
        </Carousel.Caption>
      </Carousel.Item> 
      </Carousel>
     

    )
  }
}
