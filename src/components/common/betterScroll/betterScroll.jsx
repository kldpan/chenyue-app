import React from "react";
import { connect } from "react-redux";
import BScroll from "better-scroll";
import {ScrollCss} from "@/components/main/index/styled.js"

class Bscroll extends React.PureComponent {
  state={
    scroll:null
  }
  render() {
    console.log(this.state.scroll);
    
      return(
      <ScrollCss>
        <div className="wapper">
          <div className="content">
            {this.props.children}
          </div>
        </div>
      </ScrollCss>
      )    
    }
  componentDidMount(){
    setTimeout(()=>{
     new BScroll(document.querySelector('.wapper'));
    },300)
  }
}  
  const mapStateToProps = state => {
    return {
     
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Bscroll);