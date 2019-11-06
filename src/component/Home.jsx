import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
// import dotenv from 'dotenv'

import axios from 'axios'
import Details from './Details'
import {Spinner} from 'react-bootstrap'
import MainCon from './MainCon'

// import { Switch, Route } from 'react-router-dom'
export default class App extends Component {
    _isMounted = false;
  constructor(props) {
    super(props)
    
    this.state = {
        conf: '',
        trending: '',
        popular:'',
       today:'',
        isLoading: true
    }
  
}


fetchData = () => {

    let configurationapi = 'https://api.themoviedb.org/3/configuration?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let trending = 'https://api.themoviedb.org/3/trending/tv/day?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let popular='https://api.themoviedb.org/3/tv/popular?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US&page=1'
    let today='https://api.themoviedb.org/3/tv/airing_today?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US&page=1'
    let urlArray = [configurationapi, trending,popular,today]

    let promiseArray = urlArray.map(url => axios.get(url));
    axios.all(promiseArray)
        .then(results => {
            let res = results.map(r => r.data);
            if(this._isMounted)
            this.setState({ trending: res[1], conf: res[0] ,popular:res[2] ,isLoading: false,today:res[3]})
            // console.log(res)
        })
    }
componentDidMount() {
    this._isMounted = true;
this.fetchData()
}
componentWillUnmount() {
    this._isMounted = false;
   
  }
  render() {
  
    if(this.state.isLoading){
      return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    }
    
    return (
      <div className="App">

  
     <h2 style={{color:'white',float:'left',paddingLeft:'20px'}}>Trending</h2>
    <MainCon data={this.state.trending} conf={this.state.conf}    ></MainCon> 
     <br/>
     <br/>
     <h2 style={{color:'white',float:'left',paddingLeft:'20px'}}>Papular</h2>
     <MainCon data={this.state.popular} conf={this.state.conf}  ></MainCon>
     <br/>
     <br/>
     <h2 style={{color:'white',float:'left',paddingLeft:'20px',fontFamily:"Times New Roman"}}>New Tonight</h2>
     <MainCon data={this.state.today} conf={this.state.conf}  ></MainCon>
      <Switch>
 
      <Route exact path={"/Details/:id"} exact component ={Details}/>
      
   
/>

     </Switch>
     <br/>
     <br/> 
     <br/>
     <br/>
     <br/>
     <br/> 
     <br/>
     <br/>
      

      </div>
    );
  }
}

