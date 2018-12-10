/**
 * Created by asus-z on 2018/12/9.
 */
import React from 'react'
import {connect} from 'react-redux'

import Home from '../components/home'
import {getHomeData} from '../redux/action'

export default connect(
  state=>({home:state.getHomeData}),
  {getHomeData}
)(Home)