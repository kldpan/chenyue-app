import React from "react";
import { connect } from "react-redux";
import {Middle} from "@/components/main/index/styled";
import ItmeComponents from "@/components/common/indexMiddleItem/indexMiddleItem.jsx"
import {getFloorShowAsync} from "@/components/main/index/actionCreator"

class MiddleComponent extends React.PureComponent {
  
  render() {
    if(this.props.floorShow){
      return(
        <Middle>
        <div>
          {
            this.props.floorShow.map((item,index)=>(
              <ItmeComponents data={item} key={index} index={index}></ItmeComponents>
            ))
          }
           
        </div>
       </Middle>
      )    
    }else{
      return null;
    } 
      
    }
    componentDidMount(){
      this.props.getFloorShow.bind(this)()
    }
}  
  const mapStateToProps = state => {
    return {
      currentCity: state.getIn(["indexReducer", "currentCity"]),
      floorShow: state.getIn(["indexReducer", "floorShow"]),
      // vocalConcert: state.getIn(["indexReducer", "floorShow",0]),
      // musicDrama: state.getIn(["indexReducer", "floorShow",1]),
      // theLivingTheatre: state.getIn(["indexReducer", "floorShow",2]),
      // childPlay: state.getIn(["indexReducer", "floorShow",3]),
      // concert: state.getIn(["indexReducer", "floorShow",4]),
      // exhibition: state.getIn(["indexReducer", "floorShow",5]),
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      getFloorShow(){
        var temp ={
          city_id:this.props.currentCity.get("city_id")
        }
        getFloorShowAsync(dispatch,temp)
      }
      }
    };
export default connect(mapStateToProps, mapDispatchToProps)(MiddleComponent);