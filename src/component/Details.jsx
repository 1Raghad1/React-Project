import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Accordion, Button, Spinner } from 'react-bootstrap'

export default class Details extends Component {
    _ismounted = true
    state = {
        data: '',
        loading: true
    }
    
    componentDidMount() {

        if (this._ismounted) {

            this.setState({ data: this.props.data, })
            const { match: { params } } = this.props;
            axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US`)
                .then(({ data: tvdata }) => {
                    console.log('user', tvdata);

                    this.setState({ data: tvdata, loading: false });
                    console.log(this.state.data.genres)
                });
        }
    }


    componentWillUnmount() {
        this._ismounted = false
    }
    render() {

        let elm = ''
        let season
        if (!this.state.loading) {
            elm = this.state.data.genres.map(elm => {
                return <li>{elm.name}</li>
            })
            season = this.state.data.seasons.map(item => {
                return <Accordion>
                    <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} >
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="dark" eventKey="0" >
                                Season {this.state.data.seasons.indexOf(item) + 1}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse variant="dark" eventKey="0">
                            <Card.Body>
                                <Card className="bg-dark text-white" style={{ width: '18rem' }} >
                                    <div className='hovereffect' >

                                        <Card.Img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="Card image" />
                                        <div className="overlay" >
                                        <h5 style={{marginTop:'10px'}}>Air Date: {item.air_date}</h5>
                                        <h5 style={{marginTop:'10px'}}>Number of Episode: {item.episode_count}</h5>
                                        <p style={{marginTop:'30px'}}>{item.overview}</p>
                                       
                                        </div>
                                    </div>

                                </Card>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            })
        }
        if (this.state.loading) return <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
        return (
            <div className='detailsDiv' style={{ backgroundImage: 'url(' + `http://image.tmdb.org/t/p/original/${this.state.data.backdrop_path}` + ')', backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%" }}>
                <div style={{ backgroundColor: 'rgba(121, 33, 3, 0.6)' }}>
                    {console.log(this.state.data)}
                    <Container>
                        <Row>

                            <Col> <img className='detaImg' src={`http://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`} height='650px' wedith='150px' style={{ marginTop: '50px' }} /></Col>
                            <Col>
                                <h5 style={{ display: 'inline-block', marginTop: " 50px" }}>{this.state.data.name} </h5>
                                <ul>
                                    {elm}
                                </ul>
                                <p style={{ marginTop: " 30px", marginTop: " 30px" }}>{this.state.data.overview}</p>



                                <h5 style={{ display: 'inline' }}>IMDB Raiting : </h5><h5 style={{ display: 'inline-block', marginBottom: '30px' }}>{this.state.data.vote_average}</h5> <br></br>

                                <h5 style={{ display: 'inline' }}>Status : </h5><h5 style={{ display: 'inline-block', marginBottom: '30px' }}>{this.state.data.status}</h5><h5 style={{ display: 'inline' }}> on {this.state.data.networks[0].name} </h5>
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
