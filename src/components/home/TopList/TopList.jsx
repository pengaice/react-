import React, {Component} from 'react';
// import {NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import './TopList.styl'
class TopList extends Component {
  state = {
    currentIndex: 0
  }
  currentIndex = index =>{
    this.setState ({
      currentIndex: index
    })
  }
  
  componentDidMount() {
    setTimeout(()=>{
    new BScroll('.listWrapper',{
      scrollX: true,
      click: true
    })
    },30)
  }
  render () {
    const {cateList} = this.props;
    return (
      <div className="listWrapper">
        <ul className="topList">
          {
            cateList.map((item,index)=>{
              return(
                <li key={index}>
                  <a href="javascript:;" onClick={()=> this.currentIndex(index)}
                     className={index === this.state.currentIndex ? "on" : ""} >{item.name}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TopList;



