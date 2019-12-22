import React, { Component } from 'react'
import axios from 'axios'
import MainCon from './MainCon'
import {Spinner} from 'react-bootstrap'
export default class Geners extends Component {
    _isMounted = false;
constructor(props){
    super(props)
    this.state={
        data :null,
        isLoading:true
    }
}
fetchData(){
        let url =['https://api.themoviedb.org/3/configuration?api_key=33a2984bebc4d620c6e39712c8c4877d',`https://api.themoviedb.org/3/discover/tv?api_key=33a2984bebc4d620c6e39712c8c4877d&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${this.props.match.params.id}&include_null_first_air_dates=false`]
        let promiseArray = url.map(url => axios.get(url));
        axios.all(promiseArray)
            .then(results => {
                let res = results.map(r => r.data);
                if(this._isMounted)
                this.setState({ conf: res[0]  ,isLoading: false,data:res[1]})
                console.log(res)
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
            <div>
 <MainCon data={this.state.data} conf={this.state.conf}  ></MainCon>
            </div>
        )
    }
}
