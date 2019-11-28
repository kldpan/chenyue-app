import React from "react";
import { connect } from "react-redux";
import { loadIndexTourListDate } from "@/components/main/index/actionCreator";
import Swiper from "@/components/common/Swiper/swiperBanner.jsx"
import {ToTourSd} from "@/components/main/index/styled";
import {ToTourh} from "@/components/main/index/styled";
//import {ToTourall} from "@/components/main/index/styled";
class TourList extends React.Component{
    render(){
            if(this.props.tourlist.size!==0){
                console.log(this.props.tourlist)
                 return(
                  <div>
                    {/* <ToTourall>  */}
                       <ToTourh>
                           <div>巡回演出</div>
                       </ToTourh>
                        <Swiper  id={"totour"} config={{
                                 slidesPerView: 1.2,
                                 spaceBetween: 5,
                                 effect: 'coverflow',
                                 grabCursor: true,
                                 centeredSlides: true,
                                 //slidesPerView: 'auto',
                                coverflow: {
                                       rotate: 60,
                                       stretch: 0,
                                       depth: 100,
                                       modifier: 1,
                                       slideShadows : true
                                        }}}>    
    
                     {this.props.tourlist.map((item,index)=>(
                                 
                        <div className="swiper-slide"  key={index} > 
                          <ToTourSd>     
                           <img src={item.get("pic")} />
                        <p  className="p1">{item.get("show_name")} </p> 
                            <p className="p2">{item.get("schedular_num")}场巡演</p>
                                  </ToTourSd>    
                              </div>
                            ))}
                        </Swiper>
                   {/* </ToTourall>   */}
                 </div>
                 )
            }else{
                return null;
            }
    }
    componentDidMount(){ 
           this.props.loadIndexTourListDate.bind(this)();
    }
}
    const mapStateToProps = state => {
        // console.log(state)
        return {
          currentCity: state.getIn(["indexReducer","currentCity"]),
          tourlist:state.getIn(["indexReducer","tourlist"])
        };
      };
      const mapDispatchToProps = dispatch => {
        return {
            loadIndexTourListDate(){
                    var temp={
                        city_id:this.props.currentCity.get("city_id"),
                    }
                    loadIndexTourListDate(dispatch,temp)
                }
        }
      };
 export default connect(mapStateToProps, mapDispatchToProps)(TourList);