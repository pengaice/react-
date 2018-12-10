import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.styl'
import logo from './images/logo.png'
import FooterGuide from '../../commonPage/footerGuide/footerGuide'
class Personal extends Component {
  render () {
    return (
      <div className="personal">
        <div className="top">
          <div className="home">
            <NavLink to={('/MSite')}>
              <i className="iconfont icon-shouye1"></i>
            </NavLink>
          </div>
          <div className="title">网易严选</div>
          <div className="login">
            <i className="iconfont icon-sousuo2"></i>
            <NavLink to={('/shopcart')}>
              <i className="iconfont icon-shopshoppingco"></i>
            </NavLink>
          </div>
        </div>
        <div className="content">
          <div className="conImg">
            <img src={logo} alt=""/>
          </div>
          <router-view />
          <div className="loginWay" v-show="$route.path === '/profile'">
            <div className="phone">
              <a href="javascript:;">
                {/*onClick="$router.push('/profile/phone')"*/}
                <span>手机号码登陆</span>
              </a>
            </div>
            <div className="email">
              <a href="javascript:;">
              <span>邮箱账号登陆</span>
              </a>
            </div>
          </div>
        </div>
        <div className="other">
          <div className="otherItem">
            <i className="iconfont icon-weixin3"></i>
            微信
          </div>
          <div className="otherItem">|</div>
          <div className="otherItem">
            <i className="iconfont icon-qq"></i>
            QQ
          </div>
          <div className="otherItem">|</div>
          <div className="otherItem">
            <i className="iconfont icon-weibo"></i>
            微博
          </div>
        </div>
      </div>
    )
  }
}
export default Personal;