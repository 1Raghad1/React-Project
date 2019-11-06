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
import Details from './component/Details'


export default class App extends Component {
  _isMounted = true;
  constructor(props) {
    super(props)
    
    this.state = {
        gener:[],
        isLoading: true,
  
    }
  
}

fetchData = () => {

    
    let gener='https://api.themoviedb.org/3/genre/tv/list?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US'
    let urlArray = [gener]

    let promiseArray = urlArray.map(url => axios.get(url));
    axios.all(promiseArray)
        .then(results => {
            let res = results.map(r => r.data);
            if(this._isMounted)
            this.setState({  isLoading: false,gener:res[0]})
            console.log(res)
        })
    }
componentDidMount() {

this.fetchData()
this._isMounted = true;
}

componentWillUnmount() {
  this._isMounted = false;
}
  render() {
    
    console.log(this.state.current)
    if(this.state.isLoading){
      return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    }
    
    return (
      <div className="App">
    
        <Header geners={this.state.gener}/>
        <Switch>
        <Route path={"/Details/:id"} render={(props)=>this.state.current!==null  ? <Details  {...props} data={this.state.current} />:null} /> 

     <Route  path="/" exact component ={Home}/>
  
     </Switch>
     <br/><br/> <br/><br/><br/><br/> <br/><br/>
        <Footer />

      </div>
    );
  }
}

