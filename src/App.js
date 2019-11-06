import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './css/style.css'
// import dotenv from 'dotenv'
import axios from 'axios'
import Header from './component/Header'
import Footer from './component/Footer'
import {Spinner} from 'react-bootstrap'
import Home from './component/Home'
import { Switch } from 'react-router-dom'


export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        conf: '',
        trending: '',
        popular:'',
        gener:[],
        isLoading: true
    }
  
}

handleDetailsClick = (tvid) =>{
  const url = `https://api.themoviedb.org/3/tv/${tvid}?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US`

  axios({
    method: 'GET',
    url: url
  }).then(response => {
    console.log(response) // take a look at what you get back!
    console.log(`Fetching details for ${tvid}`);
    this.setState({ current: response })
    console.log( this.state.current)
  })
}
fetchData = () => {

    let configurationapi = 'https://api.themoviedb.org/3/configuration?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let gener='https://api.themoviedb.org/3/genre/tv/list?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US'
    let urlArray = [configurationapi,gener]

    let promiseArray = urlArray.map(url => axios.get(url));
    axios.all(promiseArray)
        .then(results => {
            let res = results.map(r => r.data);
            this.setState({  conf: res[0],isLoading: false,gener:res[1]})
            console.log(res)
        })
    }
componentDidMount() {
this.fetchData()
}
  render() {
    // console.log(this.state.data)
    if(this.state.isLoading){
      return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    }
    
    return (
      <div className="App">
    
        <Header geners={this.state.gener}/>
        <Switch>
     <Route  path="/" exact component ={Home}/>
     

     </Switch>
     <br/><br/> <br/><br/><br/><br/> <br/><br/>
        <Footer />

      </div>
    );
  }
}

