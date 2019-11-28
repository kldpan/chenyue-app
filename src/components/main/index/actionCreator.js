import {GET_SWIPER_DATA,GET_VIP_DATA,GET_HOTSRECOMMED_DATA,LOAD_TEST_DATA,GET_FLOOR_SHOW,GET_HOT_THEATRE,GET_SHOW_LIST,CHANGE_PAGE,SET_TOUR_LIST} from "./actionType";
// export const LOAD_TEST_DATA = "index/get_test_data";
// export const STE_CURRENT_CITY = "index/set_current_city";


const loadIndexSethotsData= val => {
  return {
    type:GET_HOTSRECOMMED_DATA,
    val
  }
}
// 巡演
const loadIndexTourListDateAsync=val=>{
  return {
    type:SET_TOUR_LIST,
    val
  }
}

var poxy = "/apis";


const loadGetSwiperData = val=>{
  return{
    type:GET_SWIPER_DATA,
    val
  }
}
const getVipHomeSchedular = val=>{
  return{
    type:GET_VIP_DATA,
    val
  }
}
const getFloorShow = val=>{
  return{
    type:GET_FLOOR_SHOW,
    val
  }
}

const getHotTheatre = val=>{
  return{
    type:GET_HOT_THEATRE,
    val
  }
}

const getShowList = val=>{
  return{
    type:GET_SHOW_LIST,
    val
  }
}

const changePage = val=>{
  return{
    type:CHANGE_PAGE,
    val
  }
}

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
        var  val =res.data.hots_show_list;
        dispatch(loadIndexSethotsData(val))
      });
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

export const getVipHomeSchedularAsync = (dispatch)=>{
  fetch(poxy+`/vip/index/getVipHomeSchedular?version=6.0.8&referer=2`,{
    method:"GET"
  }).then(data=>{
    return data.json();
  }).then(res=>{
    
    var val = res.data
    
    dispatch(getVipHomeSchedular(val))
  })
}

// https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.8&referer=2
export const getFloorShowAsync = (dispatch,params)=>{
  fetch(poxy+`/home/index/getFloorShow?city_id=${params.city_id}&version=6.0.8&referer=2`,{
    method:"GET"
  }).then(data=>{
    return data.json();
  }).then(res=>{
    
    var val = res.data
    
    dispatch(getFloorShow(val))
  })
}

export const getHotTheatreAsync = (dispatch)=>{
  fetch(poxy+`/home/index/getHotTheatre?version=6.0.8&referer=2`,{
    method:"GET"
  }).then(data=>{
    return data.json();
  }).then(res=>{
    
    var val = res.data
    
    dispatch(getHotTheatre(val))
  })
}

//巡回演出接口
export  const loadIndexTourListDate =(dispatch,params)=>{
  fetch(poxy+`/home/index/getTourRecommendList?city_id=${params.city_id}&version=6.0.8&referer=2`,{
     method:"GET"
  }).then(data =>{
    return data.json();
  }).then(res=>{
     console.log(res.data.tour_show_list)
     var val=res.data.tour_show_list
     dispatch(loadIndexTourListDateAsync(val))
  }) 
}  

export const getShowListAsync = (dispatch,params,fn)=>{
  console.log(params)
  // console.log(fn)
  fetch(poxy+`/Show/Search/getShowList?cityAdd=&page=${params.page}&version=6.0.8&referer=1`,{
    method:"GET"
  }).then(data=>{
    return data.json();
  }).then(res=>{
    var val = res.data.list;
    fn()
    dispatch(getShowList(val))
  })
} 


export const changePageAsync = (dispatch,params)=>{

  dispatch(changePage(params))
}
