/**
 * Created by asus-z on 2018/12/8.
 */
import {createStore,applyMiddleware} from 'redux'
// 开发依赖 生产中手动去除
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))