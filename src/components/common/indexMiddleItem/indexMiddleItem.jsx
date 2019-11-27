import React from "react";
import { connect } from "react-redux";
import SwiperBanner from "@/components/common/Swiper/swiperBanner.jsx"

class itmeComponents extends React.PureComponent {
  
  render() { 
    // console.log(this.props.index);
    
      return(
        <div className="category-block__list">
          <div className="category-block__list__wrap">
            <h3 className="category-block__list__wrap__title">{this.props.data.get("title")}</h3>
            <div className="category-block__list__wrap__arrow">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaTgChpAAAAD3RSTlMA/Aa1qrzcwa+ezcijk5JAYXVXAAAAVUlEQVQoz2MYtoDNAIsghzA2pYEOWASZRbApNWzAIqiKTSlT4QEsouqS2JQGXsAiqpVApCDTxgeYgtoy2OyZQJyLmAqxhAirBLbwcCAy5NgaGIYzAADnxQppL/x7ngAAAABJRU5ErkJggg==" alt=""/>
            </div>
          </div>
          <div className="ategory-block__list__row">
            <div className="row--bg">
              <div className="category-block__list__row__item">
                <img src={this.props.data.getIn(["list",0,"pic"])} alt=""/>
              </div>
              <div className="category-block__list__row__info">
                <p className="category-block__list__row__info__date">
                    <strong>{this.props.data.getIn(["list",0,"display_show_time"])}</strong>
                    <span>{this.props.data.getIn(["list",0,"week"])}</span>
                                      
                </p>
                <h3 className="category-block__list__row__info__title">{this.props.data.getIn(["list",0,"schedular_name"])}</h3>
                <p className="category-block__list__row__info__venue">{this.props.data.getIn(["list",0,"city_name"])}|{this.props.data.getIn(["list",0,"venue_name"])}</p>
              </div>
            </div>
          </div>
           <SwiperBanner id={`middleBanner${this.props.index}`} config={{
                  slidesPerView: 3.1,
                  spaceBetween: 10,
               }}>
             {
               this.props.data.toJS().list.map((item,index)=>(
                 
                    <div className="swiper-slide" key={index} >
                      {/* <div className="swiper-slide-css"> */}
                        <div className="category-block__list__column__item">
                          <img src={item.pic} alt=""/>
                        </div>
                        <h3 className="category-block__list__column__title">
                          {item.schedular_name}
                        </h3>
                        <p className="category-block__list__column__price">
                            <strong>{item.low_price}</strong>
                            <span>起</span>
                        </p>
                    {/* </div> */}
                  </div>
               ))
             }
           </SwiperBanner>
        </div>
       
      )    
    }

}  
  const mapStateToProps = state => {
    return {
      classify_list:state.getIn(["indexReducer","topData","classify_list"])
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
     
      }
    };
export default connect(mapStateToProps, mapDispatchToProps)(itmeComponents);