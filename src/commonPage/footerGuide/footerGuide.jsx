import React, {Component} from 'react';
import './footerGuide.styl'
import {NavLink} from 'react-router-dom'

class FooterGuide extends Component {
  render () {
    return (
      <footer className="footer_guide border-1px">
        <NavLink className="guide_item" to="/home">
          <span className="item_icon">
            <i className="iconfont icon-shouye1"></i>
          </span>
          <span>首页</span>
        </NavLink>
        <NavLink className="guide_item" to="/classify">
          <span className="item_icon">
            <i className="iconfont icon-iconyihuifu-"></i>
          </span>
          <span>分类</span>
        </NavLink>
        <NavLink className="guide_item" to="/seegoods">
          <span className="item_icon">
            <i className="iconfont icon-wupin"></i>
          </span>
          <span>识物</span>
        </NavLink>
        <NavLink className="guide_item" to="/shopcart">
          <span className="item_icon">
            <i className="iconfont icon-shopshoppingco"></i>
          </span>
          <span>购物车</span>
        </NavLink>
        <NavLink className="guide_item" to="/personal">
          <span className="item_icon">
            <i className="iconfont icon-gerenzhongxin"></i>
          </span>
          <span>个人</span>
        </NavLink>
  </footer>
    )
  }
}

export default FooterGuide;