import React, { Component } from 'react'
import './css/App.css';
import dotenv from 'dotenv'
import CompCon from './component/CompCon'
import Header from './component/Header'
import Footer from './component/Footer'

import MainCom from './component/MainCom'
import MainCon from './component/MainCon'
import { Switch, Route } from 'react-router-dom'
export default class App extends Component {

  render() {
   
    //  const url =dotenv.get(REACT_APP_TMDB_API_KEY)
    return (
      <div className="App">
        <Header />
   <MainCon ></MainCon>
        {/* <CompCon /> */}
        <Footer />

      </div>
    );
  }
}

