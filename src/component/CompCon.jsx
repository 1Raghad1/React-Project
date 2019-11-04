import React, { Component } from 'react'
import Comp from './Comp'
import {CardGroup} from 'react-bootstrap'
import InfiniteCarousel from 'react-leaf-carousel'
export default class CompCon extends Component {
    render() {
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
                {/* {main} */}
               </InfiniteCarousel> 
        )
    }
}
