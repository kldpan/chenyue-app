import {fromJS} from "immutable";
import {LOAD_TEST_DATA,GET_SWIPER_DATA,GET_VIP_DATA} from "./actionType.js";
const defaultState=fromJS({
    num:0,
    testList:[],
    currentCity:{
        city_id:"0",
        abbreviation:"",
        name:"全国"
    },
    topData:{},
    vipData:{}
});
export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case LOAD_TEST_DATA:
           return  state.set("testList",fromJS(action.val));
        case GET_SWIPER_DATA:
            return state.set("topData",fromJS(action.val));
        case GET_VIP_DATA:
            return state.set("vipData",fromJS(action.val))   
             
            
            
    }
    return state;
}