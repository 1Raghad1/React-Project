import React, { Component } from 'react'
import MainCom from './MainCom'
import { Carousel } from 'react-bootstrap'
// import axios from 'axios'
export default class MainCon extends Component {
    componentDidMount(){

    }
    
    render() {
//         let main=this.props.data.results.map((item) => {
//             // console.log(item)
           
//             let url = this.props.conf.images.base_url + "w200" + item.poster_path
// // console.log(item.id)
//             return <MainCom 
//              img={url}
//               title={item.name} 
//               pref={item.overview}
//               key={item.id} />
//               })
        return (
       
            <Carousel>
                {/* {main} */}
</Carousel>
        )
    }
}

