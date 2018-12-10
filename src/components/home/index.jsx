import React, {Component} from 'react';
import FooterGuide from '../../commonPage/footerGuide/footerGuide'
import './index.styl'
import TopList from './TopList/TopList'
import Banner from './Banner/Banner'
import PropTypes from 'prop-types'
import dui from './images/dui.png'
import logo from './images/logo.png'
import BScroll from 'better-scroll'
{/*
 // import TiSolit from './TiSolit/TiSolit'
 // import Scrollt from './Scrollt/Scrollt'
 // import LastTime from './LastTime/LastTime'
 // import Goods from './Goods/Goods'
 // import LastTime from './Banner/Banner'

*/}

class Home extends Component {
  static propTypes ={
    getHomeData: PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.getHomeData()
  }
  
  componentWillReceiveProps (props){
    setTimeout(()=>{
      new BScroll('.homeContent',{
        scrollY: true,
        click: true
      })
    },30)
  }
  goToPersonal = ()=>{
    this.props.history.replace('/personal')
  }
  render () {
    console.log(this.props.home);
    const {cateList,focusList,tagList,newItemNewUserList,popularItemList,topicList} = this.props.home
    if(!this.props.home.freshmanFlag){
      return null;
    }
    return (
      <div className="home">
        <div className="homeContainer">
          <div className="top">
            <div className="topMain">
              <div className="logo">
                <img src={logo} alt=""/>
              </div>
              <div className="search">
                <input type="search" placeholder="搜索商品，共19591款好物"/>
              </div>
              <div className="login" onClick={this.goToPersonal}><span>登陆</span></div>
            </div>
            <TopList cateList={cateList}></TopList>
          </div>
          <div className="homeContent">
            <div className="content">
      
              <Banner focusList={focusList}></Banner>
              <div className="promise">
                <a href="javascript:; ">
                  <img src={dui} alt=""/>
                  <span>网易自营品牌</span>
                </a>
                <a href="javascript:; ">
                  <img src={dui} alt=""/>
                  <span>30天无忧退货</span>
                </a>
                <a href="javascript: ">
                  <img src={dui} alt=""/>
                  <span>48小时快速退款</span>
                </a>
              </div>
              <div className="creater">
                <div className="creatTop">
                  <div className="left">品牌制造商直供</div>
                </div>
                <ul className="creatContent">
                  {
                    tagList.map((item,index)=>{
                      return(
                        <li v-for="(item,index) in homeData.tagList" key={index}>
                          <a href="javascript:;">
                            <div className="ctn">
                              <div className="title">{item.name}</div>
                              <span className="proce1">{item.floorPrice}</span>
                            </div>
                            <img src={item.picUrl} alt=""/>
                          </a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="goods">
                <div className="center">
                  <div className="ren">人气推荐.好物精选</div>
                  <div className="all">查看全部 ></div>
                </div>
              </div>
    
            </div>
  
          </div>
          <FooterGuide></FooterGuide>
        </div>
      </div>
    )
  }
}
export default Home;