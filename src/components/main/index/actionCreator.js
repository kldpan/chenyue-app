import {GET_SWIPER_DATA,LOAD_TEST_DATA} from "./actionType";

const loadGetSwiperData = val=>{
  return{
    type:GET_SWIPER_DATA,
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
// https://api.juooo.com/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.8&referer=2
export const loadGetSwiperDataAsync = (dispatch,params)=>{
  fetch(poxy+`/home/index/getClassifyHome?city_id=${params.city_id}&abbreviation=&version=6.0.8&referer=2`,{
    method:"GET"
  }).then(data=>{
    return data.json();
  }).then(res=>{
    
    var val = res.data
    
    dispatch(loadGetSwiperData(val))
  })
}