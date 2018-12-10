import React, {Component} from 'react';
import FooterGuide from '../../commonPage/footerGuide/footerGuide'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import './index.styl'
class Classify extends Component {
  state={
    currentIndex:0
  }
  navIndex=(index)=>{
    this.setState({
      currentIndex:index
    })
  }
  componentDidMount () {
    this.props.getNavData()
  }
  componentDidUpdate(){
    new BScroll('.contentRight', {
      click: true,
    })
  }
  componentWillReceiveProps (props){
    new BScroll('.list', {
      click: true,
    })
  }
  
  render () {
    
    const nav = this.props.nav
    console.log(nav);
    const {currentIndex} = this.state
    const contentList = nav[currentIndex]
    return (
        <div>
          <div className="classify">
            <div className="topSearch">
              <input type="search" placeholder="搜索商品，共19591款好物"/>
            </div>
            <div className="content">
              <div className="list">
                <ul className="contentLeft">
                  {
                    nav.map((item,index)=>{
                      return(
                        <li key={index}  onClick={()=> this.navIndex(index)}
                             className={currentIndex === index? "active":""}>
                            {item.name}
                        </li>
                      )
                    })
                  }
                  
                </ul>
              </div>
              <div className="contentRight">
                {
                  contentList?
                    (
                      <div className="rightMain">
                        <img src={contentList.wapBannerUrl} alt=""/>
                          <div className="detailTit">
                            <span className="text">
                              <span>{contentList.name}</span>
                              <span>分类</span>
                            </span>
                          </div>
                          <ul>
                            {
                              contentList.subCateList.map((item, index) => {
                                return (
                                  <li className="item" key={index}>
                                    <img src={item.wapBannerUrl} alt=""/>
                                    <span>{item.name}</span>
                                  </li>
                                )
                              })
                            }
                          </ul>
                      </div>):''
                    
                }
              
              </div>
            </div>
            <FooterGuide></FooterGuide>
          </div>
        </div>
    )
  }
}
export default Classify;