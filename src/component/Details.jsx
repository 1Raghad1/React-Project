import React, { Component } from 'react'
import {Container,Row,Col,Card,Accordion,Button,Spinner} from 'react-bootstrap'
export default class Details extends Component {
     _ismounted= true
    state={
        data:''
    }
    componentDidMount(){
       
        if(this._ismounted)
   this.setState({data:this.props.data.data,loading:false})
 
    }
    componentWillUnmount(){
        this._ismounted=false
    }
    render() {
       
   let elm=''
   let season
   if(!this.state.loading){
 elm = this.state.data.genres.map(elm=>{
return <li>{elm.name}</li>
        })
season=this.state.data.seasons.map(item=>{
    return <Accordion>
    <Card style={{backgroundColor:'rgba(0, 0, 0, 0.6)'}} >
      <Card.Header>
        <Accordion.Toggle as={Button} variant="dark" eventKey="0" >
          Season {this.state.data.seasons.indexOf(item)+1}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse variant="dark" eventKey="0">
      <Card.Body>
      
    

    <Card className="bg-dark text-white"style={{ width: '15rem' }} >
        <div className='hovereffect' onClick={()=>this.props.handleDetailsClick(this.props.id)}>
      <Card.Img  src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" />
      <Card.ImgOverlay>
      <p>Number Of episode: {item.episode_count}</p>
      </Card.ImgOverlay>
    
      <div className="overlay" >
         

        </div>
        </div>
      
    </Card>
       
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
}) 
   } 
        if(this.state.loading)return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
        return (
            <div className= 'detailsDiv' style={{backgroundImage: 'url(' + `http://image.tmdb.org/t/p/original/${this.state.data.backdrop_path}` + ')'   , backgroundRepeat: 'no-repeat',backgroundSize: "100% 100%" }}>
                <div  style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                {console.log(this.state.data)}
            <Container>
            <Row>
              <Col> <img className='detaImg' src={`http://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`} height='650px' wedith='150px'/></Col>
              <Col>
              <h6 style={{display:'inline'}}>Status : </h6><h6 style={{display:'inline-block' ,marginBottom:'50px',marginTop:'50px'}}>{this.state.data.status}</h6><h6 style={{display:'inline'}}> on {this.state.data.networks[0].name} </h6>
             
              <p>{this.state.data.overview}</p>
              <h6>Genres</h6>
              <ul>
                {elm}
                  </ul>
                 
                  <h6 style={{display:'inline'}}>IMDB Raiting : </h6><h6 style={{display:'inline-block' ,marginBottom:'50px',marginTop:'50px'}}>{this.state.data.vote_average}</h6>
                  
              </Col>
            </Row>
            <Row>
{season}
            </Row>
          </Container>
          </div>
          </div>
        )
    }
    }

