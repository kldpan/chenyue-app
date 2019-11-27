import React from 'react';
import {connect} from "react-redux";
import {loadIndexHotsListDataAsync} from "@/components/main/index/actionCreator"
import Swiper from "@/components/common/Swiper/swiperBanner.jsx";
import {Header} from "@/components/main/index/styled";
import { NICE,RMYC } from "../styled";
class HotsList extends React.Component {
  render() {
    console.log(this.props.testRMYC.toJS())
    if(this.props.testRMYC.size!==0){
      return (
        <Header>
          <RMYC>热门演出</RMYC>
        <Swiper id={"testRMYC"} config={{
          slidesPerView: 3.1,
          spaceBetween: 10,
        }}>
        {
            this.props.testRMYC.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <div className="cccc">
                    <img src={item.get("pic")} alt="" style={{width:"100%",height:"145px"}} />
                </div>
            <NICE>{item.get("show_name")}</NICE>
              </div>
            ))
          }
        </Swiper>
        </Header>
        
    );
    }else{
      return null;
    }
   
  }
  componentDidMount(){
      this.props.loadIndexHotsListDataAsync.bind(this)();
  }
}
const mapStateToProps = state => {
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"]),
    testRMYC:state.getIn(["indexReducer","testRMYC"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIndexHotsListDataAsync(){
      loadIndexHotsListDataAsync(dispatch,{city_id:this.props.currentCity.get("city_id")});
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotsList);
