//action creator 用来创建action对象的工厂函数模块
//同步action creator 返回对象
//异步action creator 返回一个回调函数
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './action-type'

import {
  reqHomeData,
  reqTopicData,
  reqNavData
} from '../api'

export function getHomeData() {
  return async dispatch=>{
    const homeData = await reqHomeData();
    const home = homeData.data;
    if(homeData.code === 0){
      dispatch({type: RECEIVE_HOMEDATA,data: home})
    }
   
  }
}

export function getTopicData() {
  return async dispatch=>{
    const topicData = await reqTopicData()
    const topic = topicData.data;
    if(topicData.code ===0){
      dispatch({type: RECEIVE_TOPICDATA,data: topic})
    }
   
  }
}
export function getNavData() {
  return async dispatch=>{
    const navData = await reqNavData()
    const nav = navData.data
    if (navData.code === 0) {
      dispatch({type: RECEIVE_NAVDATA, data: nav})
    }
  }
}
