
import React from 'react'
import {connect} from 'react-redux'

import Classify from '../components/classify'
import {getNavData} from '../redux/action'

export default connect(
  state=>({nav:state.getNavData}),
  {getNavData}
)(Classify)