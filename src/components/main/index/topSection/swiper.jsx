import React from "react";
import SwiperBanner from "../../../common/Swiper/swiperBanner.jsx"
import { connect } from "react-redux";
import {loadGetSwiperDataAsync} from "../actionCreator.js"
// import {toJS} from "immutable";

class Swiper extends React.PureComponent {
  
  render() { 
    
    if(this.props.slide_list){
      return ( 
      <SwiperBanner>
          
          {
            this.props.slide_list.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <img src={item.get("image_url")} alt=""/>
              </div>
            ))
          }

      </SwiperBanner>
     ); 
    }else{
      return null;
    }
       
  }
  componentDidMount(){
    this.props.loadSwiperData.bind(this)()
  }
}  
  const mapStateToProps = state => {
    return {
      currentCity:state.getIn(["indexReducer", "currentCity"]),
      slide_list:state.getIn(["indexReducer","topData","slide_list"])
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      loadSwiperData(){
        var temp={
          city_id:this.props.currentCity.get("city_id")
        }
        loadGetSwiperDataAsync(dispatch,temp);
       
        
        
      }
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Swiper);