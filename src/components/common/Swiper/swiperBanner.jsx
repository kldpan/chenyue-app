import React from 'react';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import {BannerList} from "@/components/main/index/styled";
class SwiperBanner extends React.Component {
  
  render() { 
    return ( 
    <BannerList>
      <div className="swiper-container" id={this.props.id}>
        <div className="swiper-wrapper">
            {/* <div class="swiper-slide">Slide 1</div> */}
            {this.props.children}
        </div>
      </div>
    </BannerList>
     );
  }
  componentDidMount(){
    new Swiper (`#${this.props.id}`, { 
    })        
  }
}
 
export default SwiperBanner ;