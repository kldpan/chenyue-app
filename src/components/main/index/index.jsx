import React from "react";
import { connect } from "react-redux";
import { loadGetTestDate } from "./actionCreator";
import HotsList from "./toHotsRecommendList";

import Swiper from "./topSection/swiper.jsx";
import TopBar from "@/components/main/index/topBar"
import Select from "./topSection/selectList.jsx"
import MiddleComponent from "./middleSection/middleComponetSwiper.jsx"
import Bscroll from "@/components/common/betterScroll/betterScroll.jsx"

import  ToTourList from "@/components/main/index/toTourRecommendList"
class One extends React.Component {
  render() {
    return (
      <div id="index">

        <TopBar></TopBar>
        <Bscroll>
          <Swiper></Swiper>
          <Select></Select>
          <HotsList />
          <ToTourList/>
          <MiddleComponent />
        </Bscroll>
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
