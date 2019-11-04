import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import '../css/style.css'
export default class MainCom extends Component {
  render() {
    return (
      <Card className="bg-dark text-white"style={{ width: '20rem' }} >
        <div className='hovereffect'>
      <Card.Img  src={this.props.img} alt="Card image" />
      <Card.ImgOverlay/>
      <div class="overlay">
   
          <h3>{this.props.title}</h3>
           <p>{this.props.pref}</p>
        </div>
        </div>
      
    </Card>
 


    )
  }
}
