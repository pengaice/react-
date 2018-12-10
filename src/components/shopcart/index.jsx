import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './index.styl'
import FooterGuide from '../../commonPage/footerGuide/footerGuide'
class Shopcart extends Component {
  render () {
    return (
      <div className="shopCart">
        <div className="shopCartContent">
          <div className="shopTop">
            <div className="title">购物车</div>
            <span>领券</span>
          </div>
          <div className="shopContent">
            <div className="contentTop">
              <span>30天无忧退货</span>
              <span>48小时快速退款</span>
              <span>满88元免邮费</span>
            </div>
            <div className="cart">
              <p>去添加点什么吧</p>
            </div>
            <NavLink className="login" to={('/profile')}>登陆</NavLink>
         
          </div>
          <FooterGuide></FooterGuide>
        </div>
      </div>
    )
  }
}
export default Shopcart;