import {fromJS} from "immutable";
import { LOAD_TEST_DATA} from "./actionCreator";
const defaultState=fromJS({
    num:0,
    testList:[]
});
export default (state=defaultState,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case LOAD_TEST_DATA:
           return  state.set("testList",fromJS(action.val));
    }
    return state;
}