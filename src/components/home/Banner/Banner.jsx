import React, {Component} from 'react';
import './Banner.styl'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import PropTypes from 'prop-types'
class Banner extends Component {
  static propTypes = {
    focusList:PropTypes.array.isRequired
  }
  
  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true,
      // autoplay:true,
      //分页器
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 3000,
      }
    })
  }
  render () {
    const {focusList} = this.props;
    return (
      <div className="home_nav">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              focusList.map((item,index)=>{
                return(
                  <div className="swiper-slide" key={index}>
                    <a href="javascript:">
                      <img src={item.picUrl} alt=""/>
                    </a>
                  </div>
                )
              })
            }
            
            </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }
}
export default Banner;