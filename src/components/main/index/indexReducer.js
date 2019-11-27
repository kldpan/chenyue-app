import {fromJS,Map} from "immutable";
import {LOAD_TEST_DATA,GET_SWIPER_DATA,GET_VIP_DATA,GET_HOTSRECOMMED_DATA,STE_CURRENT_CITY,GET_FLOOR_SHOW,GET_HOT_THEATRE} from "./actionType.js";
const defaultState=fromJS({
    num:0,
    testList:[],
    currentCity:{
        city_id:"0",
        abbreviation:"",
        name:"全国"
    },
    testRMYC:[],
    topData:{},
    vipData:{},
    floorShow:[],
    theatre_list:[]
});
export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case LOAD_TEST_DATA:
           return  state.set("testList",fromJS(action.val));
        case STE_CURRENT_CITY:
            return  state.update("currentCity",x=>x=Map(action.val));
        case GET_HOTSRECOMMED_DATA:
            return  state.set("testRMYC",fromJS(action.val));    
        case GET_SWIPER_DATA:
            return state.set("topData",fromJS(action.val));
        case GET_VIP_DATA:
            return state.set("vipData",fromJS(action.val))   
        case GET_FLOOR_SHOW:
            return state.set("floorShow",fromJS(action.val))
        case GET_HOT_THEATRE:
            return state.set("theatre_list",fromJS(action.val))
            
    }
    return state;
}