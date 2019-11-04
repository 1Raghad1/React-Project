import React, { Component } from 'react'
import MainCom from './MainCom'
import InfiniteCarousel from 'react-leaf-carousel'
// import axios from 'axios'
export default class MainCon extends Component {
   
    render() {
        let main=this.props.data.results.map((item) => {
           if(this.props.data.results.indexOf( item)<20){
               console.log(item)
            let url = this.props.conf.images.base_url + "w500" + item.poster_path
// console.log(item.id)
            return <MainCom 
             img={url}
              title={item.name} 
              pref={item.overview}
            //   key={item.id}
             />
           }
              })

        return (
       
            <InfiniteCarousel style={{margin:'50px'}}
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={true}
            showSides={true}
            sidesOpacity={.9}
            sideSize={0}
            slidesToScroll={3}
            slidesToShow={4}
            scrollOnDevice={true}
            autoCycle={true}
            cycleInterval={2000}
            slidesSpacing={160}
          >
                {main}
               </InfiniteCarousel> 
        )
    }
}

