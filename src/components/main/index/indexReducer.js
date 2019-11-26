import {fromJS,Map} from "immutable";
import {LOAD_TEST_DATA,GET_SWIPER_DATA,GET_VIP_DATA,GET_HOTSRECOMMED_DATA,STE_CURRENT_CITY} from "./actionType.js";
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
    vipData:{}
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
             
            
            
    }
    return state;
}