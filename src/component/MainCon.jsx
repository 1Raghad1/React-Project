import React, { Component } from 'react'
import MainCom from './MainCom'
import {Carousel} from 'react-bootstrap'
import axios from 'axios'
export default class MainCon extends Component {
       constructor(props){
    super(props)
    let main=''
    this.state={
    conf:'1',
    data:'2',
    img:'',
    title:'4',
    pref:'5'
  } 
}

  componentDidMount(){
    this.fetchData()
  }
  fetchData = () => {

      let url1='https://api.themoviedb.org/3/configuration?api_key=33a2984bebc4d620c6e39712c8c4877d'
      let url2='https://api.themoviedb.org/3/trending/tv/day?api_key=33a2984bebc4d620c6e39712c8c4877d'
      let urlArray = [url1,url2] 
      
  let promiseArray = urlArray.map(url => axios.get(url)); 
  axios.all(promiseArray)
  .then(results => {
    let res = results.map(r => r.data);
    this.setState({data:res[1],conf:res[0]})

  this.main = this.state.data.results.map(item=>{
//   console.log(item)
    let url=this.state.conf.images.base_url+"w500"+item.poster_path

this.setState({img:url,title:item.name,pref:item.overview})
return <MainCom img={this.state.img } />


})
   })
   
  }

    render() {
      
        return (
            <div>
     
            <Carousel interval='3000'> 
              {console.log(this.state.img)}
              
           <img src ={this.state.img}/>
             
               
       </Carousel > 
        </div> 

        )
    }
}
