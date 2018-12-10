import React from 'react';
import ReactDOM from 'react-dom'
import  '../src/assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import {HashRouter,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Home from './containers/home'
import Classify from './containers/nav'
import Seegoods from './containers/topic'
import Shopcart from './components/shopcart'
import Personal from './components/personal'
import store from './redux/store'
import './mock/mockServer'

ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/classify' component={Classify}></Route>
          <Route path='/seegoods' component={Seegoods}></Route>
          <Route path='/shopcart' component={Shopcart}></Route>
          <Route path='/personal' component={Personal}></Route>
          <Route component={Home}></Route>
        </Switch>
      </HashRouter>
    </Provider>
  ),
   document.getElementById('root'));
