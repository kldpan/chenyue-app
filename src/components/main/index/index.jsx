import React from "react";
import { connect } from "react-redux";
import { loadGetTestDate } from "./actionCreator";
import HotsList from "./toHotsRecommendList";

import TopBar from "@/components/main/index/topBar";
import { Button } from 'antd-mobile';
console.log(Button);
class One extends React.Component {
  render() {
    return (
      <div id="index"> 
        <TopBar/>
        <HotsList/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    num: state.getIn(["indexReducer", "num"]),
    testList: state.getIn(["indexReducer", "testList"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    queryTest() {
      dispatch(loadGetTestDate(dispatch));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(One);
