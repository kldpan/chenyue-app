import React from "react";
import { connect } from "react-redux";
import {VipCss} from "@/components/main/index/styled";
import {getVipHomeSchedularAsync} from "../actionCreator.js"
import SwiperBanner from "../../../common/Swiper/swiperBanner.jsx"


class vipAd extends React.PureComponent {
  
  render() {
    console.log(this.props);
     
    if(this.props.priorList){
      return(
        <VipCss>
          <div className="vip-ahead">
            <div className="vip-ahead__advert">
              <div className="vip-ahead__advert__left">
                <span className="vip-ahead__advert__left__pre">优先购票</span>
                <span className="vip-ahead__advert__left__tip">VIP+会员尊享权益</span>
              </div>
              <div className="vip-ahead__advert__right">
                <span className="vip-ahead__advert__right__lab">99元/年</span>
                <span className="vip-ahead__advert__right__icon"></span>
              </div>
            </div>
            <SwiperBanner id={"middleBanner"}>
              {
                this.props.priorList.map((item,index)=>(
                  <div className="swiper-slide" key={index}>
                    <div className="vip-ahead__list">
                      <div className="vip-ahead__list__item">
                        <img src={item.get('pic')} alt=""/>
                      </div>
                      <div className="vip-ahead__list__info">
                        <h3 className="vip-ahead__list__info__title">{item.get("schedular_name")}</h3>
                        <p className="vip-ahead__list__info__venue">{item.get("city_name")}|{item.get("venue_name")}</p>
                        <p className="vip-ahead__list__info__tip">
                          <span>{item.get("end_time")}</span>
                          <span>开始</span>
                        </p>
                      </div>
                    </div>
                  </div>  
                ))
              }
            </SwiperBanner>
          </div>
        </VipCss>
      )    
    }else{
      return null
    } 
  }
  componentDidMount(){
    this.props.getVipDataInit.bind(this)()
  }
}  
  const mapStateToProps = state => {
    return {
      priorList:state.getIn(["indexReducer","vipData","priorList"])
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      getVipDataInit(){
        getVipHomeSchedularAsync(dispatch)
      }
      }
    };
export default connect(mapStateToProps, mapDispatchToProps)(vipAd);