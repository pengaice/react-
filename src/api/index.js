/**
 * Created by asus-z on 2018/11/29.
 */

import ajax from './ajax'
const BASE = '/api'

//login
export const reqSendCode = (phone)=>ajax(BASE + '/sendcode',{phone})

export const reqHomeData = ()=>ajax('/homedata')
export const reqTopicData = ()=>ajax('/topicdata')
export const reqNavData = ()=>ajax('/navdata')


