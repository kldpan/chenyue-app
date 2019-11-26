import {GET_HOTSRECOMMED_DATA} from "./actionType";

export const LOAD_TEST_DATA = "index/get_test_data";
export const STE_CURRENT_CITY = "index/set_current_city";

const loadIndexSethotsData= val => {
  return {
    type:GET_HOTSRECOMMED_DATA,
    val
  }
}

var poxy = "/apis";

export const loadGetTestDate = dispatch => {
  return () => {
    fetch("/apis/api/v1/topics", {
      method: "GET"
    })
      .then(data => {
        return data.json();
      })
      .then(res => {
        dispatch({
          type:LOAD_TEST_DATA,
          val:res.data
        })
      });
  };
};

// /home/index/getHotsRecommendList?city_id=0&version=6.0.8&referer=2

export const loadIndexHotsListDataAsync = (dispatch,params) => {
    fetch(poxy + `/home/index/getHotsRecommendList?city_id=${params.city_id}&version=6.0.8&referer=2`, {
      method: "GET"
    })
      .then(data => { 
        return data.json();
      })
      .then(res => {
        console.log(res);
        var  val =res.data.hots_show_list;
        dispatch(loadIndexSethotsData(val))
      });
};


