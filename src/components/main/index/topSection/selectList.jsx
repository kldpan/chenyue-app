import React from "react";
import { connect } from "react-redux";
// import {toJS} from "immutable";
import {SelectIco} from "@/components/main/index/styled";
import SelectVip from "./firstVip.jsx"
class Select extends React.PureComponent {
  
  render() { 
    if(this.props.classify_list){
      return(
      <SelectIco>
          <div className="topSection">
          
            <div className="select">
              {
                this.props.classify_list.map((item,index)=>(
                  <div key={index} className="select-son">
                      <img src={item.get("pic")} alt=""/>
                      <span>{item.get("name")}</span>
                  </div>
                ))
              }
            </div>
            <SelectVip/>   
          </div>
         
       </SelectIco>
       
      )    
    }else{
      return null
    }
     
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
export default connect(mapStateToProps, mapDispatchToProps)(Select);