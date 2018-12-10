/**
 * Created by asus-z on 2018/12/8.
 */
//根据之前的状态和action产生新的状态
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './action-type'
import {combineReducers} from 'redux'

const home= {}
function getHomeData(preState = home,action) {
   switch(action.type){
     case RECEIVE_HOMEDATA:
       return action.data
     default:
       return preState
   }
}
const nav = []
function getNavData(preState = nav,action) {
  switch(action.type){
    case RECEIVE_NAVDATA:
      return action.data
    default:
      return preState
  }
}
const topic = {}
function getTopicData(preState = topic,action) {
  switch(action.type){
    case RECEIVE_TOPICDATA:
      return action.data
    default:
      return preState
  }
}

//暴露 函数调用的返回值 xxx（）
export default combineReducers({
  getHomeData,
  getNavData,
  getTopicData
})