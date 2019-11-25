import React from 'react';
import {TopBarSd} from "@/components/main/index/styled";
import {withRouter} from "react-router-dom"
// import {connect} from "react-redux" 

class TopBar extends React.PureComponent{
    render(){
      return(
        <TopBarSd>
          <button onClick={this.toPath.bind(this)}>city</button>
        </TopBarSd>
      )
    }  
      toPath(){
        // console.log(this)
        this.props.history.push("/city")
      }
    
}
export default withRouter(TopBar)