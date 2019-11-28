import React from "react";
import { connect } from "react-redux";
// import {toJS} from "immutable";
import {getShowListAsync} from "../actionCreator.js"

class botList extends React.PureComponent {
  
  render() { 
    setTimeout(() => {
      console.log(this.props.list);
    }, 1000);
    
    
    if(this.props.list){
      return(
      <div>
        {this.props.list.toJS().map((item,index)=>(
          <div key={index}>
            <img src={item.pic} alt=""/>
          </div>
        ))}
      </div>
       
      )    
    }else{
      return null
    }
     
  }
}  
  const mapStateToProps = state => {
    return {
      list:state.getIn(["indexReducer","list"])
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      getShowListAsync(){
        var temp ={
          page: this.props.page
          } 
          getShowListAsync(dispatch,temp)
        },
      
      }
    };
export default connect(mapStateToProps, mapDispatchToProps)(botList);