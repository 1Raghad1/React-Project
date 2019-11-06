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

handleDetailsClick = (tvid) =>{
  const url = `https://api.themoviedb.org/3/tv/${tvid}?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US`

  axios({
    method: 'GET',
    url: url
  }).then(response => {
    // console.log(response) // take a look at what you get back!
    // console.log(`Fetching details for ${tvid}`);
    if(this._isMounted)
    this.setState({ current: response })
    console.log( this.state.current)
   this.props.handlerChangeCurrent(this.state.current)
  })
}
fetchData = () => {

    let configurationapi = 'https://api.themoviedb.org/3/configuration?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let trending = 'https://api.themoviedb.org/3/trending/tv/day?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let popular='https://api.themoviedb.org/3/tv/popular?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US&page=1'
    let gener='https://api.themoviedb.org/3/genre/tv/list?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US'
    let today='https://api.themoviedb.org/3/tv/airing_today?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US&page=1'
    let urlArray = [configurationapi, trending,popular,gener,today]

    let promiseArray = urlArray.map(url => axios.get(url));
    axios.all(promiseArray)
        .then(results => {
            let res = results.map(r => r.data);
            if(this._isMounted)
            this.setState({ trending: res[1], conf: res[0] ,popular:res[2] ,isLoading: false,gener:res[3],today:res[4]})
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
    // console.log(this.state.data)
    if(this.state.isLoading){
      return <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
    }
    
    return (
      <div className="App">

  
     <h2 style={{color:'white',float:'left',paddingLeft:'20px'}}>Trending</h2>
    <MainCon data={this.state.trending} conf={this.state.conf}   handleDetailsClick={this.handleDetailsClick}  ></MainCon> 
     <br/>
     <br/>
     <h2 style={{color:'white',float:'left',paddingLeft:'20px'}}>Papular</h2>
     <MainCon data={this.state.popular} conf={this.state.conf}  handleDetailsClick={this.handleDetailsClick}></MainCon>
     <br/>
     <br/>
     <h2 style={{color:'white',float:'left',paddingLeft:'20px'}}>New Tonight</h2>
     <MainCon data={this.state.today} conf={this.state.conf}  handleDetailsClick={this.handleDetailsClick}></MainCon>
      <Switch>
    {/* <Route exact  path ={'/'} exact component = {Home}/> */}
      <Route exact path={"/Details/:id"} exact component ={Details}/>
      
     {/* <Route path={"/Details/"} render={()=>this.state.current ? <Details  data={this.state.current} />:null}   */}
  
/>
{/* <Route path="/Detail/:id" render={({match}) => {
if(!this.state.current) return <div className="work">error</div>
return <Detail data={this.state.data.find(s => s.id === parseInt(match.params.id))} />
  }          
} /> */}

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

