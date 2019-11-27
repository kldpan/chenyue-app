import React from "react";
import { connect } from "react-redux";
import { loadGetTestDate } from "./actionCreator";
import HotsList from "./toHotsRecommendList";

import Swiper from "./topSection/swiper.jsx";
import TopBar from "@/components/main/index/topBar"
import Select from "./topSection/selectList.jsx"
import MiddleComponent from "./middleSection/vipTwo.jsx"

import { Button } from 'antd-mobile';
console.log(Button);
class One extends React.Component {
  render() {
    return (
      <div id="index"> 
       
        <TopBar></TopBar>
        <Swiper></Swiper>
        <Select></Select>
        <HotsList/>
        <MiddleComponent/>
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
