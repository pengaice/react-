import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.styl'
class Server extends Component {  
  static propTypes ={
    recommend:PropTypes.object.isRequired
  }
  render () {
    const {recommend} = this.props
    return (
      <div className="remember">
        <div className="server">
          <div className="serverTitle">
            <div className="foryou">{recommend.name}</div>
          </div>
          <div className="bai">
            <img src={recommend.Item[0].picUrl} alt=""/>
              <div className="baibottom">
                <div className="baiTitle">{recommend.Item[0].title}<span>9.9元起</span></div>
                <div className="baiInfo">{recommend.Item[0].subTitle}</div>
              </div>
          </div>
        </div>
        <div className="drink">
          <div className="drinkLift">
            <div className="drinkTop">{recommend.Item[1].title}</div>
            <div className="drinkInfo">{recommend.Item[1].subTitle}</div>
          </div>
          <div className="drinkImg">
            <img src={recommend.Item[1].picUrl} alt=""/>
          </div>
        </div>
        <div className="drink">
          <div className="drinkLift">
            <div className="drinkTop">{recommend.Item[2].title}</div>
            <div className="drinkInfo">{recommend.Item[2].subTitle}</div>
          </div>
          <div className="drinkImg">
            <img src={recommend.Item[2].picUrl} alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Server;

