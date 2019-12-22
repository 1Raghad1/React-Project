import React, { Component } from "react";
import MainCom from "./MainCom";
import InfiniteCarousel from "react-leaf-carousel";
// import axios from 'axios'
export default class MainCon extends Component {
  state = {
    current: []
  };
  render() {
    let main = this.props.data.results.map(item => {
      // if(this.props.data.results.indexOf( item)<20){
      // console.log(item)
      let url = this.props.conf.images.base_url + "w500" + item.poster_path;
      return (
        <MainCom
          key={item.id}
          img={url}
          title={item.name}
          pref={item.overview}
          id={item.id}
          current={this.state.current}
          type={this.props.type}
          handleDetailsClick={this.props.handleDetailsClick}
        />
      );
    });
    return (
      <InfiniteCarousel
        style={{ marginBottom: "150px" }}
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3
            }
          }
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.9}
        sideSize={0}
        slidesToScroll={3}
        slidesToShow={4}
        scrollOnDevice={true}
        autoCycle={true}
        cycleInterval={2000}
        slidesSpacing={180}
      >
        {main}
      </InfiniteCarousel>
    );
  }
}
