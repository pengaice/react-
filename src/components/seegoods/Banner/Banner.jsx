import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './index.styl'
class Banner extends Component {
  static propTypes = {
    banner:PropTypes.array.isRequired
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
    const {banner} = this.props;
    return (
      <div className="msite_nav">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              banner.map((item,index)=>{
                return(
                  <div className="swiper-slide" key={index}>
                    <a href="javascript:">
                      <div className="content">
                        <div className="subTitle">{item.subTitle}</div>
                        <div className="title">{item.title}</div>
                        <div className="desc">{item.desc}</div>
                      </div>
                      <img src={item.picUrl} alt=""/>
                    </a>
                  </div>
                )
              })
            }
       
        </div>
        </div>
      </div>
    )
  }
}
export default Banner;