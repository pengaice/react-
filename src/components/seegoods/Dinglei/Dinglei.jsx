import React, {Component} from 'react';
import './index.styl'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
class Dinglei extends Component {
  static propTypes = {
    column:PropTypes.array.isRequired
  }
  
  componentDidMount() {
    setTimeout(()=>{
      new BScroll('.wrapper',{
        scrollX: true,
        click: true
      })
    },30)
  }
  
  render () {
    const {column} = this.props;
    return (
      <div className="wrapper" ref="wrapper">
        <ul className="content">
          {
            column.map((item,index)=>{
              return(
                <li className="contentItem" key={index}>
                  <img src={item.picUrl} alt=""/>
                  <p>{item.title}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Dinglei;

    
