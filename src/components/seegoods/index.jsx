import React, {Component} from 'react';

import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import './Seegoods.styl'
import FooterGuide from '../../commonPage/footerGuide/footerGuide'
import Banner from './Banner/Banner'
import Dinglei from './Dinglei/Dinglei'
import BScroll from 'better-scroll'
import Server from './Server/Server'
import Zhenpin from './Zhenpin/Zhenpin'
import TenOclick from './TenOclick/TenOclick'
class Seegoods extends Component {
  static propTypes ={
    getTopicData: PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.getTopicData()
  }
  componentWillReceiveProps (props){
    setTimeout(()=>{
      new BScroll('.SeeGoodsContent',{
        scrollY: true,
        click: true
      })
    },30)
  }
  
  render () {
    console.log(this.props.topic);

    const {banner,column,recommend,tenfifteen,zhen,yxLook,yxWeek} = this.props.topic
    if(!this.props.topic.hasMore){
      return null;
    }
    return (
      <div className="SeeGoods">
        <div className="SeeGoodsMain">
          <div className="top">
            <div className="homeItem">
              <NavLink to="/home">
                <i className="iconfont icon-shouye1"></i>
              </NavLink>
            </div>
            <div className="title">网易严选</div>
            <div className="login">
              <i className="iconfont icon-sousuo2"></i>
              <i className="iconfont icon-shopshoppingco"></i>
            </div>
          </div>
          <div className="SeeGoodsContent">
            <div className="contenta">
              <Banner banner={banner}></Banner>
              
              <Dinglei column={column}></Dinglei>
              <Server recommend={recommend}></Server>
              <TenOclick tenfifteen={tenfifteen}></TenOclick>
          </div>
          </div>
          <Zhenpin zhen={zhen}></Zhenpin>
          <div className="look">
            <div className="lookTitle">
              <div className="foryou">严选look</div>
            </div>
            <div className="lookImg">
              <img src="topicData.yxLook.picUrl" alt=""/>
            </div>
            <div className="comment">
              <img src="topicData.yxLook.avatar" alt=""/> <span>{yxLook.nickname}</span>
                <p>{yxLook.content}</p>
            </div>
          </div>
          <div className="more">更多精彩</div>
          <FooterGuide></FooterGuide>
        </div>
      </div>
    )
  }
}
export default Seegoods;