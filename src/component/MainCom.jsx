import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default class MainCom extends Component {
  render() {
    return (
      
      <Card className="bg-dark text-white"style={{ width: '20rem' }} >
        <div className='hovereffect' onClick={()=>this.props.handleDetailsClick(this.props.id)}>
      <Card.Img  src={this.props.img} alt="Card image" />
      <Card.ImgOverlay/>
      <div className="overlay" >
          <h3>{this.props.title}</h3>

<Link className="info" to={`/Details/${this.props.id}`}> More Info</Link>     
   
        </div>
        </div>
      
    </Card>
 


    )
  }
}
