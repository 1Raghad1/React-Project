import React, { Component } from 'react'
import './css/App.css';
// import dotenv from 'dotenv'
// import CompCon from './component/CompCon'
import axios from 'axios'
import Header from './component/Header'
import Footer from './component/Footer'

// import MainCom from './component/MainCom'
import MainCon from './component/MainCon'
// import { Switch, Route } from 'react-router-dom'
export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        conf: '',
        data: [],
        img: '',
        title: '',
        pref: '',
        isLoading: true
    }
  
}


fetchData = () => {

    let url1 = 'https://api.themoviedb.org/3/configuration?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let url2 = 'https://api.themoviedb.org/3/trending/tv/day?api_key=33a2984bebc4d620c6e39712c8c4877d'
    let urlArray = [url1, url2]

    let promiseArray = urlArray.map(url => axios.get(url));
    axios.all(promiseArray)
        .then(results => {
            let res = results.map(r => r.data);
            this.setState({ data: res[1], conf: res[0] , isLoading: false})
            console.log(res)
        })
    }
componentDidMount() {
this.fetchData()
}
  render() {
    console.log(this.state.data)
    if(this.state.isLoading){
      return <div>Waiting...</div>
    }
    
    return (
      <div className="App">
        <Header />
        {console.log(this.state.data)}
    <MainCon data={this.state.data} conf={this.state.conf} ></MainCon> 
        <Footer />

      </div>
    );
  }
}

