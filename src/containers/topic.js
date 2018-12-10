/**
 * Created by asus-z on 2018/12/9.
 */
import React from 'react'
import {connect} from 'react-redux'

import Seegoods from '../components/seegoods'
import {getTopicData} from '../redux/action'

export default connect(
  state=>({topic:state.getTopicData}),
  {getTopicData}
)(Seegoods)